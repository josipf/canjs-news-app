'use strict'
window.bb = window.bb || {};

// Require.js module definition and dependencies
define (['jquery','canjs','modules/model'], function(){	
	
	// Controller class
	bb.NewsController = can.Control({
		'init': function(el,opts ) {
			var self = this,
				wrap = el;
					
			// Load newslist on init from view - EJS template
			bb.Articles.findAll({}, function( articles ){
				$(wrap).html(can.view('js/views/news.ejs', {
					articles : articles
				  }
				));	
				$("section").addClass("loaded");			
			},function (xhr) {
				console.log("Connection error:"+xhr)
			});
		 },
		 'li a click' : function(el,ev){		 	
		 	ev.preventDefault();
			var currid = $(el).data("id");
			
			if ($(el).is(".active")){
				$(el).removeClass("active").find("article").slideUp("fast",function(){$(this).remove();});
			}
			else {
				$(bb.wrap).find("li a").removeClass("active").find("article").remove();
				$(el).addClass("active");
				
				// Retreive only one article from REST API/JSON, findOne returns DEFFERED
				bb.Articles.findOne({id:currid}, function( article ){
					
					$(el).append("<article>"+article.text+"</article>").find("article").slideDown("fast"); // fetch and animate article
				},
				function (xhr) {
					console.log("Connection error:"+xhr)
				});
			}
		 },
	});
	
	bb.wrap = "#newslist";
	// Controller instantiation
	var news = new bb.NewsController(bb.wrap,{});
});