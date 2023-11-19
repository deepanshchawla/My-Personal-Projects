let inc_button = document.querySelector(".increment-button");
let dec_button = document.querySelector(".decrement-button");
let display = document.querySelector(".number-display");

let counter = 0;
updatedisplay();

function updatedisplay(){
    display.textContent = counter;
}

function increase(){
    counter++;
    updatedisplay();
}

function decrease(){
    counter--;
    updatedisplay();
}

inc_button.addEventListener("click", increase);
dec_button.addEventListener("click", decrease);