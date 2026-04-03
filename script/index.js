// Works inside a browser
// console


// variables
let name = 'Adil' //strings
let age = 20 //integer
let city = 'Lahore' //strings
const cnic = '123-1234-123'
let result = 99.5 //float
// let cnic = 12

// output
console.log(name)
console.log(age)
console.log(city)

// functions (pre-defined / user-defined)

// defining a function
function greet(name){ //parameter
    // function block
    // console.log('Hello, Guest')
    console.log('Hello,' + name)
}
// calling a function
// greet()
greet('Ammar') //argument


//task: a function that takes 2 integers and display their sum

// Operators: arithmetic, assignment, comparison geeksforgeeks

// HTML DOM

// adding some text
document.getElementById('text').innerText = 'Hello JavaScript'
// document.querySelector('#text')

// working with styles
function changeColor(){
    document.getElementById('text').style.color = 'blue'
}

let btn = document.getElementById('btn')
// using a named function
btn.addEventListener('click', changeColor)

// using an anonymous function
btn.addEventListener('click', function(){
    document.getElementById('text').style.color = 'blue'
})

// local vs global variables


