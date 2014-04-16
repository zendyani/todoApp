define([
   'jquery',
   'underscore',
   'backbone'
], function ($, _, Backbone) {
    'use strict';
    var AboutView = Backbone.View.extend({
        count: 0,
        
        initialize: function () {},
        
        render: function () {
            var html = '<h3>This About view</h3>';
            this.$el.html(html);
            return this;
        },

    });
    return AboutView;
});
