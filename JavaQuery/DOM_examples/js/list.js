/*Getting Nodes and Node Lists examples*/

//select the element and store it in a variable
var el = document.getElementById('one');

//change the value of the class attribute.
el.className ='cool';

var elements = document.getElementsByClassName('hot');
if (elements.length > 1){
	var firstItem=elements.item(0);
	//or
	var firtItem2 = elements[0];
}

var elements = document.getElementsByTagName('li');
if (elements.length > 1){
	var el=elements[1];
	el.className='cool';
}

var el = document.querySelector('li.hot');
el.className='cool';

var els = document.querySelectorAll('li.hot');
els[0].className='average';



/*UPDATING TEXT NODE*/
var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;

elText=elText.replace('Pine nuts', 'kale');

itemTwo.firstChild.nodeValue=elText;

/*Accessing TEXT ONLY*/
var firstItem=document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg+= '<p>innerText: ' + showInnerText  + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML=msg;
firstItem.textContent='sourdough bread';

/*ADD ELEMENT TO DOM */
var newEl = document.createElement('li');
var newText = document.createTextNode('quinoa');
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);


/*REMOVING ELEMENTS FROM DOM*/
var removeEl = document.getElementsByTagName('li')[3];//element to remove
var containerEl = removeEl.parentNode; //get the parent or its containing element
containerEl.removeChild(removeEl); //rmeove

/*Get ATTRIBUTES*/
var firstItem  = document.getElementById('one');
if(firstItem.hasAttribute('class')){
	var attr = firstItem.getAttribute('class');

	var el = document.getElementById('scriptResults');
	el.innerHTML='<p> The first item has a class name: ' + attr + '</p>';
}	

/*Creating Attributes*/

var firstItem = document.getElementById('one');
firstItem.className='complete';
var fourthItem = document.getElementsByTagName('li').item(3);
fourthItem.setAttribute('class', 'cool');

/*REMOVING ATTRIBUTES*/
var firstItem = document.getElementById('one');
if( firstItem.hasAttribute('class')){
	firstItem.removeAttribute('class');
}