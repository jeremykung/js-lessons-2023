/*

1. Array Methods
    - .length
    - shift (remove first)
    - unshift (add first)
    - splice (remove)

2. Working with Arrays
    - foreach
    - anonmyous functions

3. 2D Arrays

*/

const students = ["Jen", "Evan", "Darren", "Nat", "MK", "Cindy"]

// Shows how many elements are in the array (it's length!)
console.log(students.length)

// Removes the 1st element of the array
students.shift()

// Adds the argument to the front of the array
students.unshift("Jeff")

// Splice allows you to remove things in the middle
// splice(index, how many)
students.splice(1, 2)

// 1
// Create an array of desserts
// remove the 2nd one
// add a new one to the front

// 2
// Create an array of 5 random numbers
// remove the all of the numbers in the middle so you are only left with the first and last numbers


/*
2. Working with Arrays
    - foreach
    - anonmyous functions
*/


// forEach() goes through your entire array and runs a function for each element in it

// the function can also be defined inside the forEach() function
// since it has no name, it is called an anonymous function

// the function automatically has access to the element it is currently on through the element argument

const vegetables = ["broccoli", "lettuce", "carrot", "corn"]

vegetables.forEach(logElement)

function logElement(element) {
    console.log(element)
}

// Anonymous Function
vegetables.forEach(function(element) {
    console.log(element)
})

// Finding the sum of an array using forEach

let sum = 0

const nums = [1, 2, 3, 100, 50]

// nums.forEach(addAll)

// function addAll(element) {
//     sum = sum + element
//     console.log(`adding ${element} to sum... ${sum}`)
// }

// Anonmyous Function
nums.forEach(function(element) {
    sum = sum + element
    console.log(sum)
})

// 2D Arrays
// they are basically arrays inside of an array

const twoDArray = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

console.log(twoDArray[0][1]) // gets 2
console.log(twoDArray[2][2]) // gets 6
console.log(twoDArray[1][0]) // gets 4