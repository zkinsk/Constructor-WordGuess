var inquirer = require('inquirer');
var Word = require("./word");
var WordBank = require("./wordBank");
var word = new Word;
var wordBank = new WordBank;

const totalGuesses = 6;
var guessLeft;
var guessedLetters = "";

function guess(cWord){
  inquirer.prompt([
    {
      type: "input",
      message: "Guess a Letter",
      name: "letter"
    }
    ]).then(answers => {
      let currentGuess = answers.letter.toUpperCase();
      if (currentGuess === "STOP"){return}
      if (guessedLetters.includes(currentGuess)){
        console.log("You have already chosen that letter");
        playRound(cWord);
      }else{
        guessedLetters += currentGuess;
        let bWord = word.guessLetter(currentGuess);
        if (bWord === cWord){
          guessLeft --
        }
        if (guessLeft === 0){
          endGame(false)
        }else{
          playRound(bWord);
        }
      }
    });
}//end of guess fn

var startNewWord = () => {
  let wBw = wordBank.chooseWord() //choose new word Bank word
  if (wBw === false){
    endGame(true)
  }else{
    guessLeft = totalGuesses;
    guessedLetters = "";
    console.log(wBw);
    word.newWord(wBw); //build new array with letter objects
    let x = word.guessLetter("");
    playRound(x);
  }
}//end of play Roundfn

var playRound = (bWord) => {
  if (bWord.includes("_")){
    console.log(bWord);
    console.log(`You have ${guessLeft} guess${ess(guessLeft)} left.`)
    setTimeout(function(){
      guess(bWord)
    }, 500)
  }else{
    console.log("Good Job!");
    console.log("You Guessed: " + bWord);
    setTimeout(function(){
      startNewWord();
    }, 500)
  }

}//end of playRound fn

var endGame = (result) => {
  if (result){
    console.log("You figured them all")
  }else{console.log("Sorry, you ran out of guesses..")}
} // end of end game

var ess = (x) => {
  if (x > 1){
    return "es"
  }else{return ""}
}

startNewWord();
