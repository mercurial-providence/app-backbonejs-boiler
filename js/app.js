define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'handlebars'
], function($, _, Backbone, Router, Handlebars){
  var initialize = function(){
      
     Router.initialize();           // Initialising Router

  }
  


  return {
    initialize: initialize
   
  };
});