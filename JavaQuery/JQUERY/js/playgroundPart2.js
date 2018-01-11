//TRAVERSING THE DOM
/* commenting out to not affect the test the rest of the examples
$(function(){
	var $h2 = $('h2'); 
	$('ul').hide(); //hide the ul
	$h2.append('<a class="show">show</a>'); //append the class show INSIDE the h2


	$h2.on('click', function(){  
		$h2.next() //next sibling of h2 is ul
		.fadeIn(5000) //fade in the ul
		.children('.hot') //and to the children of ul with a class of hot (these are the li element)
		.addClass('complete');  //add this class to it
		$h2.find('a').fadeOut(); //fade the a element that is a child of h2 out
	})

});
*/
//FILTER ELEMENTS
$(function(){
	var $listItems = $('li');  //all li elements in a variable
	$listItems.filter('.hot:last').removeClass('hot');  //filter last item with class of hot remove the class of hot
	$('li:not(.hot)').addClass('cool'); //any class that is NOT hot give a class of cool
	$listItems.has('em').addClass('complete'); //any item in list that has em element and class of complete

	$listItems.each(function(){  //loop
		var $this = $(this);  // get the current list item
		if($this.is('.hot')){  // if the list item has a class of hot
			$this.prepend('Priority item: ');  //prepend text to the item
		}
	});

	$('li:contains("honey")').append(' (local)');  //if it contains local append local

});





//Using index numbers
$(function(){
	$('li:lt(2)').removeClass('hot'); //remove class if the li index is less than 2
	$('li:eq(0)').addClass('complete'); //add class if the li index equals 0
	$('li:gt(2)').addClass('cool');  //greater than 2

});




//FORMS
/* commenting out to not affect the test the rest of the examples
var $newItemForm = $('#newItemForm');
var $newItemButton = $('#newItemButton');
var $itemDescription = $('#itemDescription');
var $addButton = $('#addButton');

//hide the form
$newItemForm.hide();
//when clicked show form. hide button
$newItemButton.on('click',function(){
	$newItemForm.show()
	$newItemButton.hide();
})

$addButton.on('click', function(){
	var newText = $itemDescription.val();
	$('li:last').after('<li>' + newText + '</li>');
	$itemDescription.val('');
});
*/


//Cut Copy and paste

$(function(){
	var $p = $('p');
	var $clonedQuote = $p.clone(); //create a copy of this element with all of its descdendants (any id attribute should be updated or or it wont be unique)
	$p.remove(); //deletes elementand its descendants
	$clonedQuote.insertAfter('h2');

	var $moveItem = $('#one').detach(); //first item is dtetached from the DOM 
	$moveItem.appendTo('ul');//item appended to end of list		
});


//Box Dimensions
$(function(){
	var listHeight = $('#page').height();
	$('ul').append('<p>Height: ' + listHeight + 'px</p>');
	$('li').width('50%');
	$('li#one').width(125);
	$('li#one').width('75%');
})

//POSITION - THIS WON"T WORK BECAUSE SUPPORTING HTML IS NOT PRESENT. BUT WANT TO HAVE A CODE SNIPPET FOR COMPLETENESS
$(function() {
  var $window = $(window);  //cache the window
  var $slideAd = $('#slideAd'); 
  var endZone = $('#footer').offset().top - $window.height() - 500;  //offset is the coordinates of the element relative to top left corner of document.  
  //(document is the entire html page) whereas window is the size of the screen

  $window.on('scroll', function() { //scroll event

    if (endZone < $window.scrollTop()) { //
      $slideAd.animate({ 'right': '0px' }, 250);
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }

  });

});

