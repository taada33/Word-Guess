
let dictionary = [ ]; //dictionary of words
let word; //word selected from dictionary to be guessed
let guessWord; //array of "_" replaced by correctly guessed letters



function selectWord(){
    //chooses a random word from words dictionary
    word = dictionary[math.floor(math.random * dictionary.length)];

    for(let i = 0; i< word.length; i++){
        guessWord[i] = "_"
    }

    // creates guessWord div with empty "_" in place of letters
}



function updateWord(){
    //updates the emptyword if correct characters have been chosen
    //updates list of characters used

}

function Timer(){
    //timer that counts down to the end of the game

    //creates timer <div>


    if(timer === 0 || word.contains(_) === false){
        //end game
        gameOver();
    }
}


function gameOver(){
    //runs once the timer has reached 0 or the word has been 
    //completely guessed

    //updates score values
    //returns to pregame screen
}

function scoreBoard(){
    //displays scoreboard
}

function init(){
    //runs once the game has been started

    //removes start game event listeners
    window.removeEventListener("click");
    window.removeEventListener("keydown");

 
    
    //hides the header

    //initializes the word to be guessed
    selectWord();
    //starts the timer
    Timer();

   //creates new even listener resposive to character press
   window.addEventListener("keydown",updateWord());
}

//waits for any input to start game
window.addEventListener("click",init());
window.addEventListener("keydown",init());