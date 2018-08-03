// Create an alert to ask the user their name and display their name on the page
// var yourName = prompt("What is your name?")

// Greet the user
// alert("Hello" + yourName)

// Display their name on the page
// document.write (yourName)


// Pick a random Word
var words = [
"wolverine",
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
var wins = 0;
var wrongLetters = [];
var maxLives = 8;
var lives = maxLives;
var word = words[Math.floor(Math.random() * words.length)];
var puzzle = document.getElementById("puzzle")
var livesElem = document.getElementById("remaining")
var winsElem = document.getElementById("wins")
var wrongLettersElem = document.getElementById("incorrect")
var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;


function update(wins, lives, wrongLetters){
    livesElem.innerHTML = lives;
    winsElem.innerHTML = wins;
    wrongLettersElem.textContent = wrongLetters.join(" ");
    puzzle.textContent = answerArray.join(" ");
}

function reset(){
lives = maxLives;
wrongLetters = [];
answerArray = [];
word = words[Math.floor(Math.random() * words.length)];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
remainingLetters = word.length;

}

// alert("Try to guess the character.")
// While the word has not yet been guessed {

    
    

    // while (remainingLetters > 0) {
    // Show the player their current progress
    
    // puzzle.textContent = answerArray.join(" ");
    // alert(answerArray.join(" "));
  
    //  Get a guess from the player

    document.onkeyup = function(event) {
        var guess = event.key;
        var goodGuess = false
        for (var j=0; j < word.length; j++){
            if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                    goodGuess = true;
            }
        }
        if (!goodGuess){
            wrongLetters.push(guess); 
            lives--;
            update(wins, lives, wrongLetters)
        }

         if (remainingLetters === 0){
            wins ++ 
            setTimeout(win, 500)
            
        }
        if (lives === 0){
            setTimeout(lose, 500)
        }
        update(wins, lives, wrongLetters)
    }


function win() {
    alert("You Win!")
    reset()
    update(wins, lives, wrongLetters)
}
    function lose() {
        reset()
        update(wins, lives, wrongLetters)
        alert("You Lose!")
    }

    

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

 