/*

Audio

1. The Audio Class
2. Making audio objects

*/

const song1 = new Audio('audio/01.mp3')

function playSongOne() {
    console.log('playing song 1...')
    song1.play()
}

// Create your pause song button and function
play()  // plays song
pause() // pauses song
load()  // stops song and resets