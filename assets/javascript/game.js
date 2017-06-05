var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Initial Game Stats
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//RNG for letters

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // updates guessesLeft and writes to innerHTML

var updateGuessesLeft = function() {

  document.getElementById('guessRemaining').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  
  document.getElementById('soFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Resetting select variables after each game
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//Keypress to trigger game events

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

    //Wins are applied and game reset
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.getElementById('wins').innerHTML = "Wins: " + wins;
                
                reset();
            }
              //Losses are applied and game reset 
            }else if(guessesLeft == 0){
          
            losses++;
            document.getElementById('losses').innerHTML = "Losses: " + losses;
            
            reset();
            
            }
    

};