require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.11.1.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    handlebars: 'libs/handlebars/handlebars-v1.3.0',
	  jcookie: 'libs/jquery.cookie',
    templates : '../templates/',
    router: 'router',
    app:'app'
  }

});

require([
  'app',
], function(App){
  App.initialize();
        
    
});