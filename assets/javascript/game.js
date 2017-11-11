$( document ).ready(function() {
    /*numbers for the score */
    var numberGuesses =10;
    var numberWin =0;
    var numberLosses =0;
        
        var computerChoice = genCharArray('a', 'z')[Math.floor(Math.random()*genCharArray('a', 'z').length)];
        console.log(computerChoice);
    
        document.onkeyup = function (event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
        console.log(userGuess)
        for (i=0; i < arrayGuesses; i++) {
        var arrayGuesses = [" "];
        arrayGuesses.push(userGuess);
        console.log(arrayGuesses[i]);
       
       if (userGuess == computerChoice) {     
           numberWin++;
       }
        else if (userGuess != computerChoice) {
           numberLosses++;
      console.log(userGuess);
       }
    }
   
   // var arrayGuesses= guessesMade;
    var instruction = "<p>guess what letter I am thinking of</p>"; 
    var displayWins = "<p>Wins: " + numberWin + "</p>"; 
    var displayLosses = "<p>Loses: " + numberLosses + "</p>"; 
    var displayGuessesLeft = "<p>Guesses Left: " + numberGuesses + "</p>";
    var displayGuessesMade = "<p>Your Guesses so far: " + arrayGuesses + "</p>";

    document.querySelector('#gameScore').innerHTML = instruction + displayWins + displayLosses + 
    displayGuessesLeft+ displayGuessesMade 
            }          
        }
    });
    

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
       