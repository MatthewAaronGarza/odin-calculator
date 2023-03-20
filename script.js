// lets start with making functions that we are going to be using 

function add (num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    let sum = num1 + num2
    return sum
}

function subtract (num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    let difference = num1 - num2
    return difference
}

function multiply (num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    let product = num1 * num2
    return product
}

function divide (num1, num2) {
    num1 = Number(num1)
    num2 = NUmber(num2)
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


let num1 = document.querySelector('.number1')

num1.addEventListener("click", () => {
    addNumber(num1)
})

let num2 = document.querySelector('.number2')

num2.addEventListener("click", () => {
    addNumber(num2)
})

let num3 = document.querySelector('.number3')

num3.addEventListener("click", () => {
    addNumber(num3)
})

let num4 = document.querySelector('.number4')

num4.addEventListener("click", () => {
    addNumber(num4)
})

let num5 = document.querySelector('.number5')

num5.addEventListener("click", () => {
    addNumber(num5)
})

let num6 = document.querySelector('.number6')

num6.addEventListener("click", () => {
    addNumber(num6)
})

let num7 = document.querySelector('.number7')

num7.addEventListener("click", () => {
    addNumber(num7)
})

let num8 = document.querySelector('.number8')

num8.addEventListener("click", () => {
    addNumber(num8)
})

let num9 = document.querySelector('.number9')

num9.addEventListener("click", () => {
    addNumber(num9)
})


let decimal = document.querySelector('.decimal')

decimal.addEventListener("click", () => {
    
    // let's check to make sure there isn't already a decimal in the display div

    let displayAtClick = display.textContent
    
    if (displayAtClick.includes('.')) {
        // we do nothing if the decimal is already there

    } else {
        addNumber(decimal)
    }
})



function addNumber(numToAdd) {
    let valueToAdd = numToAdd.textContent
    display.append(valueToAdd)
}

// we want to add functionality to the clear button

let clear = document.querySelector(".clear")

clear.addEventListener("click", () => {

    // we need to clear whatever is in the display here

    display.textContent = ''

})

// we need the var to be global to be accessed by the equals button

let numberInDisplay1 = ''
let numberInDisplay2 = ''

let addButtonPressed = false
let subButtonPressed = false
let mulButtonPressed = false
let divButtonPressed = false


let addButton = document.querySelector(".add")

addButton.addEventListener("click", () => {

    // we need to add functionality to the add button here
    // also make the div background color change to let user know
    // they selected the add button

    numberInDisplay1 = display.textContent
    
    // after saving the numberToAdd we need to clear the display again
    display.textContent = ''
    addButtonPressed = true

})

let equalsButton = document.querySelector(".equals")

equalsButton.addEventListener("click", () => {


    numberInDisplay2 = display.textContent

    if (addButtonPressed = true) {

        let numToDisplay = add(numberInDisplay1, numberInDisplay2)

        display.textContent = numToDisplay
    }



    // after returning an answer we need to set all the operators to false
    addButtonPressed = false
    subButtonPressed = false
    mulButtonPressed = false
    divButtonPressed = false
})
