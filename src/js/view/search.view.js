/**
 * Created by sunrise2075 on 2017/2/26.
 */
$(document).ready(function(){
    var options = {
        /*
            I have updated the easyAutocomplete
            jquery plugin so that it will take rawLocations
            as its data source
            I doesn't matter if I set url to an empty option
         */
        url: "",
        getValue: "title",
        list: {
            match: {
                enabled: true
            }
        }
    };
    $("#location-search").easyAutocomplete(options);
})