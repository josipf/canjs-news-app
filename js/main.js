'use strict'
window.bb = window.bb || {};

// Require.js AMD configuration 
require.config({
  paths: {
    jquery:		"https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min", // loading jQuery from Google's CDN
	canjs : 	"vendor/can.jquery.min", // usage of Javascript MVC framework Can.JS
  },
  shim: {
	'canjs':["jquery"], // defining dependencies
  }
});

// Require initial fetch
require([ 
	'jquery',
	'modules/model',
	'modules/controller'
]);