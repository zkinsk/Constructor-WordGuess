var Letter = require("./letter");

var Word = function(){
  this.newWordArr = [];
  this.newWord = function(word){
    for (x in word){
      var hiddenLetter = new Letter(word[x]);
      this.newWordArr.push(hiddenLetter);
    };
    let response = "";
    for (x in this.newWordArr){
      response += this.newWordArr[x].logLetter();
    }
    console.log(response)
  }//end of newWord

  this.guessLetter = function(gL){
    gL = gL.toUpperCase();
    let guessingWord = "";
    for (x in this.newWordArr){
      this.newWordArr[x].compare(gL)
      let response = this.newWordArr[x].logLetter();
      guessingWord += response;
    }
    console.log(guessingWord);
  }//end of guessLetter
}//end of word const

module.exports = Word