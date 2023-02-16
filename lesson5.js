/*
    1.Buttons
    2.DOM
        - querySelector
        - elementById
    3.Funciton Variables

*/
let sayHiMany
let num = 0
let numInterval

function start() {
    numInterval = setInterval(addNum, 1000)
}

function stop() {
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
    // document.write('some stuff I wrote!')
    document.querySelector(".story").innerText = "new story!"
    document.querySelector(".story").innerHTML = "<h1>new story!</h1>"

    // document.getElementById("story").innerText = "<h1>new story!</h1>"

}