"use strict";
var full_height_section = jQuery('.full_height'),	
	slider_one_item     = jQuery('.sliderOneItem'),
	body                = jQuery('body'),
	project_slider      = jQuery('.project_slider'),
	append_dots         = jQuery('.append_dots'),
	projects_grid       = jQuery('.grid'),
	project_selector    = '.project',
	tabs_content        = '.tabs_content',
	portfolio_filtres   = jQuery('.filtres li'),
	form_message        = jQuery('form .show_form_messages'),
	switch_words        = jQuery('#switch_words'),
	trigger_mobile_menu = jQuery('.trigger_mobile_menu'),
	tabs_action         = jQuery('.services-section .tabs_actions li'),
	header_links        = jQuery('.home .custom_menu li a'),
	go_bottom_link      = jQuery('.go_bottom a');
	

function initialize(){
 var myLatlng = new google.maps.LatLng(36.08452 ,-115.1498443);
 var myOptions = {
     zoom: 15,
     draggable: false,
     scrollwheel: false,
     center: myLatlng,
     mapTypeId: google.maps.MapTypeId.ROADMAP
     }
  var map = new google.maps.Map(document.getElementById("google_map"), myOptions);
  var marker = new google.maps.Marker({
      position: myLatlng, 
      map: map,
  title:"Fast marker"
 });
} 
var fullHeight = function(){
	var height = jQuery(window).height();
	jQuery(full_height_section).css('height', height);
}
var sliderOneItem = function(){
	jQuery(slider_one_item).slick({
		slidesToShow:1,
		slidesToScroll:1,
		dots:true,
		arrows:false,
		pauseOnHover:true
	});
}
var onScrollHeader = function(){
	if(jQuery(window).scrollTop() >= 100){
		jQuery(body).addClass('scrolled');
	}else{
		jQuery(body).removeClass('scrolled');
	}
}
var triggerTabs = function(_this){
	var get_class = jQuery(_this).attr('rel');
	jQuery(tabs_content+' .tab').removeClass('fadeIn');
	jQuery(tabs_content+' .'+get_class).addClass('fadeIn');
	jQuery(_this).addClass('active').siblings().removeClass('active');
}
var projectsSlider = function(){
	jQuery(project_slider).each(function(){
		var dots = jQuery(this).parent().find(append_dots);
		jQuery(this).slick({
			slidesToShow:1,
			slidesToScroll:1,
			appendDots: dots,
			arrows:false,
			dots:true
		});
	});
}
jQuery(function(){
	fullHeight();
	sliderOneItem();
	onScrollHeader();
	projectsSlider();
	if(jQuery(projects_grid).length){
		var $grid = jQuery(projects_grid).isotope({
	  		itemSelector: project_selector,
	  		layoutMode: 'fitRows',
		});
	}
	jQuery(portfolio_filtres).on('click', function(){
		jQuery(portfolio_filtres).removeClass('active');
		jQuery(this).addClass('active');
		var filterValue = $( this ).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	jQuery(body).on('submit', '#send_message', function(e){
  		e.preventDefault();
  		var link = jQuery(this).attr('action');
  		var formData = jQuery(this).serialize();
  		jQuery.ajax({
  			url: link,
  			method:"POST",
  			data: formData,
  			success:function(result){
  				var clear_result = result.replace('"', '');
  				jQuery(form_message).empty();
  				jQuery(form_message).html(clear_result);
  			},
  			error:function(error){
  				console.log(error);
  			}
  		});
  	});
  	if(jQuery(switch_words).length){
	  	jQuery(switch_words).Morphext({
		    animation: "fadeIn",
		    separator: ",",
		    speed: 4000,
		    complete: function () {
		    }
		});
	}
	
  	jQuery(trigger_mobile_menu).on('click', function(){
  		jQuery(body).toggleClass('show_menu');
  	});
  	jQuery(go_bottom_link).on('click', function(e){
  		e.preventDefault();
  		var get_class = jQuery(this).attr('href');
  		var offset = jQuery(get_class).offset().top;
  		jQuery('html,body').animate({
  			scrollTop: offset
  		},800);
  	});
  	jQuery(header_links).on('click', function(e){
  		var get_section = jQuery(this).attr('href');
  		var offset = jQuery(get_section).offset().top;
  		jQuery('body').removeClass('show_menu');
  		jQuery('html,body').animate({
			scrollTop:offset
  		},800);
  	});
});
jQuery(tabs_action).on('click', function(){
	triggerTabs(jQuery(this));
});
jQuery(window).on('resize', function(){
	fullHeight();
});
jQuery(window).on('scroll', function(){
	onScrollHeader();
});
