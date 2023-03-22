/*

1. Reading form values
2. Local Storage

*/

let students = []

function handleClick() {
    // 1. read the value from the input
    const nameData = document.querySelector("#name").value
    const gradeData = document.querySelector("#grade").value
    // 2. console.log the value
    console.log(nameData, gradeData)
    // 3. create object with form data
    const student = {
        name: nameData,
        grade: gradeData
    }
    // 4. add that data to my array
    students.push(student)
}

// Create 2 form inputs
// Make a button that when clicked, makes an object with those 2 form inputs
// Then push that object to an array