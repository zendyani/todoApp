require.config({
    paths: {
        'jquery': 'libs/jquery-1.10.1.min',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'bootstrap': 'libs/bootstrap',
    },
    
    shim: { 
        'underscore':{
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: [
                'jquery'
            ]
        }
    }
});

require([
    'backbone',
    'app/app',
    'bootstrap'
<<<<<<< HEAD
], function(Backbone, App, bootstrap){
=======
], function(Backbone, App){
>>>>>>> lesson8
    'use strict';
    
    App.initialize();
});
