function getTarget(e){
	if(!e){  //if no event object passed in.  IE 8 and lower needs this
		e = window.event;
	}
	return e.target || e.srcElement;  //get the element that is being actioned on.  
	//srcElement is for IE 8 and lower	
}

function itemDone(e){
	//Remove item from the list
	var target, elParent, elGrandparent;
	target = getTarget(e);//item clicked
	console.log('target is: ' + target); //The item clicked on 
	elParent = target.parentNode; //This is the LI
	console.log('parent  is: ' + elParent);
	elGrandparent = target.parentNode.parentNode; //THIS IS the UL
	console.log('grandparent is: ' + elGrandparent);
	elGrandparent.removeChild(elParent); 


	//Prevent the link from taking you elsewhere
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}

}

//Setup event listeners to call itemDone() on click
var el = document.getElementById('shoppingList');
if(el.addEventListener){//check if supported since IE 8 doesn't support
	el.addEventListener('click', function(e){
		itemDone(e);
	}, false);
}else{//for IE 8
	el.attachEvent('onclick', function(e){
		itemDone(e);
	});
}