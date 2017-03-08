/**
 * Created by sunrise2075 on 2017/2/26.
 */
// Create a styles array to use with the map.
var styles = [
    {
        featureType: 'water',
        stylers: [
            { color: '#19a0d8' }
        ]
    },{
        featureType: 'administrative',
        elementType: 'labels.text.stroke',
        stylers: [
            { color: '#ffffff' },
            { weight: 6 }
        ]
    },{
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
            { color: '#e85113' }
        ]
    },{
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
            { color: '#efe9e4' },
            { lightness: -40 }
        ]
    },{
        featureType: 'transit.station',
        stylers: [
            { weight: 9 },
            { hue: '#e85113' }
        ]
    },{
        featureType: 'road.highway',
        elementType: 'labels.icon',
        stylers: [
            { visibility: 'off' }
        ]
    },{
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
            { lightness: 100 }
        ]
    },{
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
            { lightness: -100 }
        ]
    },{
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
            { visibility: 'on' },
            { color: '#f0e4d3' }
        ]
    },{
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
            { color: '#efe9e4' },
            { lightness: -25 }
        ]
    }
];

//cache google map object as global variable
var map = null;

//cache infoWindow object as global variable
var infoWindow = null;

var INIT_ZOOM_NUM = 11;
var DETAIL_ZOOM_NUM = 14;

//google map API callback function
function initMap(){
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: INIT_ZOOM_NUM,
        center: center.location
    });
    map.setOptions({styles: styles});

    //initialize markers on the map
    var markers = [];
    geoLocations.forEach(function(loc){
        var marker = new google.maps.Marker({
            position: loc.location,
            map: map,
            title: loc.title,
            icon: {
                url: loc.icon
            }
        });
        marker.addListener('click', function() {
            //have the  marker bounce for a limited times
            marker.setAnimation(4);
            openInfoWindow(marker);
        });
        markers.push(marker);
    });

    //invoke function to apply knockout bindings
    initKoViewModel4App(markers);
}

/*
* @description: open info window for
*              the given google map marker
* @param  marker the object of marker
* @return void
* */
function openInfoWindow(marker){
    //query the window content of given marker
    var contentString = windowContents[marker.title]

    //create an info window object
    //or set content on the existing info window
    //we needn't create info window object repeatedly
    if(!infoWindow){
        infoWindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 350
        });
    }else{
        infoWindow.setContent(contentString);
    }
    //open the info window on the google map
    infoWindow.open(map, marker);
}

var coffeeShopMarkers = [];


/*
* @description: load coffee shop information
*               by foursquare api
* @param marker: the clicked marker object
* @return void
* */
function loadCoffeeShopInfo(marker){
    //clear old markers
    coffeeShopMarkers.forEach(function(coffeeBarMarker){
        coffeeBarMarker.setMap(null);
    });
    //grant permission of recycling the old-fashioned objects to js engine
    coffeeShopMarkers.length = 0;

    /*
    * neighborhood-map
     App Information
    * */
    var clientId = 'XBEVRWM1JGYOB2WS5LMPM35BJZFAANOTAPEEGNNHQ52BDOXV';
    var clientSecret = 'P1XBXTSAGOKAWMGYIMHOALG1NSBPOJYVZLUAD5RSQEGJ3MN5';

    /*
    * concatenate the request url string
    * */
    var baseUrl = "https://api.foursquare.com/v2/venues/explore?";
    var queryParams = "ll="+ marker.position.lat() +"%2C"+ marker.position.lng() +"&section=coffee&limit=10&novelty=new";
    var userInfo = '&client_id=' + clientId + '&client_secret=' + clientSecret + "&v=20170308";
    var url = baseUrl + queryParams + userInfo;

    //make ajax request to foursquare api
    $.ajax({
        url : url
    //do response success handling
    }).done(function(data, textStatus, jqXhr){
            var items = data.response.groups[0].items;
            console.log(items);
            for (var i in items){
                var venue = items[i].venue;
                // place the a marker on the map
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(venue.location.lat,venue.location.lng),
                    map: map,
                    title: venue.name,
                    icon: {
                        url: "./dist/images/coffee-n-tea.png"
                    }
                });
                coffeeShopMarkers.push(marker);
            };
    //do response error handling
    }).fail(function(jqXhr, textStatus, errorThrown){
        console.log( "textStatus:" + textStatus + ", errorThrown:" +errorThrown);
    //do ajax logging on the browser console
    }).always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) {
        console.log( "ajax request to foursquare is completed, textStatus:" + textStatus);
    });;
}

/*
* @description: zoom in and set center of the map
* @param marker the given marker
* @return void
* */
function zoomIn2Marker(marker){
    map.setCenter(marker.getPosition());
    map.setZoom(DETAIL_ZOOM_NUM);
}

function zoomOut2InitStatus(){
    map.setCenter(center.location);
    map.setZoom(INIT_ZOOM_NUM);
}



