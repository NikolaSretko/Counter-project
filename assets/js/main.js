const counterElement = document.querySelector('.counter');
const plus1Button = document.getElementById('plus1');
const minus1Button = document.getElementById('minus1');
const plus10Button = document.getElementById('plus10');
const minus10Button = document.getElementById('minus10');
const plus100Button = document.getElementById('plus100');
const minus100Button = document.getElementById('minus100');
const multiply2Button = document.getElementById('multiply2');
const resetButton = document.getElementById('reset');

let counter = 0;

plus1Button.addEventListener('click', () => {
    counter += 1;
    updateCounter();
});

minus1Button.addEventListener('click', () => {
    counter -= 1;
    updateCounter();
});

plus10Button.addEventListener('click', () => {
    counter += 10;
    updateCounter();
});

minus10Button.addEventListener('click', () => {
    counter -= 10;
    updateCounter();
});

plus100Button.addEventListener('click', () => {
    counter += 100;
    updateCounter();
});

minus100Button.addEventListener('click', () => {
    counter -= 100;
    updateCounter();
});

multiply2Button.addEventListener('click', () => {
    counter *= 2;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = counter;
}
