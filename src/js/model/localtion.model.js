/**
 * Created by sunrise2075 on 2017/2/26.
 */
/*
* @constructor
* @description : constructor function to build geo-location object for my Neighborhood App
* @param {string} title : title of the location
* @param {long} lat   : latitude of current location
* @param {long} lng   : longitude of current location
* */
function Location(title, lat, lng){
    this.title = title;
    this.location = {
        lat: lat,
        lng:lng
    }
}

Location.prototype.toString = function(){
    var result = "Location:[title]=" + this.title + ",[latitude]=" + this.lat + ",[longitude]=" + this.lng;
    return result;
}

var rawLocations =[];
rawLocations.push(new Location("盐田区盐田三村洛阳餐馆",22.5873974299,114.2492887069));
rawLocations.push(new Location("龙岗区布吉街道木棉湾新区",22.6078382425,114.1336685829));
rawLocations.push(new Location("福田区中心书城",22.5465078091,114.0571807461));
rawLocations.push(new Location("宝安区F518时尚创意园",22.5679972163,113.8638327151));
rawLocations.push(new Location("罗湖区罗湖火车站",22.5316097301,114.1171699659));
rawLocations.push(new Location("龙岗区荣超花园",22.5936225811,114.1191613209));
rawLocations.push(new Location("龙岗区南联摩尔城",22.7226220179,114.2689040872));
rawLocations.push(new Location("盐田区大梅沙",22.5927712953,114.3071665727));

var filterdLocs = null;
