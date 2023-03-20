// lets start with making functions that we are going to be using 

function add (num1, num2) {
    let sum = num1 + num2
    return sum
}

function subtract (num1, num2) {
    let difference = num1 - num2
    return difference
}

function multiply (num1, num2) {
    let product = num1 * num2
    return product
}

function divide (num1, num2) {
    let quotient = num1 / num2
    return quotient
}

// we're making the var for the display div
let display = document.querySelector('.display')

// now we want to make a eventlistener for click, that adds
// the number to the display document using the append to div


let num0 = document.querySelector('.number0')

num0.addEventListener("click", () => {
    addNumber(num0)
})

function addNumber(numToAdd) {
    let valueToAdd = numToAdd.textContent
    display.append(valueToAdd)
}
