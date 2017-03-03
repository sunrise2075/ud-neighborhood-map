/**
 * Created by sunrise2075 on 2017/2/26.
 */
// Here's my data model
var ViewModel = function() {

    var self = this;
    //construct a knockout observable array for full locations list
    self.fullLocList      =  ko.observableArray(rawLocations);
    //construct a knockout observable array for filtered locations list
    self.remainingLocList = ko.observableArray(filterdLocs);

};

ko.applyBindings(new ViewModel()); // This makes Knockout get to work
