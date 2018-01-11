const badgeButton = document.getElementById('badgeButton');
const spanBadge = document.querySelector(".badge");

function badgeFunc(e){
	//check local storage. Does the kkey socialJusticeBadge exist. 
	if(localStorage.getItem('socialJusticeBadge')){
		let numTimesClicked = Number(localStorage.getItem('socialJusticeBadge'));
		localStorage.setItem("socialJusticeBadge", ++numTimesClicked);
	}else{
		localStorage.setItem('socialJusticeBadge', "1");

	}

	spanBadge.innerText=localStorage.getItem('socialJusticeBadge');

}
badgeButton.addEventListener('click', badgeFunc);