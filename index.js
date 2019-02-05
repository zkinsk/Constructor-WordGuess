var inquirer = require('inquirer');
var Word = require("./word");
var WordBank = require("./wordBank");
var colors = require('colors/safe');
var hangGuy = require('./hangGuy');
var word = new Word;
var wordBank;

const totalGuesses = 7;
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
        console.log(colors.red("\nYou have already chosen that letter\n"));
        playRound(cWord);
      }else{
        guessedLetters += currentGuess;
        let bWord = word.guessLetter(currentGuess);
        if (bWord === cWord){
          guessLeft --
          console.log(colors.blue("\nSorry, you guess a wrong letter"))
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
    // console.log(wBw);
    word.newWord(wBw); //build new array with letter objects
    let x = word.guessLetter("");
    playRound(x);
  }
}//end of play Roundfn

var playRound = (bWord) => {
  if (bWord.includes("_")){
    // console.log(colors.green.underline(`You have ${guessLeft} guess${ess(guessLeft)} left.`))
    console.log(colors.cyan(hangGuy[guessLeft]));
    console.log(colors.magenta(bWord + "\n"));
    setTimeout(function(){
      guess(bWord)
    }, 500)
  }else{
    console.log(colors.yellow("\n\nGood Job!\n"));
    console.log(colors.yellow("You Guessed: " + bWord + "\n\n"));
    setTimeout(function(){
      startNewWord();
    }, 1000)
  }

}//end of playRound fn

var endGame = (result) => {
  if (result){
    console.log(colors.red.bold("You figured them all"))
  }else{
    console.log(colors.inverse("Sorry, you ran out of guesses.. GAME OVER"));
    console.log(colors.red(hangGuy[guessLeft]));
  }
} // end of end game

var ess = (x) => {
  if (x > 1){
    return "es"
  }else{return ""}
}

setTimeout(function(){
  wordBank = new WordBank;
  console.log(colors.red.bold("\n\nAre you ready to play a constructor based ocean creature word guess game? "))
  console.log(colors.red.bold(`Of Course you are!!! There are ${wordBank.wordArr.length} words in total to guess!\n`))
  startNewWord()
}, 500)
