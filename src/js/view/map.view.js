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

//current city gor BaiDu map
var currentCity = "深圳";

//cache google map object as global variable
var map = null;

var localSearch4Map = null;

var markers = [];

// cache my google map api key
var MY_API_KEY = "HW1hgQNz18TYRRn7BjN6BOMALz6h5G1C";

//cache infoWindow object as global variable
var infoWindow = null;

var INIT_ZOOM_NUM = 11;
var DETAIL_ZOOM_NUM = 14;

//google map API callback function
function initMap(){

    map = new BMap.Map("map-canvas"); // 创建地图实例
    //增加地图搜索功能
    localSearch4Map = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
    });
    // 维地图增加控制组件
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity(currentCity); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
    map.enableScrollWheelZoom();//启动鼠标滚轮缩放地图
    map.enableKeyboard();//启动键盘操作地图

    // 使用地点的经度和纬度,创建点坐标
    var point = new BMap.Point(center.location.lng, center.location.lat);
    map.centerAndZoom(point, INIT_ZOOM_NUM);
    window.setTimeout(function(){
        map.panTo(point);
    }, 2000);

    //在地图上追加图标
    // var marker = new BMap.Marker(point);
    // map.addOverlay(marker);

    var index = 0;
    geoLocations.forEach(function(loc){
        // 向地图添加标注
        var point = new BMap.Point(loc.location.lng,
            loc.location.lat);
        // 创建标注对象并添加到地图
        var myIcon = new BMap.Icon(loc.icon, new BMap.Size(40, 50));
        var marker = new BMap.Marker(point, {
            title: loc.title,
            icon: myIcon
        });
        marker.enableDragging();
        marker.addEventListener("click", function(e){
            openInfoWindow(marker);
        })
        marker.setAnimation(BMAP_ANIMATION_DROP);//跳动的动画
        markers.push(marker);
        index++;
    });


}

initMap();

/*
* @description: open info window for
*              the given google map marker
* @param  marker the object of marker
* @param title
* @param content
* @return void
* */
function openInfoWindow(marker, title, content){
    //create an info window object
    //or set content on the existing info window
    //we needn't create info window object repeatedly
    var opts = {
        width : 250,     // 信息窗口宽度
        height: 100,     // 信息窗口高度
        title : marker.z.title  // 信息窗口标题
    }
    infoWindow = new BMap.InfoWindow("World", opts);  // 创建信息窗口对象

    map.openInfoWindow(infoWindow, marker.z.point);      // 打开信息窗口


}


/*
 * @description: query detailed information
 * for the given marker and set content for
 * current info window
 * @param  marker the object of marker
 * @return void
* */
function showLocationDetail(marker){

    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        marker.position.lat() +
        "," +
        marker.position.lng() +
        "&key=" +
        MY_API_KEY;

    //make ajax request to foursquare api
    $.ajax({
        url : url
        //do response success handling
    }).done(function(data, textStatus, jqXhr){
       console.log(data);
       var detailString = "";
       if(data.status === "OK"){
            var place_id = data.results[0].place_id;
           detailString += "<div>地址ID:" + place_id + "</div>";

           var formatted_address = data.results[0].formatted_address;
           detailString += "<div>详情:" + formatted_address + "</div>";

           var geometry = data.results[0].geometry;
           detailString += "<div>类型:" + geometry.location_type + "</div>";
           detailString += "<div>纬度:" + geometry.location.lat + "</div>";
           detailString += "<div>经度:" + geometry.location.lng + "</div>";
           infoWindow.setContent(detailString);
       }
        //do response error handling
    }).fail(function(jqXhr, textStatus, errorThrown){
        console.log( "textStatus:" + textStatus + ", errorThrown:" +errorThrown);
        //do ajax logging on the browser console
    }).always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) {
        console.log( "ajax request to foursquare is completed, textStatus:" + textStatus);
    });
}


//add global array for coffee shop markers
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
        items.forEach(function(item){
                var venue = item.venue;
                // place the a marker on the map
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(venue.location.lat,venue.location.lng),
                    map: map,
                    title: venue.name,
                    icon: {//
                        url: "./dist/images/coffee-n-tea.png"
                    }
                });
                marker.addListener('click', function() {
                    //have the  marker bounce for a limited times
                    marker.setAnimation(4);
                    openInfoWindow(marker);
                });
                coffeeShopMarkers.push(marker);
            }
        );
    //do response error handling
    }).fail(function(jqXhr, textStatus, errorThrown){
        console.log( "textStatus:" + textStatus + ", errorThrown:" +errorThrown);
    //do ajax logging on the browser console
    }).always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) {
        console.log( "ajax request to foursquare is completed, textStatus:" + textStatus);
    });
}

/*
* @description: zoom in and set center of the map
* @param marker the given marker
* @return void
* */
function zoomIn2Marker(marker){
    map.centerAndZoom(marker.z.point, DETAIL_ZOOM_NUM);
}

/*
 * @description: zoom out to the initial state of google map
 * @param none
 * @return void
 * */
function zoomOut2InitStatus(){
    map.setCenter(center.location);
    map.setZoom(INIT_ZOOM_NUM);
}


function searchPlaces(marker, keyWords){

}




