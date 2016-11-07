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
        //This is one important function since it is controlling `beforeRender`, `render` and `afterRender`
        initialize: function (options) {
            this.options = options;
            _.bindAll(this, 'beforeRender', 'render', 'afterRender');
            var _this = this;
            this.render = _.wrap(this.render, function (render) {
                _this.beforeRender();
                render(_this.options['route']);
                _this.afterRender();
                return _this;
            });
        },

        beforeRender: function () {
            console.log('beforeRender');
        },

        el: $('#indexcontent'),
        
        template: _.template(homeHTML, { }),
        
        render: function (a) {
            (a == null) ? Backbone.history.navigate('home'): Backbone.history.navigate('home/' + a);
            console.log('Passed parameter is ' + a);
            this.$el.html(this.template);

        },

        afterRender: function () {
            //Our Neat little code to highlight any code we have used in out site.
            highlightCode();
            //  Its important to pass the `el` here because otherwise it wont recognize the element 
            //   content-box` in its own View i.e. LoadQuery.
            var loadQuery = new LoadQuery({ el : $('#content-box-output')});
            console.log('afterRender');
        }
    });
    
    var LoadQuery = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
            //Call your ajax function here if you want to load data
            //at the time of your view is rendering.
            //OR
            //We can use template variables `<%= contentBoxData %>` in our `text/template` container
            //`content-box` and fill it by calling
            //`var template = _.template($('#content-box').html(), {contentBoxData: "My Data" });`
            //`My Data` can be replaced by any data that was acquired by server or elsewhere.
            var template = _.template($('#content-box').html(), { });
            //Note that `content-box` is a `text/template` which is not rendenred in HTML
            //and our `el` i.e. `content-box-output` is rendered in HTML so we are transfering 
            //the content of `content-box` element to `content-box-output`.
            this.$el.html(template);
        },
        events: {
            //Listening for any events, usually click and binding a function with it.
            'click input[id=query_button]' : 'fireQuery'
        },
        fireQuery: function(event){
            //Link clicked, you can access the element that was clicked with event.currentTarget
            //Call your ajax function here if you want to load data
            //after your view is rendered and you want some action
            //on user events.
            //encodeURI() or encodeURIComponent()
            var dataString = 'query='+encodeURIComponent($('#query_input').val()); {
                $.ajax({
                    type: "POST",
                    url: "includes/server_raw.php",
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        console.log('Server Responded');
                        $('#content-box-data').prepend(html);
                        highlightCode();
                    },
                    error: function (e) {
                        console.log('Server Error');
                    }
                });
                return false;
            }
        }
        
    });
    
    
    return HomePage;
});