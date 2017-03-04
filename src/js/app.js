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
    //construct a knockout observable array for full locations list
    self.locations     =  ko.observableArray(markers);
    //filter the items with the search text
    //Ref：http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
    self.locationsFiltered = ko.computed(function() {
        var filter = this.searchText();
        if (!filter) {
            //set all markers to be visible

            this.locations().forEach(function(marker){
                marker.setVisible(true);
            });
            return this.locations();
        } else {
            return ko.utils.arrayFilter(this.locations(), function(marker) {
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
        self.locationsFiltered.dispose();
    };

};

/*
* I need ot initialise index.html
* after the google map is loaded，
* This makes Knockout get to work
* */
function initKoViewModel4IndexPage(markers){
    ko.applyBindings(new ViewModel(markers));
}
