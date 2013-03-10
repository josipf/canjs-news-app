'use strict'
window.bb = window.bb || {};

// Require.js module definition and dependencies
define (['jquery','canjs'], function(){	
	
	// Model class - handling REST API connection
	bb.Articles = can.Model({
		  findAll: 'GET js/json/news.json',
		  findOne: 'GET js/json/news{id}.json',
		  models : function(data){
            return can.Model.models.call(this,data.newsList.news);
          },
		},
		{}
	);		
});