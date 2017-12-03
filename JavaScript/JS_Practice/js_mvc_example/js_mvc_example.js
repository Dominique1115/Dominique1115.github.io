var model = {
	//properties
	images: ["images/home.jpeg", "images/car.jpeg",  "images/module4A.jpg", "images/module4D.jpg",
	"images/piggy_bank.jpg", "images/module3_creditscore.jpg"],

	alreadyDisplayedImages: [],
	//functions

	sendImage: function(imageNum){
		view.displayImage(imageNum);
		var imageName = this.images[imageNum].split("/")[1];
		this.alreadyDisplayedImages.push(imageName);
		view.displayImagesDisplayed();
		

	}

	


}

var view = {
	showError: function(){

	},

	displayImage: function(imageNum){
		var image=document.getElementById("image");
		image.src = model.images[imageNum];

		var imageName = document.getElementById("imageName");
		imageName.innerHTML = model.images[imageNum].split("/")[1];

	},


	displayImagesDisplayed: function(){
		var alreadyDisplayed = document.getElementById("alreadyDisplayed");
		var text=" ";

		for (i=0; i< model.alreadyDisplayedImages.length; ++i){
			text  = text + model.alreadyDisplayedImages[i] +"<br>" ;
			//console.log("text:" + text)
		}
		alreadyDisplayed.innerHTML=text;


	},

}

var controller = {
	processInput: function(valueEntered){
		if ( valueEntered < 6){
			model.sendImage(valueEntered);
		}
		else{
			view.showError();
		}
	}

}

//event handlers
function handleSubmit(){
	var numEntered = document.getElementById("numEntered");
	controller.processInput(numEntered.value)
}

function returnKeyPressed(e){
	var numKeyEntered=document.getElementById("numEntered");
	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;
	if(e.keyCode == 13) { //13 represents the enter key
		submitButton.click(); //this is a click on the submit button(id of the html), so the function handle submit should get it
		return false; //not sure why i need this
	}
}


//after the window is loaded run the init function
window.onload = init;


//run this to initialzie the app
function init(){
	//set default image
	var defaultImage = document.getElementById("image");
	defaultImage.src=model.images[0];


	//set default image name
	var imageName = document.getElementById("imageName");
	imageName.innerHTML = model.images[0].split("/")[1];



	//initial event handler for the form
	var submitForm = document.getElementById("submitButton");
	submitForm.onclick = handleSubmit; //pass this to the event handler.  The event handler will pass to controller


	//initialize key press event
	var numKeyEntered = document.getElementById("numEntered");
	numKeyEntered.onkeypress = returnKeyPressed;

}
