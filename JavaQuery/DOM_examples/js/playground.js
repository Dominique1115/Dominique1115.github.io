var header1, header2, div1, 1;
//Anytime you click on the first header change the header text using text content
header1=document.getElementById('header1');


//anytime you click on the second header change the header text using node value p214
header2=document.getElementById('header2');

//mouse over div1 and change the background color
div1=document.getElementById('div1');


//click on the button and change all p's with classname lorem to some other text
submitButton = document.getElementById('submitButton');


//get all elementswith the tag name h3 and update the contents when any of the h3 elements are moused over
submitButtonH3 = document.getElementById('submitButtonH3');


//Use query selector to select the first li element and update the text
firstLI=document.querySelector('li');

//use querySeclectorAll to update all li elements(must loop through)
liComplete = document.querySelectorAll('li.complete');
//get all elements the classname lorem and update the class to nonLorem

//traverse list using firstChild and nextSibling ???? I don't know what i am doing here
ulList = document.getElementById('shoppingList');


//Add an elemnent to the DOM
listButton = document.getElementById('listButton');


//Remove an element from the DOM
listButtonRemove = document.getElementById('listButtonRemove');


//Add an attribute to all <p>
allP  = document.querySelectorAll('p');



//EVENT LISTENERS USING ANONYMOUS FUNCTIONS
header1.addEventListener('click', function (e){
	if(!e){
		e = window.event;
	}
	target = e.target || e.srcELement;
	//console.log(target);
	var targetValue = target.innerHTML;
	header1.textContent = targetValue + "  adding this to the first header";
}, false);


header2.addEventListener('click', function(e){
	if (!e){
		e = window.event;
	}
	target = e.target || e.srcELement;
	target.firstChild.nodeValue = target.firstChild.nodeValue + " adding this additional text to header 2";	
}, false);


div1.addEventListener('mouseover', function (e){
	// if (!e){
	// 	e = window.event;
	// }
	//target = e.target || e.srcELement;
	if (div1.hasAttribute('class')){
		console.log("Yes this div has a class" + target.getAttribute('class')); //????
		target.setAttribute('class', 'nonLorem');
	}else{
		console.log("THIS DIV DOES NOT HAVE A CLASS");
	}
}, false);

submitButton.addEventListener('click', function (e){
	if(!e){
		e = window.event;
	}
	e = e.target || e.srcELement;

	var elems = document.getElementsByClassName('lorem');
	if (elems.length > 0){
		for (var i=0; i< elems.length; i++){
			console.log(elems[i]);
			elems[i].textContent="YOU ARE BEING MODIFIED";
		}
	}
}, false);


submitButtonH3.addEventListener('click', function (e){
	console.log("HERE");
	if (!e){
		e = window.event;
	}
	//loop through h3elems to add eventlisteners (is that right?)
	h3elems = document.getElementsByTagName('h3');
	console.log(h3elems);
	if (h3elems.length > 0){
		for (var i=0; i< h3elems.length; i++){
			console.log("I am here");
			h3elems[i].textContent='NEW H3 CONTENT: ' + i;
		}
	}
}, false);


firstLI.addEventListener('mouseover',function (e){
	if (!e){
		e = window.event;
	}
	target = e.target || e.srcELement;
	target.textContent  = ' Updating due to query Selector of getting the first li element';
}
,false);



if ( liComplete.length > 0){
	for(var i =0; i<liComplete.length; i++){
		liComplete[i].addEventListener('mouseover', function(e){
	if (!e){
		e = window.event;
	}
	target = e.target || e.srcELement;
	target.textContent = 'NEW VALUE SET';
}, false);
	}

}


listButton.addEventListener('click', function (e){
	console.log("HERE");
	if (!e){
		e = widnow.event;
	}
	newElem = document.createElement('li');
	newTextNode = document.createTextNode('Spain');
	newElem.appendChild(newTextNode);
	var position = document.getElementsByTagName('ul')[0]; //grabs first ul element
	console.log("position is: " + position);
	position.appendChild(newElem);
}
, false);



listButtonRemove.addEventListener('click',function(e){
	liItemsRemove = document.getElementsByTagName('li');
	liItemRem = liItemsRemove[liItemsRemove.length-1]; //remove last item in list
	var containerEl = liItemRem.parentNode; //this should be ul ???
	containerEl.removeChild(liItemRem); //how does it know which child ???
},false);





if (allP.length > 0){
	for (var i=0;i<allP.length;i++){
		allP[i].addEventListener('mouseover',function(e){
		if (allP.length > 0){
		
			for (var i=0;i<allP.length;i++){
			//console.log(allP[i]);
			allP[i].setAttribute('class', 'increaseSize');
			//allP[i].className = 'increaseSize';
		}
	}
}, false);
	}

}
