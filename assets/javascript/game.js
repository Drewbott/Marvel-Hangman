// Create an alert to ask the user their name and display their name on the page
// var yourName = prompt("What is your name?")

// Greet the user
// alert("Hello" + yourName)

// Display their name on the page
// document.write (yourName)


// Pick a random Word
var words = [
"wolverive",
"daredevil",
"hulk",
"thor",
"ironman",
"hawkeye",
"spiderman",
"cyclops",
"magneto",
"gambit",
"rogue",
"storm",
"colossus",
"redskull",
];

var win = 0
var word = words[Math.floor(Math.random() * words.length)];

// While the word has not yet been guessed {

    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    var remainingLetters = word.length;

    // while (remainingLetters > 0) {
    // Show the player their current progress
    var puzzle = document.getElementById("puzzle");

    // puzzle.textContent = answerArray.join(" ");
    // alert(answerArray.join(" "));
  
    //  Get a guess from the player

    document.onkeyup = function(event) {
        var guess = event.key;
        // if (guess === null) {
        //     break;
        // } else if (guess.length !== 1) {
        //     alert("Please enter a single letter.");
        // }else {
            for (var j=0; j < word.length; j++){
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
                }
            }
        // }
        puzzle.textContent = answerArray.join(" ");
    
// Create a counter that counts up when the word is guessed
    

    // var guess = prompt("Guess a letter, or click cancel to quit.");

    // If the player wants to quit the game {
        // if (guess === null) {
        //     break;
        // } else if (guess.length !== 1) {
        //     alert("Please enter a single letter.");
        // }

// Else {
// If the player's guess is the word
// Update the player with the guess
// else {
//     for (var j=0; j < word.length; j++){
//         if (word[j] === guess) {
//             answerArray[j] = guess;
//             remainingLetters--;
//         }
//     }
// }
//     }
// Congratulate the player
// alert(answerArray.join(" "));
// alert("Excelsior! The answer was " + word);

 