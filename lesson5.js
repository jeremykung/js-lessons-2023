/*
    1.Buttons
    2.DOM
        - querySelector
        - elementById
*/

function sayHi() {
    console.log('hi')
}

function writeOnScreen() {
    // document.write('some stuff I wrote!')
    document.querySelector(".story").innerText = "new story!"
    document.querySelector(".story").innerHTML = "<h1>new story!</h1>"

    // document.getElementById("story").innerText = "<h1>new story!</h1>"

}