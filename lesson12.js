/*

Array Methods Review
1. forEach()
2. filter()

*/

// Array of Objects
let students = [
    {
        name: 'Skyler',
        grade: 9
    },
    {
        name: 'Cindy',
        grade: 9
    },
    {
        name: 'Natasha',
        grade: 10
    },
]

// 1. array.forEach()
// does a function for each element in an array

students.forEach(function(element) {

    console.log(element)

    // change the HTML page to show the students
    document.querySelector('.students').innerHTML += `
        <h2 class='student-name'>${element.name}</h2>
        <p>${element.grade}</p>
    `
    
})

// 2. array.filter()
// Filtering out an element in the array

const music = ['piano', 'violin', 'trumpet', 'flute', 'cello']

const filteredMusic = music.filter(function(element) {
    console.log('we are on element:', element)
    return element !== 'trumpet'
})

// Create a number array
// Filter out a number from that number array