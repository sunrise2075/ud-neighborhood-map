/**
 * Created by sunrise2075 on 2017/2/26.
 */
/*
* @constructor
* @description : constructor function to build geo-location object for my Neighborhood App
* @param {string} title : title of the location
* @param {long} lat   : latitude of current location
* @param {long} lng   : longitude of current location
* @param {boolean} isCenter : whether it is the center of the map
* */
function Location(title, lat, lng,icon){
    this.title = title;
    this.location = {
        lat: lat,
        lng:lng
    };
    this.icon = icon;
}

Location.prototype.toString = function(){
    var result = "Location:[title]=" + this.title + ",[latitude]=" + this.lat
        + ",[longitude]=" + this.lng + ",[icon]=" + this.icon;
    return result;
}

var center = new Location("罗湖火车站", 22.5316097301, 114.1171699659, "./dist/images/train.png") ;

var geoLocations =[];
geoLocations.push(center);
geoLocations.push(new Location("盐田三村洛阳牛肉汤馆",22.5873974299,114.2492887069, "./dist/images/restaurants.png"));
geoLocations.push(new Location("布吉木棉湾新区", 22.6078382425, 114.1336685829, "./dist/images/community.png"));
geoLocations.push(new Location("深圳市中心书城-图书馆", 22.5465078091, 114.0571807461, "./dist/images/books-media.png"));
geoLocations.push(new Location("宝安F518时尚创意园", 22.5679972163, 113.8638327151, "./dist/images/education.png"));
geoLocations.push(new Location("布吉荣超花园", 22.5936225811, 114.1191613209,"./dist/images/community.png"));
geoLocations.push(new Location("龙岗区南联摩尔城", 22.7226220179, 114.2689040872,"./dist/images/community.png"));
geoLocations.push(new Location("盐田区大梅沙海滨浴场", 22.5927712953, 114.3071665727, "./dist/images/entertainment.png"));
geoLocations.push(new Location("深圳会展中心", 22.5307046884, 114.0608319529, "./dist/images/exhibitions.png"));
geoLocations.push(new Location("惠州大亚湾德丰天麓", 22.7386632649, 114.5218435154, "./dist/images/real-estate.png"));
geoLocations.push(new Location("南山科技园", 22.5375611168, 113.9489650818, "./dist/images/business.png"));
geoLocations.push(new Location("783国珍健康生活馆", 22.6069223601, 114.1280916434, "./dist/images/retail-stores.png"));
