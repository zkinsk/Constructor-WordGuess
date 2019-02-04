var fs = require('fs');

var wordFile = function(){
  fs.readFile("wordlist.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    dataArr = data.split("\n");
    // console.log(dataArr);
    // return dataArr
  });
}

// console.log(wordFile());

var WordBank = function(){
  this.wordArr = [
  "Barracuda", 
  "Flying Fish",
  "Shark",
  "Whale",
  "Barramundi",
  "Flounder",
  "Sword Fish", 
  ];
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