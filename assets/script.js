let landingImg = document.querySelector(".hero-image");
let projectTitle = document.querySelector("#project-title");
let subtitle = document.querySelector(".subtitle");
let repository = document.querySelector(".repository");
let viewWebsite = document.querySelector(".view-website");


function changeContent(projectNumber){
	if(projectNumber == 1){
		landingImg.src = "assets/images/function-img.png";
		projectTitle.textContent = "FUNCTION";
		subtitle.textContent = "TBD";
		repository.href = "https://github.com/mikaarai/functions";
		viewWebsite.href = "https://mikaarai.github.io/function/";
	}
  }