let currentNumber = 1;

                        //SLIDERS
//slider1
function slide1() {
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#slide1').classList.add('show');
}

const button1 = document.querySelector('#pin1');
button1.addEventListener('click', slide1);

//slider2
function slide2() {
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#slide2').classList.add('show');
}

const button2 = document.querySelector('#pin2');
button2.addEventListener('click', slide2);

//slider3
function slide3() {
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#slide3').classList.add('show');
}

const button3 = document.querySelector('#pin3');
button3.addEventListener('click', slide3);

//slider4
function slide4() {
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#slide4').classList.add('show');
}

const button4 = document.querySelector('#pin4');
button4.addEventListener('click', slide4);

//slider5
function slide5() {
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#slide5').classList.add('show');
}

const button5 = document.querySelector('#pin5');
button5.addEventListener('click', slide5);


                        //NAVI



function showNextSlide() {
    document.querySelector('.show').classList.remove('show');
    
}

let newNumber = currentNumber + 1;

document.querySelector('#next').addEventListener('click', showNextSlide);

/*document.querySelector('#next');

document.querySelector('#prev').classList.add('show');*/




/*slider1
function slide1() {
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#slide1').classList.add('show');
}

const button1 = document.querySelector('#pin1');
button1.addEventListener('click', slide1);  

________________________________________________*/

