/**
 * Created by sunrise2075 on 2017/2/26.
 */
var map;
function initMap(){

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 9,
        center: center.location
    });


    geoLocations.forEach(function(loc){
        var marker = new google.maps.Marker({
            position: loc.location,
            map: map,
            title: loc.title
        });
        marker.addListener('click', function() {
            map.setZoom(9);
            map.setCenter(marker.getPosition());
        });
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
}
