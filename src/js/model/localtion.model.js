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

var center = new Location("罗湖火车站", 22.5379600000, 114.1236110000, "./dist/images/train.png") ;

var geoLocations = [];
geoLocations.push(center);
geoLocations.push(new Location("老爸的小餐馆", 22.5934970000, 114.2557580000, "./dist/images/restaurants.png"));
geoLocations.push(new Location("我的住址", 22.6139280000, 114.1402850000, "./dist/images/community.png"));
geoLocations.push(new Location("深圳市图书馆", 22.5522060000, 114.0641500000, "./dist/images/books-media.png"));
geoLocations.push(new Location("宝安F518时尚创意园", 22.5734290000, 113.8695770000, "./dist/images/education.png"));
geoLocations.push(new Location("小姨家", 22.6007740000, 114.1241280000,"./dist/images/community.png"));
geoLocations.push(new Location("表姑家", 22.7285100000, 114.2748370000,"./dist/images/community.png"));
geoLocations.push(new Location("盐田区大梅沙海滨浴场", 22.5984520000, 114.3137660000, "./dist/images/entertainment.png"));
geoLocations.push(new Location("深圳会展中心", 22.5363840000, 114.0673930000, "./dist/images/exhibitions.png"));
geoLocations.push(new Location("老爸买在惠州的新房子", 22.7439550000, 114.5274190000, "./dist/images/real-estate.png"));
geoLocations.push(new Location("南山科技园", 22.5621010000, 113.9531950000, "./dist/images/business.png"));
geoLocations.push(new Location("783国珍健康生活馆", 22.6131440000, 114.1346710000, "./dist/images/retail-stores.png"));

//定义弹出窗口内容的字符串