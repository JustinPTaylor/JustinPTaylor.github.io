let randomImage = this.document.getElementById("random-button");
randomImage.addEventListener("click", function() {
    let toRandomize = document.getElementById("main-image");
    toRandomize.classList.remove("hidden");
    toRandomize.src = "favorite_things_site.png";
});