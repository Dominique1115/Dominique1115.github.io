
//HTML EVENT HANDLER - NOT RECOMMENDED
function checkUsername(){
	var elMsg = document.getElementById('feedback');
	var elUsername = document.getElementById('username');
	if(elUsername.value.length < 5){
		elMsg.textContent = 'Username must be 5 characters or more';
	}else{
		elMsg.textContent = '';
	}
}

//TRADITION DOM EVEN THANDLER
function checkUsername2(){
	var elMsg = document.getElementById('feedback2');
	if (this.value.length < 5){
		elMsg. textContent='Username must be 5 characters or more';
	}else{
		elMsg.textContent = '';
	}
}

var elUsername = document.getElementById('username2');
elUsername.onblur = checkUsername2;


//EVENT LISTENERS - PREFERRED METHOD BUT NOT AVAILABLE ON OLD BROWSERS
function checkUsername3(minLength){
	console.log("HERE");
	var elMsg = document.getElementById('feedback3');
	if(elUsername.value.length < minLength){
		elMsg.textContent = 'Username must be 5 characters or more';
	}else{
		elMsg.textContent='';
	}
}

var elUsername=document.getElementById('username3');
elUsername.addEventListener('blur', function(){checkUsername3(5)}, false);