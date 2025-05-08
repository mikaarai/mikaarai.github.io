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

  function setActive(button) {
	// remove "active" from all buttons
	// to easily see which page you are in
	// resource: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	const buttons = document.querySelectorAll(".menu button");
	buttons.forEach(btn => btn.classList.remove("active"));
  
	// add "active" to the clicked button
	button.classList.add("active");
  }