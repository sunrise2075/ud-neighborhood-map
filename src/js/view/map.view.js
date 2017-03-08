/**
 * Created by sunrise2075 on 2017/2/26.
 */
var map;
//cache infoWindow object as global variable
var infoWindow = null;

//google map API callback function
function initMap(){
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 11,
        center: center.location
    });

    var styles = [
        {
            stylers: [
                { hue: "#00ffe6" },
                { saturation: -20 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];
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
    loadCoffeeShopInfo();
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

var fourSquareMarkers = [];


/*
* load coffee shop information
* by foursquare api
*
* */
function loadCoffeeShopInfo(){
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
    var queryParams = "ll=22.6078382425%2C114.1336685829&section=coffee&limit=10&novelty=new";
    var userInfo = '&client_id=' + clientId + '&client_secret=' + clientSecret + "&v=20170308";
    var url = baseUrl + queryParams + userInfo;

    $.get(url, function (result) {
        var items = result.response.groups[0].items;
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

            fourSquareMarkers.push(marker);
        }});

}



