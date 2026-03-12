console.log("JS LOADED")

const githubBtn = document.getElementById("githubBtn")

githubBtn.addEventListener("click", function () {

window.open("https://github.com/repsofcode", "_blank")

})


// Project buttons

const projectButtons = document.querySelectorAll(".projectBtn")

projectButtons.forEach(function(button){

button.addEventListener("click", function(){

const repoLink = button.getAttribute("data-link")

window.open(repoLink, "_blank")

})

})
