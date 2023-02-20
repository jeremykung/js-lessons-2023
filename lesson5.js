/*
    1.Buttons
    2.DOM
        - querySelector
        - elementById
    3.Funciton Variables

*/
let sayHiMany
let num = 0
// this is an empty variable that will hold the setInterval later so we can cancel it
let numInterval

function start() {
    // start the setInterval, and store it in numInterval
    numInterval = setInterval(addNum, 1000)
}

function stop() {
    // we can cancel the interval because we named it numInterval above
    clearInterval(numInterval)
}

function reset() {
    // 1. make num 0
    num = 0
    // 2. stop interval
    clearInterval(numInterval)
}

function addNum() {
    num++
    console.log(num)
}

function sayHi() {
    console.log('hi')
}

function writeOnScreen() {
    // you can select specific HTML elements using querySelector() and change their text or HTML
    // the argument is the selector (just like how you select them in CSS)
    document.querySelector(".story").innerText = "new story!"
    document.querySelector(".story").innerHTML = "<h1>new story!</h1>"

    // getElementById() is another way to grab elements, but can only grab IDs
    document.getElementById("story").innerText = "<h1>new story!</h1>"

}