nextButton.addEventListener("click", function() {
    let first = document.getElementById("Project1");
    let second = document.getElementById("Project2");
    first.classList.add("hidden");
    second.classList.remove("hidden");
    nextButton.classList.add("hidden");
    backButton.classList.remove("hidden");
});
backButton.addEventListener("click", function() {
    let first = document.getElementById("Project1");
    let second = document.getElementById("Project2");
    second.classList.add("hidden");
    first.classList.hidden("hidden");
    backButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
});

let nextButton = this.document.getElementById("next");
let backButton = this.document.getElementById("back");