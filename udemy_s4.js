// CONCEPTS
// how to generate a random number
// how to manipulate the DOM
// how to read from the DOM
// how to change CSS styles

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice; // a clean way to declare variables and then define them below

scores =[0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) +1; // using the math function to generate a random number between 1 and six
console.log(dice);








