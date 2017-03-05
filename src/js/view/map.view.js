/**
 * Created by sunrise2075 on 2017/2/26.
 */
var map;
function initMap(){

    map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 9,
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
            title: loc.title
        });
        marker.addListener('click', function() {
            // map.setZoom(9);
            // map.setCenter(marker.getPosition());
            //toggle marker animation
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
                map.setZoom(9);
            } else {
                map.setZoom(15);
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        });
        markers.push(marker);
    });

    //invoke function to apply knockout bindings
    initKoViewModel4IndexPage(markers);
}
