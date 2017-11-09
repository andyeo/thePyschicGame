$( document ).ready(function() {
    /*numbers for the score */
    var numberWin =0;
    var numberLosses =0;
    var numberGuesses =10;
    var guessesMade;
      
    
    var instruction = "<p>guess what letter I am thinking of</p>"; 
    var displayWins = "<p>Wins: " + numberWin + "</p>"; 
    var displayLosses = "<p>Loses: " + numberLosses + "</p>"; 
    var displayGuessesLeft = "<p>Guesses Left: " + numberGuesses + "</p>";
    var displayGuessesMade = "<p>Your Guesses so far: " + guessesMade + "</p>";
    /* user choice */
    for (i=0; i<10;i++){

    }
    /* possible choices for computer */    
    var computerChoice = genCharArray('a', 'z')[Math.floor(Math.random()*genCharArray('a', 'z').length)];
    
    console.log(computerChoice);

    document.querySelector('#gameScore').innerHTML = instruction + displayWins + displayLosses + 
    displayGuessesLeft + displayGuessesMade 
    });
    

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
        