/*******************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 102, and 103 points, while Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team
2. Decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winner. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basket ball, and her team scored 97, 134, and 105 points. Like before, log the average winner in the console. HINT: you will need the && operator to take the decision.
*/

var johnScore = (89 + 102 + 103) / 3;
var markScore = (116 + 94 + 123) / 3;
var maryScore = (97 + 134 + 105) / 3;
console.log(johnScore);
console.log(markScore);
console.log(maryScore);

if (johnScore > markScore && johnScore > maryScore){
    console.log('John\'s team is the winner with ' + johnScore + ' points!');
} else if (markScore > johnScore && markScore > maryScore){
    console.log('Mark\'s team is the winner with ' + markScore + ' points!');
} else if (maryScore > johnScore && maryScore > markScore){
    console.log('Mary\'s team is the winner with ' + maryScore + ' points!');
} else {console.log('The contest is a draw!')}

//////////////////////////////

// second attempt

var johnScore = (89, 102, 103) / 3;
var mikeScore = (116, 94, 123) / 3;
var maryScore = (97, 134, 105) / 3;

console.log(johnScore);
console.log(mikeScore);
console.log(maryScore);

if (johnScore > mikeScore && johnScore > maryScore){
    console.log('John\'s team is the winner with ' + johnScore + ' points on average!'); 
} else if (mikeScore > johnScore && mikeScore > maryScore){
        console.log('Mike\'s team is the winner with ' + mikeScore + ' points on average!');
    } else if (maryScore > johnScore && maryScore > mikeScore){
            console.log('Mary\'s team is the winner with ' + maryScore + ' points on average!');
        } else {console.log('The tournament is a tie! Great job, all!')}

//////////////////////

// third attempt

var Team = function(name, scores) {
    this.name = name;
    this.scores = scores;
}

Team.prototype.scoreAverage = function() {
    console.log(this.scores +);
}

// is there a way to add all of the scores together?

var john = new Team('John\'s Team', (89, 102, 103));
var mark = new Team('Mark\'s Team', (116, 94, 123));

john.scoreAverage();
mark.scoreAverage();

john.scoreAverage();
mark.scoreAverage();

var winning = function() {
    if (john.scoreAverage > mark.scoreAverage) {
        console.log('John\'s Team is the winner with ' + john.scoreAverage + ' points!');
    } else if (john.scoreAverage < mark.scoreAverage) {
        console.log('Mark\'s Team is the winner with ' + mark.scoreAverage + ' points!');
    } else {
        console.log('The game was a tie! Great job to both teams!');
    }
}
