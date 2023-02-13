/*
    Functions
    1. Defining
    2. Calling
    3. Parameters / Arguments
    4. Callback Functions

*/

// // Define

// function alleyOop() {
//     document.write('Jennifer got the ball')
//     document.write('Markus made a great aerial pass')
//     document.write('Jennifer dunked over Jeff')
//     console.log(true)
// }

// // Call

// alleyOop()
// alleyOop()

// // Practice
// // Define 2 more functions
// // Call them multiple times



// // Define with Parameters
// function reject(player) {
//     document.write(player + ' was rejected!')
//     console.log(false)
// }

// function add3(num) {
//     const theNum = parseInt(num)
//     const answer = theNum + 3
//     console.log('answer is ' + answer)
// }

function multiply(num1, num2) {
    const answer = num1 * num2
    console.log(`${num1} x ${num2} = ${answer}`)
}

// // Call with Arguments
// reject('Jeff')
// add3(1)
// multiply(5, 10)

// Practice
// Define and call a function that adds 50, multiplies by 2, then divides by 3
// Define and call a function that says hello to 2 different people


// Callback Functions
// functions as arguments

function sayHi() {
    console.log('hi')
}

function sayBye() {
    console.log('bye!')
}

// Calls a function after some time
setTimeout(sayHi, 1000)

// Calls a function every x seconds
setInterval(sayBye, 2000)

// Create a callback function with setTimeout that calls a function with parameters after 2 seconds

setTimeout(sayHi, 2000)