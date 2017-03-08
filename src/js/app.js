/**
 * Created by sunrise2075 on 2017/2/26.
 */
// Here's my data model
var ViewModel = function(markers) {

    //暂存ViewModel对象
    //cache the object of ViewModel
    var self = this;

    //bind the text input field on index.html
    self.searchText = ko.observable("");

    //construct a knockout observable array for full markers list
    self.markers     =  ko.observableArray(markers);

    //used to record the lastly-clicked list item of  left unordered list
    self.currentMarker = ko.observable(null);

    //filter the items with the search text
    //Ref：http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
    self.markersFiltered = ko.computed(function() {
        var filter = this.searchText();
        if (!filter) {
            //set all the markers to be visible
            this.markers().forEach(function(marker){
                marker.setVisible(true);
            });
            return this.markers();
        } else {
            return ko.utils.arrayFilter(this.markers(), function(marker) {
                var title = marker.title;
                //see whether current marker should be retained on map
                var flag = (title.indexOf(filter) > -1);
                if(flag){
                    marker.setVisible(true);
                }else{
                    marker.setVisible(false);
                }
                return flag;
            });
        }
    }, self);

    self.dispose = function (){
        self.markersFiltered.dispose();
    };

    self.alertMarker = function(marker){
        // set value of the current map marker
        self.currentMarker(marker);
        // add animation on the marker
        // the marker should be dropped onto the corresponding location
        self.currentMarker().setAnimation(google.maps.Animation.DROP);
        // load coffee bar info from foursquare
        loadCoffeeShopInfo(marker);
        // zoom in and change the center of map
        zoomIn2Marker(marker);
    };

};

/*
* I need to initialise index.html
* after the google map is loaded，
* This makes Knockout get to work
* */
function initKoViewModel4App(markers){
    ko.applyBindings(new ViewModel(markers));
}
