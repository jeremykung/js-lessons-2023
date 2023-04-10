/*

1. Reading data form values
2. Adding data objects to an array

*/

let students = []

function addStudent() {

    // 1. read the value from the input
    const nameData = document.querySelector("#name").value
    const gradeData = document.querySelector("#grade").value

    // 2. console.log the value to confirm we have it
    console.log(nameData, gradeData)

    // 3. create object with form data
    const student = {
        name: nameData,
        grade: gradeData
    }
2
    // 4. add object to array
    students.push(student)
}

// Create 2 form inputs
// Make a button that when clicked, makes an object with those 2 form inputs
// Then push that object to an array