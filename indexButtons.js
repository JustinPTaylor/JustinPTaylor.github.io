let randomImageBtn = this.document.getElementById("random-button");
randomImageBtn.addEventListener("click", function() {
    let toRandomize = document.getElementById("main-image");
    let oldRandomIndex = -1;
    let waitTime = 600;
    randomImageBtn.classList.add("hidden");

    /* got the timeout from https://www.w3schools.com/JS/js_timing.asp */
    /*tried a lot, but was unable to get this to recurse the easy way, so manual it was*/
    setTimeout(function() {
        oldRandomIndex = randomizeImage(toRandomize, oldRandomIndex);
        toRandomize.classList.remove("hidden");
        setTimeout(function() {
            oldRandomIndex = randomizeImage(toRandomize, oldRandomIndex);
            waitTime -= 100;
        setTimeout(function() {
            oldRandomIndex = randomizeImage(toRandomize, oldRandomIndex);
            waitTime -= 100;
        setTimeout(function() {
            oldRandomIndex = randomizeImage(toRandomize, oldRandomIndex);
            waitTime -= 100;
        setTimeout(function() {
            oldRandomIndex = randomizeImage(toRandomize, oldRandomIndex);
            waitTime -= 100;
        setTimeout(function() {
            oldRandomIndex = randomizeImage(toRandomize, oldRandomIndex);
            waitTime -= 100;
        setTimeout(function() {
            oldRandomIndex = randomizeImage(toRandomize, oldRandomIndex);
            waitTime -= 100;
        }, waitTime)
        }, waitTime)
        }, waitTime)
        }, waitTime)
        }, waitTime)
        }, waitTime)
    }, 0)
    
    randomImageBtn.classList.remove("hidden");
});

function randomizeImage(toRandomize, oldRandomIndex) {
    let randomNum = Math.round(Math.random()*9);
    while (randomNum == oldRandomIndex)
        randomNum = Math.round(Math.random()*9);

    if (randomNum == 0)
        randomNum = 9;

    if (randomNum == 1)
        toRandomize.src = "images/self_photo.jpg";

    if (randomNum == 2)
        toRandomize.src = "images/self2.jpg";

    if (randomNum == 3)
        toRandomize.src = "images/self3.jpg";

    if (randomNum == 4)
        toRandomize.src = "images/self4.jpg";

    if (randomNum == 5)
        toRandomize.src = "images/self5.jpg";

    if (randomNum == 6)
        toRandomize.src = "images/self6.jpg";

    if (randomNum == 7)
        toRandomize.src = "images/self7.jpg";

    if (randomNum == 8)
        toRandomize.src = "images/self8.jpg";

    if (randomNum == 9)
        toRandomize.src = "images/self9.jpg";

    return randomNum;
}