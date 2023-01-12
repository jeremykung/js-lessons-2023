/*

1. Math Operators
2. parseInt()
3. If Statements

*/

// Math Operators

// Add +
console.log(5 + 3)

// Subtract -
console.log(5 - 3)

// Multiply *
console.log(5 * 3)

// Divide /
console.log(5 / 3)

// Modulus %
console.log(5 % 3) // remainder

// Order of Operations
console.log(1 + (2 - 3) * 4)

let num1 = prompt('choose a number')
let num2 = prompt('choose a number')

// parseInt() changes strings to numbers
num1 = parseInt(num1)
num2 = parseInt(num2)

console.log(`${num1} + ${num2} = ${num1 + num2}`)

// exercise: get 5 numbers from the user then add them together and display on screen

// output ex: 1 + 2 + 3 + 4 + 5 = 15

// exercise: create another equation that takes those same  numbers and calculates them

// >> output ex: 1 + 2 * ( 3 + 4 ) - 5 = 10

// const person = prompt('name a person')

// If Statements

// Comparisons
// == soft comparison (different data type ok)
// === hard comparison (must be same data type)
// <= less than 
// >= greater than

if (5 <= 4) {
    console.log('true!')
}

// Multiple Conditions
// && lets you add more conditions

if (5 <= 7 && 2 >= 1) {
    console.log('correct!')
}

// Get a number from the user
// if it is over 10 say it is a big number
// if it is under 5 say it is a small number
// if it is between 5 and 10, say it is a medium number

// If Else Statements
const person = prompt('who are you?')

// if (person === "Jeff") {
//     console.log('you are an artist!')
// } else {
//     console.log('you are not Jeff!')
// }

// Else If Statement
if (person === "Sam") {
    console.log('you are a chess master')
} else if (person === "MK") {
    console.log('you are a musician!')
} else if (person === "Judy") {
    console.log('you are sleepy!')
} else {
    console.log('you are nobody!')
}