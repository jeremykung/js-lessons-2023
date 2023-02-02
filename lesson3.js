/*
LOOPS

1. While Loops
    - Booleans
    - syntax
    - increment
2. For Loops

*/

// let num = 3
// num++
// let student = "Cindy"
// // Boolean
// let doorOpen = false

// while (doorOpen === false) {
//     console.log('open the door')
//     doorOpen = true
// }

// while (num === 3) {
//     console.log('hi')
//     // below do the same thing (add 1 to num)
//     num = num + 1
//     num++
// }

// while (doorOpen) {
//     console.log('open the door')
//     doorOpen = false
// }

// 1. Create a loop that will run 5 times
// 2. The loop should say something in the console

// let myNum = 0

// while (myNum < 5) {
//     myNum++
//     console.log(myNum)
// }

// For Loops
// We can do something a certain number of times
for (i = 0; i < 10; i++) {
    console.log('hello')
} 

// you can play with the conditions and intial variable
for (a = 10; a > 0; a--) {
    console.log('we are counting down')
    console.log(a)
}

// You can put loops in loops!
for (i = 0; i < 10; i++) {
    for (j = 0; j < 5; j++) {
        document.write(j)
    }
} 

