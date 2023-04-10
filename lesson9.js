/*
1. Classes
    - What are they
    - How do we make them?
    - constructor fn
    - default methods (getInfo)
    - this keyword
*/

class Cookie {
    constructor(color, candy) {
        this.color = color // dynamic properties
        this.candy = candy
        this.type = "gingerbread" // default properties
        this.calories = 205
    }
    
    // default methods
    eatCookie() {
        console.log('cookie was eaten...')
    }
    getCookieInfo() {
        console.log(`this is a ${this.type} cookie and it is ${this.color} with ${this.candy} and has ${this.calories} calories.`)
    }
}

const cookie1 = new Cookie('blue','m&m')
const cookie2 = new Cookie('red','twix')


// Create a class for movies
// make 3 movie objects from the class
// there should be dynamic properties and default methods

// Create a class songs
// make 3 song objects from the class
// there should be dynamic prope1rties
// there should be default methods that use the "this" keyword