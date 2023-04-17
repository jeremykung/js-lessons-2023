/*

1. Local Storage
    - Setting Items
    - Getting Items
2. JSON
3. Storing JSON objects in Local Storage
    - Stringify
    - Parse

*/

// Save Data to your Local Storage
// localStorage.setItem('pet', 'cat')
// localStorage.setItem('petAge', 6)
// localStorage.setItem('petName', 'cathy')

// Get Data from your Local Storage
const pet = localStorage.getItem('pet')
const petName = localStorage.getItem('petName')
const petAge = localStorage.getItem('petAge')
console.log(pet)
console.log(petName)
console.log(petAge)

// update pet function
function updatePet() {
    // get data from form
    const newPet = document.querySelector('#pet').value
    const newPetName = document.querySelector('#petName').value
    const newPetAge = document.querySelector('#petAge').value

    // save in local storage
    localStorage.setItem('pet', newPet)
    localStorage.setItem('petName', newPetName)
    localStorage.setItem('petAge', newPetAge)

    // console log new pet data
    console.log(newPet)
    console.log(newPetName)
    console.log(newPetAge)
}

// Local Storage stores everything as a STRING
// How to store complex data (objects or arrays) in Local Storage

// Define Data (Array of Objects)
const data = [
    {
        name: 'Jennifer',
        grade: 10
    },
    {
        name: 'Evan',
        grade: 10
    },
    {
        name: 'Sam',
        grade: 11
    },
]

// convert data to string
const stringData = JSON.stringify(data)

// save to Local Storage
localStorage.setItem('studentArray', stringData)

// get the data
const gotData = localStorage.getItem('studentArray')

// convert back to JSON
const convertedData = JSON.parse(gotData)

// console.log(convertedData[0])
// console.log(convertedData[0].name)


// Review
