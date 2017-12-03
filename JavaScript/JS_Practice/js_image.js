/*This shows the following:
model view controller
Updating html using JS
using the init function to initialize 
Also using the init function to initialize event handlers
This also shows event handlers
*/
var model = {
	images: ["images/home.jpeg", "images/car.jpeg",  "images/module4A.jpg", "images/module4D.jpg",
	"images/piggy_bank.jpg", "images/module3_creditscore.jpg"],

	alreadyDisplayedImages: [],

	showImage: function(imageNum) {
		view.displayImage(imageNum);
		model.alreadyDisplayedImages.push(model.images[imageNum]);
		view.displayShownImages();
	},

	showMessage: function(value){
		if (value=="Error"){
			view.displayMessage("INVALID SELECTION");
		}else{
			view.displayMessage("I HOPE YOU LIKE THE IMAGE");
		}

	}
};

var view = {

	displayImage: function(imageNum){
		var theMainImage = document.getElementById("image1");
		theMainImage.src = model.images[imageNum];

	},

	displayMessage: function(value){
		var message = document.getElementById("message");
		message.innerHTML= value;

	},

	displayShownImages: function(){
		var text;
		var shownImages= document.getElementById("shownImages");
		console.log(model.alreadyDisplayedImages.length);
		for (i=0; i<model.alreadyDisplayedImages.length; ++i){
			 text = text + "\n" + model.alreadyDisplayedImages[i]  ;
		}
		shownImages.innerHTML = text;
		
	}

}

var controller = {

	processInput: function(valueEntered){
		if (valueEntered < 7){
			model.showImage(valueEntered);
			model.showMessage("Success");
		}else{
			model.showMessage("Error");
		}


	},
}

//event handlers
function handleSubmit(){
	var imageNumEntered = document.getElementById("numInput");
	controller.processInput(imageNumEntered.value);
}

function returnKeyPressed(e) {

	var numInput = document.getElementById("numInput");

	
	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;

	if (e.keyCode === 13) {
		submit.click();
		return false;
	}
}



window.onload = init;

function init(){
	//display initial picture
	var theMainImage = document.getElementById("image1");
	theMainImage.src = model.images[0];

	var submitButton = document.getElementById("submit");
	submitButton.onclick = handleSubmit;

	// handle "return" key press
	var numInput = document.getElementById("numInput");
	numInput.onkeypress = returnKeyPressed;
	
}
