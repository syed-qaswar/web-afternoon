// Works inside a browser
// console


// variables
// let name = 'Adil' //strings
// let age = 20 //integer
// let city = 'Lahore' //strings
// const cnic = '123-1234-123'
// let result = 99.5 //float
// let cnic = 12

// output
// console.log(name)
// console.log(age)
// console.log(city)

// functions (pre-defined / user-defined)

// defining a function
// function greet(name){ //parameter
//     // function block
//     // console.log('Hello, Guest')
//     console.log('Hello,' + name)
// }
// // calling a function
// // greet()
// greet('Ammar') //argument


//task: a function that takes 2 integers and display their sum

// Operators: arithmetic, assignment, comparison geeksforgeeks

// HTML DOM

// adding some text
// document.getElementById('text').innerText = 'Hello JavaScript'
// document.querySelector('#text')

// working with styles
// function changeColor(){
//     document.getElementById('text').style.color = 'blue'
// }

// let btn = document.getElementById('btn')
// using a named function
// btn.addEventListener('click', changeColor)

// // using an anonymous function
// btn.addEventListener('click', function(){
//     document.getElementById('text').style.color = 'blue'
// })

// local vs global variables

// let text = document.getElementById('text')
// let input = document.getElementById('input')
// let btn = document.getElementById('btn')
// let digits = input.length


// btn.addEventListener('click', function(){
//     // console.log(digits)
//     if(digits >= 5){
//         text.innerText = input.value
//     }else{
//         text.innerText = 'Number of Characters should be 5 or more than 5'
//     }
// })


// arrow functions (anonymous , inline functions)
// 1. regular function syntax
// function greet(name){
//     console.log('Hello, ' + name)
// }
// greet('Ammar')

// arrow function syntax
// let greet = (name) =>{
//     console.log('Hello' + name)
// }
// greet('Ahmed')

// inline syntax
// let greet = (name) => console.log('Hello ' + name)
// greet('Ahmed')

// let add = (x , y) => console.log(a + b)
// add()

// arrow function for event listener

// btn.addEventListener('click', () => {
//     // console.log(digits)
//     if(digits >= 5){
//         text.innerText = input.value
//     }else{
//         text.innerText = 'Number of Characters should be 5 or more than 5'
//     }
// })

// Arrays
let cities = ['Lahore', 'Karachi', 'Quetta']
console.log(cities)

// accessing the items within the array
console.log(cities[1])
let city = cities[0]
console.log(city)

// useful properties and methods
console.log(cities.length)
cities.push('Islamabad')
// cities[2] = 'xyz'  // overwrites the value
let val = cities.pop() //removes adn returns the item
console.log(val)
console.log(cities)

// loops
for(let i = 0; i <= 10; i++){
    console.log(i)
}
// 2 x 1 = 2
// 2 x 2 = 4

for(let i = 1; i <= 10; i++){
    let result = 2 * i
    console.log(2 + 'x' + i + '=' + result)
}


// loop with an array (iterating over an array)
let students = ['Ammar', 'Adil', 'Uzair', 'Tayyab']
// let arraySize = students.length
// for(let i = 0; i < arraySize; i++){
//     console.log(students[i])
// }

// ierating over an array using forEach (call-back function)
// students.forEach((student) => console.log(student)); 

// 1st iteration -> ('Ammar') => -> prints Ammar
// 2nd iteration -> ('Adil') => -> prints Adil


// function x() //not accepting values
// function y(a) //accepting values 


// list with forEach
// let list = document.querySelector('#list')

// students.forEach((student) =>{
//     // list.innerHTML += "<li>" + student + "</li>"
//     list.innerHTML += `<li> ${student} </li>`
// });

// REACTJS: Library to create User interfaces
// Uses Components

// Navbar, Cards
let add_task = document.getElementById('task-btn')
function todoList(){
    let task_input = document.getElementById('task-input')
    let task_value = task_input.value.trim()

    // checking the value
    if(task_input == ""){
        alert('Write something!!')
    }

    // creating li elements
    let li = document.createElement('li')
    li.className = "flex justify-between bg-blue-200 rounded-md p-2 my-1"

    // add task text
    let span = document.createElement('span')
    span.innerText = task_value
    span.className = 'cursor-pointer'

    // complete task
    span.addEventListener('click', () => {
        span.classList.toggle('line-through')
        span.classList.toggle('text-gray-200')
    })

    // adding delete button
    let del = document.createElement('button')
    del.innerText = 'Delete Task'
    del.className = 'bg-red-500 text-white px-2 py-1 rounded-md'

    // deleting a task
    del.onclick = function(){
        li.remove()
    }
    // del.addEventListener('click', () =>{
    //     li.remove()
    // })

    li.appendChild(span)
    li.appendChild(del)
    document.querySelector('.task-list').appendChild(li)
}

add_task.addEventListener('click', todoList)



function calculator(operator){
    let n1 = parseFloat(document.getElementById('num1').value)
    let n2 = parseFloat(document.getElementById('num2').value)
    let result = 0

    if(n1 === "" || n2 === ""){
        alert("Write something")
    }
    if(NaN(n1) || NaN(n2)){
        alert('Please enter a valid number')
    }

    if(operator === '+') result = n1 + n2
    else if(operator === '-') result = n1 - n2

    else "Enter a valid operator"

    document.getElementById('display').innerText = result

}

let x = () => ('Hello functions')


console.log(test())