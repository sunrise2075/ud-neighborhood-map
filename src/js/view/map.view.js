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
            content: contentString
        });
    }else{
        infoWindow.setContent(contentString);
    }
    //open the info window on the google map
    infoWindow.open(map, marker);
}