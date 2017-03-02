/**
 * Created by sunrise2075 on 2017/2/26.
 */
// Here's my data model
var ViewModel = function() {

    this.locations = ko.observableArray([]);
    this.currLoc = ko.observable({});

};

ko.applyBindings(new ViewModel()); // This makes Knockout get to work
