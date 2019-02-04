
// letter constructor
var Letter = function(name){
  this.name = name.toUpperCase();
  this.guessed = false;
  this.logLetter = function(){
    if (this.name === " "){
       return "  ";
    }else{
      if (!this.guessed){
        return "_ "
      }else {return this.name}
    }
  }//end of logLetter
  this.compare = function(guess){
    guess = guess.toUpperCase();
    if(guess === this.name){
      this.guessed = true;
    }
  }//end of compare
}//end of const

//made this prototype per instructions from assignment, but didn't end up needing it
Letter.prototype.toString = () => {
  if (this.name === " "){
    return "  ";
 }else{
    if (!this.guessed){
     return "_ "
    }else {return this.name}
 }
}

module.exports = Letter;