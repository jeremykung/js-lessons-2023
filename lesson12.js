/*

Array Methods Review
1. forEach()
2. filter()

*/

const data = [
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
    {
        name: 'Angus',
        grade: 11
    },
]

data.forEach(function(element) {

    console.log(element)

    // change the HTML page to show the students
    document.querySelector('.students').innerHTML += `
        <h2 class='student-name'>${element.name}</h2>
        <p>${element.grade}</p>
    `
    
})