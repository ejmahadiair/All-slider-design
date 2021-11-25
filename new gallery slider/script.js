var sliders = document.getElementsByClassName("right");
var slid = document.getElementsByClassName("slider");
var counter = 0;


function back() {
    counter++;
    sliders[counter - 1].classList.add('left');
    sliders[counter - 1].classList.remove('center');
    sliders[counter - 1].classList.add('left_top');
    sliders[counter - 1].classList.remove('left');
    sliders[counter - 1].classList.add('top_center');
    sliders[counter - 1].classList.remove('left_top');
    sliders[counter - 1].classList.add('top_right');
    sliders[counter - 1].classList.remove('top_center');
    sliders[counter - 1].classList.add('right');
    sliders[counter - 1].classList.remove('top_right');
    if (counter > sliders.length - 1) {
        counter = 0;
        sliders[counter].classList.add('center');
    } else {
        sliders[counter].classList.add('center');

    }
}

//setInterval(back, 2000);