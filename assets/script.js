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
		projectTitle.textContent = "ALUMNI PORTAL";
		subtitle.textContent = "Built to make networking easier and more human for Parsons alumni.";
		repository.href = "https://github.com/mikaarai/functions";
		viewWebsite.href = "https://mikaarai.github.io/functions/";
	  } else if (projectNumber == 2) {
		landingImg.src = "assets/images/links-img.png";
		projectTitle.textContent = "PHILOSOPHER'S CAVE";
		subtitle.textContent = "A site on philosophy and perception, inspired by books and education, with content by Inji Mammadli and powered by Are.na API";
		repository.href = "https://github.com/mikaarai/links";
		viewWebsite.href = "https://mikaarai.github.io/links/";
	  } else if (projectNumber == 3) {
		landingImg.src = "assets/images/binding-img.png";
		projectTitle.textContent = "DIVERSITY & INCLUSION";
		subtitle.textContent = "A visual exploration of diversity and inclusion, highlighting race, gender, accessibility, and underrepresented communities.";
		repository.href = "https://github.com/mikaarai/binding";
		viewWebsite.href = "https://mikaarai.github.io/binding/";
	  } else if (projectNumber == 4) {
		landingImg.src = "assets/images/manuscript-img.png";
		projectTitle.textContent = "DON NORMAN'S CRITIQUE";
		subtitle.textContent = "A nostalgic yet responsive website reflecting on Don Norman’s critique of modern design and honoring my father’s experience with ALS.";
		repository.href = "https://github.com/mikaarai/manuscript";
		viewWebsite.href = "https://mikaarai.github.io/manuscript/";
	  } else if (projectNumber == 5) {
		landingImg.src = "assets/images/spread-img.png";
		projectTitle.textContent = "MUSEUM EXPERIENCE";
		subtitle.textContent = "A collaboration with Huiji Ji exploring how digital design transforms museum experiences, blending immersive tech with timeless style.";
		repository.href = "https://github.com/mikaarai/spread";
		viewWebsite.href = "https://mikaarai.github.io/spread/";
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