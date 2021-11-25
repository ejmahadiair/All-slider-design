var slides = document.getElementsByClassName("mySlides");
var glry=document.getElementsByClassName("layer");
var index = 0;
var temp = 0;

function clickmove(n){
  temp = index;
  slides[temp].style.display = "none";
  glry[temp].style.backgroundColor="rgba(0,0,0,0.5)";
  index=n;

  glry[index].style.backgroundColor="transparent";
  slides[index].style.display = "block";
}


function next() {
    index++;
    slides[index - 1].style.display = "none";
    glry[index-1].style.backgroundColor="rgba(0,0,0,0.5)";

    if (index >= slides.length) {
        index = 0;
        glry[index].style.backgroundColor="transparent";
        slides[index].style.display = "block";
    } else {
        slides[index].style.display = "block";
        glry[index].style.backgroundColor="transparent";
    }
}

function back() {
    index--;
    slides[index + 1].style.display = "none";
    glry[index+1].style.backgroundColor="rgba(0,0,0,0.5)";
    if (index < 0) {
        index = slides.length - 1;
        slides[index].style.display = "block";
        glry[index].style.backgroundColor="transparent";
    } else {
        slides[index].style.display = "block";
        glry[index].style.backgroundColor="transparent";
    }
}

setInterval(next, 2000);
