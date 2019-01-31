
// letter constructor
var Letter = function(name){
  this.name = name.toUpperCase();
  this.guessed = false;
  this.logLetter = function(){
    if (!this.guessed){
      return "_ "
    }else {return this.name + " "}
  }//end of logLetter

  this.compare = function(guess){
    guess = guess.toUpperCase();
    if(guess == this.name){
      this.guessed = true;
      // console.log("true");
    }
    // else{console.log("false")}
  }//ende of compare
}//end of const

module.exports = Letter;