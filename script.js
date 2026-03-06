// script.js - Interactive JavaScript Animations and User Interactions

// Function to animate elements
function animate(element, animationClass) {
    element.classList.add(animationClass);
    element.addEventListener('animationend', () => {
        element.classList.remove(animationClass);
    });
}

// Example usage with button click
const button = document.getElementById('animateButton');
button.addEventListener('click', () => {
    const elementToAnimate = document.getElementById('elementToAnimate');
    animate(elementToAnimate, 'fade-in');
});

// Function to create dynamic interactions based on user input
function handleUserInput() {
    const userInput = document.getElementById('userInputField').value;
    const displayArea = document.getElementById('displayArea');
    displayArea.innerText = `You entered: ${userInput}`;
}

// Adding event listener for user input
const inputButton = document.getElementById('inputButton');
inputButton.addEventListener('click', handleUserInput);