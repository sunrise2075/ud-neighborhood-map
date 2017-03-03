/**
 * Created by sunrise2075 on 2017/2/26.
 */
// Here's my data model
var ViewModel = function() {

    var self = this;
    //construct a knockout observable array for full locations list
    self.locations     =  ko.observableArray(rawLocations);

};

ko.applyBindings(new ViewModel()); // This makes Knockout get to work
