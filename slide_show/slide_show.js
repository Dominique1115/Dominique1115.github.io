var images=["images/img1.jpg", "images/img2.jpg","images/img3.jpg","images/img4.jpg"];
var i=0;

function displaySlideShow(){
	var mainImage = document.getElementById("mainImage");
	mainImage.src=images[i];
	++i;
	if(i>=images.length){
		i=0;
	}
}

setInterval(displaySlideShow, 4000);




