define([
<<<<<<< HEAD
    'backbone'        
], function(Backbone){
    
    'use strict';

    var AppModel = new Backbone.Model.extend({
=======
    'backbone'
], function (Backbone) {
    
    'use strict';

    var AppModel = Backbone.Model.extend({
>>>>>>> lesson8
        defaults: {
            'backgroundColor': '#999999',
            'celsius': true,
            'welcomeMessage': 'Welcome to Weather Watcher'
<<<<<<< HEAD
        } 
=======
        }
>>>>>>> lesson8
    });

    return AppModel;
});
