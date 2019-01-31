var inquirer = require('inquirer');
var letter = require("./letter");
var Word = require("./word");

var word = new Word;
word.newWord("Hello")





function guess(){
  inquirer.prompt([
    {
      type: "input",
      message: "Guess a Letter",
      name: "letter"
    }
    ]).then(answers => {
      let currentGuess = answers.letter;
      if (currentGuess === "stop"){return}
      word.guessLetter(currentGuess);
      setTimeout(function(){
        guess()
      }, 500)

    });
}

setTimeout(function(){
  guess()
}, 1000)
