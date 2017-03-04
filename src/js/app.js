/**
 * Created by sunrise2075 on 2017/2/26.
 */
// Here's my data model
var ViewModel = function() {

    //暂存ViewModel对象
    //cache the object of ViewModel
    var self = this;
    //bind the text input field on index.html
    self.searchText = ko.observable("");
    //construct a knockout observable array for full locations list
    self.locations     =  ko.observableArray(geoLocations);

    //filter the items with the search text
    //Ref：http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
    self.locationsFiltered = ko.computed(function() {
        var filter = this.searchText();
        if (!filter) {
            return this.locations();
        } else {
            return ko.utils.arrayFilter(this.locations(), function(item) {
                var title = item.title;
                var flag = (title.indexOf(filter)>-1);
                return flag;
            });
        }
    }, self);
};

ko.applyBindings(new ViewModel()); // This makes Knockout get to work
