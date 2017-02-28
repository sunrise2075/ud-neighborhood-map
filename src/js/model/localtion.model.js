/**
 * Created by sunrise2075 on 2017/2/26.
 */
/*
* @constructor
* @description : constructor function to build geo-location object for my Neighborhood App
* @param title : title of the location
* @param lat   : latitude of current location
* @param lng   : longitude of current location
* */
function Location(title, lat, lng){
    this.title = title;
    this.lat = lat;
    this.lng = lng;
}

Location.prototype.toString = function(){
    var result = "Location:[title]=" + this.title + ",[latitude]=" + this.lat + ",[longitude]=" + this.lng;
    return result;
}
