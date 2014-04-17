define([
    'app/views/app',
    'app/routers/router',
<<<<<<< HEAD
    'app/models/app'
], function (AppView, Router, AppModel){
=======
    'app/models/app',
    'app/collections/days'
], function (AppView, Router, AppModel, DaysCollection) {
>>>>>>> lesson8
    'use strict';

    var initialize = function () {
        var appModel = new AppModel();
<<<<<<< HEAD
        var appView = new AppView({model: appModel});

=======

        var appView = new AppView({model: appModel});
>>>>>>> lesson8
        $('body').append(appView.render().el);

        var router = new Router(appView);
        Backbone.history.start();

        var daysCollection = new DaysCollection([], {
 //           url: 'http://api.wunderground.com/api/54d6d59c71c0d597/forecast/q/IT/Magenta.json'
        });

        daysCollection.fetch({
            success: function (collection, response, options) {
                console.log(collection, response);
            },
            error: function (collection, response, options) {
                console.log('error');
            }
        });

        window.debug = {
            settings: appModel,
            days: daysCollection
        }
    };

    return {
        initialize: initialize
    }
});
