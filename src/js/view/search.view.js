/**
 * Created by sunrise2075 on 2017/2/26.
 */
$(document).ready(function(){
    var options = {
        url: "dist/resources/countries.json",

        getValue: "name",

        list: {
            match: {
                enabled: true
            }
        }
    };

    $("#location-search").easyAutocomplete(options);
})