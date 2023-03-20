/*

OBJECTS
1. Data types so far
2. Objects, what are they?
    - descriptions, actions
3. Coding objects
    - properties (key:value)
    - methods (functions in objects)
4. Accessing object properties

*/

// Data types so far!
const student = "Jeff"      // string
const age = 17              // number
const graduated = false     // boolean
const wpm = [35, 40, 49]    // array

// Objects
const whale = {

    // properties (desciptions)
    color: "blue",
    long: 40,
    habitat: "ocean",

    // methods (actions)
    swim() {
        console.log('he swam...')
    },
    eat() {
        console.log('he ate lots of shrimp!')
    }

}

const jar = {

    material: "clear",
    lid: "red",

    open() {
        console.log('jar is open...')
    },
    close() {
        console.log('jar was closed...')
    },
    putStuffIn() {
        console.log('you added berries')
        console.log('you added sugar'),
        console.log('you added salt')
    }
}

// Accessing object properties & methods
console.log(whale.color)
console.log(jar.material)
console.log(whale.swim())
console.log(jar.open())

// Create 3 more objects
// each object should be a friend you know
// define properties for them (descriptions)
// define methods for them (actions)