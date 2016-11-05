define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'jcookie',
  '../app',
  'text!templates/home.php'
], function ($, _, Backbone, Handlebars, jcookie, app, homeHTML) {
    var HomePage = Backbone.View.extend({
        initialize: function (options) {
            _.bindAll(this, 'beforeRender', 'render', 'afterRender');
            var _this = this;
            this.render = _.wrap(this.render, function (render) {
                _this.beforeRender();
                render();
                _this.afterRender();
                return _this;
            });
        },

        beforeRender: function () {
            console.log('beforeRender');
        },

        el: $('#indexcontent'),
        
        template: _.template(homeHTML, {}),
        
        render: function (a) {
            (a == null) ? Backbone.history.navigate('home'): Backbone.history.navigate('home/' + a);
            console.log('Passed parameter is ' + a);
            this.$el.html(this.template);

        },

        afterRender: function () {
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
            console.log('afterRender');
        }
    });
    return HomePage;
});