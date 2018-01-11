$(document).ready(function(){
	$(':header').addClass('headline');  //add the class "headline" to all headers( h1, h2, h3 etc...)

	$('li:lt(3)').hide().fadeIn(1500); //take first 3 list items and hides then fades in lt represents less than index number less that the parameter

	$('li').on('click', function(){  //Sets an event listener on each of the li elements. Calls anonymous function
		$(this).remove();
	})

	var content = $('li').html(); //this will only get the "html" contents of the FIRST li element
	var contentText = $('li').text() //this will return only the texts but of ALL the li elements
	console.log('CONTENT and CONTENT TEXT' + content + "\n " + contentText);

	$('li').html('Updated'); //this will update all li elements

	$('li:gt(2)').html('More updates'); //this will update any  li item greater than index 2

	$('img').hide().delay(500).fadeIn(1400); //chaining.  if one method doesn't work, the rest won't run

	$('li:eq(0)').replaceWith('<li>Almonds</li>');

	$('li:eq(1)').remove();



})

$(function(){ //Not sure how this function kicks off but it does
	$('li:contains("Updated")').text('Blueberries');

	$('li.hot').html(function() {
		return '<em>' + $(this).text() + '</em>';
	});

	//$('li#three').remove();

});

//Inserting Elements
//before(), prepend(), after(), append()

$(function(){
	$('ul').before('<p class="notice"> Just Updated</p>');  //Insert this paragraph before the ul 

	$('li.hot').prepend('+ ');  //INSIDE selected element
	$('li.hot').append('* ');  //INSIDE selected element
	var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
	$('li:last').after($newListItem);
	$newListItem = $('<li><em>soy</em> burgers</li>');
	$('li:last').after($newListItem);
	$newListItem = $('<li><em>vegan</em> burgers</li>');
	$('li:last').after($newListItem);
});


//Getting and setting Attribute values
$(function(){
	$('li#three').removeClass('hot');
 	$('li.hot').addClass('favorite'); //add class attribute of favorite to all li elements that have a class of hot
	$('ul').attr('id','group'); //add id attribute and give it a value of "group"
});

//Getting and setting CSS properties
$(function(){
	var backgroundColor = $('li').css('background-color'); //get the background color of the first li	
	$('ul').append('<p> Color was: ' + backgroundColor + '</p>');
	$('li').css({  //this example set multiple properties using object literal notation
		'background-color': '#c5a996',
		'border': '1px solid #fff',
		'color': '#000',
		'font-family': 'Georgia',
		'padding-left': '+=75'
	});
});

//Using each() to perform one or more statements on each of the items $
$(function (){
	$('li').each(function(){
		var ids = this.id; //current element in the node
		$(this).append('<span class="order">' + ids + '</span>'); //$(this) creates a jquery object allowing you to use JQuery methods oon that element
	})
});

//using .on() to create an event listener
$(function(){
	var $listItems = $('li'); //getallthe list items
	$listItems.on('mouseover',function(){
		selectedItem = this.id;  //didn't use this, but wanted to have it
		$(this).addClass('increaseFont');
		})

	$listItems.on('mouseout',function(){
		$(this).removeClass('increaseFont');
	})
});

//using event object
$(function(){
	$('li').on('click',function(e){
		var date = new Date();
		date.setTime(e.timeStamp);
		$(this).text($(this).text() + ' ' + date.toDateString());
	})
});

//using on() with additional parameters
//the syntax for on events ... please note the [] are optional parameters
//The example below uses these extra optional parameters
//.on(events[, selector][, data], function(e))

$(function(){
	var listItem, itemStatus, evventType;

	$('ul').on('click mouseover',  //can have 2 events this is saying click or mouseover
		':not(#four)', //selector not id of foud
		{status:'important'}, //this is extra data
		function(e){
			listItem = 'Item: ' + e.target.textContent + '<br />';
			itemStatus = 'Status: ' + e.data.status + '<br />'; //this is that extra data parameter
			eventType = 'Event: ' + e.type;
			$('#notes').html(listItem + itemStatus + eventType);
		}
	);
});


//EFFECTS
$(function(){
	$('h2').hide().slideDown(); //pick up the h2 element, and hide it so it can slide in. Methods are chained

	var $li = $('li'); //get the li elements into a variable
	$li.hide().each(function(index){  //hide the li elements and for each one run this function.  I don't know where index came from ????
		console.log('INDEX' + index.target);
		$(this).delay(700*index).fadeIn(700);		//delay this list item .  If i don't * by index, all list items would appear at the same time ???
	})
});

//ANIMATION
/*.animate({
	//styles to change
	}[, speed][, easing][, complete]);
*/
$(function(){
	$('li').on('click', function(){
		$(this).animate({
			opacity: 0.0,
			paddingLeft: '+=80'
		}, 500, function(){
			$(this).remove();
		});
	});
	
});



