var fs = require('fs');
const util = require('util');

var wordArr = [];

  fs.readFile("wordlist.txt", "utf8", function(error, data) {
    if (error) { return console.log(error); }
    wordArr = data.trim().split("\n");
  });

// var wordFile = function(){
//   let x = fs.readFileSync("wordlist.txt", "utf8")
//     x = x.trim()
//     dataArr = x.split("\n");
//     return dataArr
// }


//I have tried to work through different ways to populate the array of words to guess.  
//I wanted to use a text file because it seemed like the most obvious way the average person would create a list, instead of writing writing code.
//the async nature of fs.read caused some issues, and I have two solutions.  One is to delay the constructor call of word bank and the other is to force 
//fs to be a syncrous function. Both methods seem a bit of a quick and dirty solution
var WordBank = function(){
  this.wordArr = wordArr;
  // this.wordArr = wordFile();
  // this.wordArr = [
  // "Barracuda", 
  // "Flying Fish",
  // "Shark",
  // "Whale",
  // "Barramundi",
  // "Flounder",
  // "Sword Fish", 
  // ];
  this.chosenArr = [];
  this.chooseWord = function(){
    let newWord;
    if (this.wordArr.length > this.chosenArr.length){
      let chosen = false
      while(chosen === false){
        let index = (Math.floor(Math.random() * this.wordArr.length))
        newWord = this.wordArr[index];
        if ( !this.chosenArr.includes(newWord)) {
          chosen = true;
          this.chosenArr.push(newWord);
          return newWord
        }
      }
    }else{
      return false;
    }
  }//end of newWord fn
}//end of word bank fn

module.exports = WordBank