define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'jcookie',
  '../app',
  'text!templates/404.php'
], function ($, _, Backbone, Handlebars, jcookie, app, fofHTML) {
    var FoFPage = Backbone.View.extend({
        el: $('#indexcontent'),
        render: function () {
            Backbone.history.navigate('404');
            var data = {};
            var compiledTemplate = _.template(fofHTML, data);
            this.$el.html(compiledTemplate);
        }
    });
    return FoFPage;
});