let randomImageBtn = this.document.getElementById("random-button");
randomImageBtn.addEventListener("click", function() {
    let toRandomize = document.getElementById("main-image");
    let oldRandomIndex = -1;
    let waitTime = 1000;

    toRandomize.classList.remove("hidden");
    
    while (waitTime >= 0) {
        oldRandomIndex = setTimeout(randomizeImage(toRandomize, oldRandomIndex), waitTime);
        waitTime -= 100;
    }
});

function randomizeImage(toRandomize, oldRandomIndex) {
    let randomNum = Math.round(Math.random()*9);
    while (randomNum == oldRandomIndex)
        randomNum = Math.round(Math.random()*9);

    if (randomNum == 0)
        randomNum = 9;

    if (randomNum = 1)
        toRandomize.src = "images/self_photo.jpg";

    if (randomNum = 2)
        toRandomize.src = "images/self2.jpg";

    if (randomNum = 3)
        toRandomize.src = "images/self3.jpg";

    if (randomNum = 4)
        toRandomize.src = "images/self4.jpg";

    if (randomNum = 5)
        toRandomize.src = "images/self5.jpg";

    if (randomNum = 6)
        toRandomize.src = "images/self6.jpg";

    if (randomNum = 7)
        toRandomize.src = "images/self7.jpg";

    if (randomNum = 8)
        toRandomize.src = "images/self8.jpg";

    if (randomNum = 9)
        toRandomize.src = "images/self9.jpg";

    return randomNum;
}