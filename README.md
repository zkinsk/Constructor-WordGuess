# Constructor-WordGuess

Create a hangman word guess game using node constructors to modularize the code.

I have used 4 modules to build this game: 
### main index
  - Housed the main game logic and brings all the other modules together
  
### letter module
  Contains the letter constructor
 The letter costructor has 2 methods:
- 1 To compare a player letter to the its own letter and switch a true or false boolean variable contained within
- 2  to log the letter it represents with either an underscore if the boolean is false and with the letter it represents if true

### word module
  contains the word constructor
  The Word object has 2 methods:
- 1 to create a new letter object and assign it a name.
- 2 to call the letter compare function or each letter in the word against the letter picked by the player

### wordbank module
  contains an array of words to be guess
  The word bank has only 1 method: 
  - To return a no repeated random word from the list of words
 



