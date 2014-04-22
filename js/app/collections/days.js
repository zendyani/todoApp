define([
    'backbone',
    'app/models/day'
], function (Backbone, DayModel) {
    
    'use strict';

    var DaysCollection = Backbone.Collection.extend({
        
        model: DayModel,
        // demo not working if i comment this line, seems url can't be accessible outside
        url: 'http://api.wunderground.com/api/54d6d59c71c0d597/forecast/q/IT/Magenta.json',

        sync: function(method, model, options){
            options.timeout = 8000;
            options.dataType = "jsonp";
            return Backbone.sync(method, model, options);
        },
        parse: function(response) {
            return response.forecast.simpleforecast.forecastday;
        }
    });

    return DaysCollection;

});
