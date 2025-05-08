// function for side nav
let landingImg = document.querySelector(".hero-image");
let projectTitle = document.querySelector("#project-title");
let subtitle = document.querySelector(".subtitle");
let repository = document.querySelector(".repository");
let viewWebsite = document.querySelector(".view-website");



// details shown on each page
function changeContent(projectNumber){
	if(projectNumber == 1){
		landingImg.src = "assets/images/function-img.png";
		projectTitle.textContent = "FUNCTIONS";
		subtitle.textContent = "TBD";
		repository.href = "https://github.com/mikaarai/functions";
		viewWebsite.href = "https://mikaarai.github.io/functions/";
	  } else if (projectNumber == 2) {
		landingImg.src = "assets/images/links-img.png";
		projectTitle.textContent = "LINKS";
		subtitle.textContent = "TBD";
		repository.href = "https://github.com/mikaarai/links";
		viewWebsite.href = "https://mikaarai.github.io/links/";
	  } else if (projectNumber == 3) {
		landingImg.src = "assets/images/binding-img.png";
		projectTitle.textContent = "BINDING";
		subtitle.textContent = "TBD";
		repository.href = "https://github.com/mikaarai/binding";
		viewWebsite.href = "https://mikaarai.github.io/binding/";
	  } else if (projectNumber == 4) {
		landingImg.src = "assets/images/manuscript.png";
		projectTitle.textContent = "MANUSCRIPT";
		subtitle.textContent = "TBD";
		repository.href = "https://github.com/mikaarai/manuscript";
		viewWebsite.href = "https://mikaarai.github.io/manuscript/";
	}
  }


// active state
// to easily see which page you are in
// resource: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

// remove "active" from all buttons
function setActive(button) {
	const buttons = document.querySelectorAll(".menu button");
	buttons.forEach(btn => btn.classList.remove("active"));
  
// add "active" to the clicked button
	button.classList.add("active");
  }