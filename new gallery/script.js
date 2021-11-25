var slides = document.getElementsByClassName("slider");
var counter = 0;
var lefts = 0;
var temp = 0;

function next() {

    counter++;
    lefts = counter - 1;
    slides[counter - 1].style.left = "-100%";
    slides[counter - 1].style.zIndex = "1";
    slides[counter - 1].style.visibility = "hidden";
    if (lefts == 0) {
        temp = slides.length - 1;
        slides[temp].style.left = "456px";
        slides[temp].style.zIndex = "2";
        slides[temp].style.visibility = "hidden";
    } else {
        temp = lefts - 1;
        slides[temp].style.left = "456px";
        slides[temp].style.zIndex = "2";
        slides[temp].style.visibility = "hidden";
    }
    if (counter > slides.length - 1) {
        counter = 0;
        slides[counter].style.left = "0";
        slides[counter].style.zIndex = "3";
        slides[counter].style.visibility = "visible";

    } else {
        slides[counter].style.left = "0";
        slides[counter].style.zIndex = "3";
        slides[counter].style.visibility = "visible";

    }
}

function priv() {
    counter--;
    slides[counter + 1].style.left = "-100%";
    if (counter < 0) {
        counter = slides.length - 1;
        slides[counter].style.left = "0";
        slides[counter].style.zIndex = "3";
        slides[counter].style.visibility = "visible";

    } else {
        slides[counter].style.left = "0";
        slides[counter].style.zIndex = "3";
        slides[counter].style.visibility = "visible";

    }
}