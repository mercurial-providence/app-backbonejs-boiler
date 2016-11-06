siteTitle = 'Boiler Plate';

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'jcookie',
    'views/home',
    'views/404'
], function ($, _, Backbone, Handlebars, jcookie, HomePage, FoFPage) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            ':*':'home',
            'home' : 'home',
            'home/:a' : 'home',
            '*whatever' : '404'
            
        },
        home: function (a) {
            document.title = siteTitle + ' - Home';
            homePage = new HomePage({route: a});
            homePage.render();
        },
        404: function(){
            document.title = siteTitle + ' - 404';
            fofPage = new FoFPage;
            fofPage.render();
        }
        
    });

    var initialize = function () {
        var app_router = new AppRouter;
        Backbone.history.start();
        
    };
    return {
        initialize: initialize,
        AppRouter: AppRouter
    }
});