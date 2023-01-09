// 1. COMMENTS
// let us make notes for ourselves in our code
// the computer does not read comments when executing code

// Single Line Comment

/*
Multi
Line
Comments
*/


// 2. VARIABLES

// permanent
const age = 20
const year = 2025

// changeable
let favNum = 69

favNum = 7      // changes favNum to 7
favNum = 12     // changes favNum to 12


// 3. DATA TYPES

// Number Data Type
const birthYear = 1990

// String Data Type
const student1 = "Skyler"
const student2 = 'Cindy'
const student3 = `Judy`
const teacher = "Mr. Kung"


// 4. CONCATENATION
// joining things together

// using +
document.write("<p>Hi " + student1 + "</p>")
document.write(teacher + ' is born in ' + birthYear)

// using ``
document.write(`<p>${teacher} is born in ${birthYear} and he teaches ${student1} Web Dev</p>`)


// 5. PROMPTS
const friend = prompt("What is your best friend's name?")
const main = prompt("Who are you?")