// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 100;
var nextRandom = Math.floor(Math.random() * range + 1);



// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button

//Generate a number to start the game!

function higher() {
    if (random < nextRandom) {
        window.alert("Correct!")
 } 
    else if (random > nextRandom) {
        window.alert("Incorrect")
    }
 generateRandom();
}
function lower() {
if (random > nextRandom) {
    window.alert("Correct!")

}
    else if (random < nextRandom) {
        window.alert("Incorrect")
    }
generateRandom();
}
