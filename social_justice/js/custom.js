// const badgeButton = document.getElementById('badgeButton');
// const spanBadge = document.querySelector(".badge");

// function badgeFunc(e){
// 	//check local storage. Does the kkey socialJusticeBadge exist. 
// 	if(localStorage.getItem('socialJusticeBadge')){
// 		let numTimesClicked = Number(localStorage.getItem('socialJusticeBadge'));
// 		localStorage.setItem("socialJusticeBadge", ++numTimesClicked);
// 	}else{
// 		localStorage.setItem('socialJusticeBadge', "1");

// 	}

// 	spanBadge.innerText=localStorage.getItem('socialJusticeBadge');

// }
// badgeButton.addEventListener('click', badgeFunc);xx

$secondP = $('p#aboutP2');
$thirdP = $('p#aboutP3');
$fourthP = $('p#aboutP4');

$secondP.hide().delay(500).fadeIn(1400);
$thirdP.hide().delay(1000).fadeIn(1400);
$fourthP.hide().delay(1500).fadeIn(1400);

	