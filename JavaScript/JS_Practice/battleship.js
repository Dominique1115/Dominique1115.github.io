var location1=3;
var location2=4;
var location3 =5;
var guess;
var hits=0;
var guesses = 0;
var isSunk=false;

while ( isSunk == false) {
	// guess = prommpt("Ready, aim, fire! (enter a number from 0-6): ");
	guess = prompt("Enter number betwee 0 and 6");
	if( guess < 0 || guess > 6 ){
		alert("Enter a valid cell number!");
	} else{
		 guesses = guesses+1;
		 if (guess == location1 || guess == location2 || guess==location3){
		 	alert("HIT!");
		 	hits = hits+1;
			if (hits == 3){
			 	isSunk=true;
			 	alert("YOU SUNK MY BATTLESHIP");
		 	}
		}else{
			alert("MISS");
		}
	}
}

var stats = " You took " + guesses + " guesses to sink the battheship, " + " which means your shooting accuracy was " + 3/guesses;
alert(stats);
