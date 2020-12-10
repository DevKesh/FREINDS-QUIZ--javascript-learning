var readlineSync = require("readline-sync");

const chalk = require("chalk");

var score = 0;

console.log(chalk.bold.red.bgBlack("THIS IS A F.R.I.E.N.D.S QUIZ\n"));
console.log(chalk.yellow.bold("|*****|-----|*****|----|*****|------|*****|"));
console.log(chalk.yellow.bold("|*****|-----|*****|----|*****|------|*****|"));
console.log(chalk.yellow.bold("|*****|-----|*****|----|*****|------|*****|"));
console.log(chalk.yellow.bold("|*****|-----|*****|----|*****|------|*****|\n"));

var userName = readlineSync.question(chalk.bold.black.bgGreen("Hi, please enter your name and the game will begin!\n\n"));

console.log(chalk.bold.green("THE GAME BEGINS NOW!"))

console.log(chalk.red(`How you doin, ${userName}!
Let's see how much of a F.R.I.E.N.D.S fan you are!!`));

console.log(chalk.black.bold("___________________________________________________"));
console.log(chalk.black.red("___________________________________________________"));
console.log(chalk.black.red("___________________________________________________"));
console.log(chalk.black.bold("___________________________________________________"));






//keep data of high score

var playerScore = [

{
  name: "Rakesh",
  score :5 ,
},

{
  name: "Sam",
  score : 6,
},
{

  name: "Kitty",
  score: 3,
}


];


//Play function

function play(question,answer){


var userAnswer = readlineSync.question

var userAnswer = readlineSync.question(question);



if(userAnswer.toUpperCase() === answer.toUpperCase()){

  console.log(" You are right! ");
  var newScore = score++;

  console.log(`You have scored ${score} points `);
 
   console.log(chalk.red("--------------"));
    console.log(chalk.red("--------------"));
     console.log(chalk.red("--------------"));
      console.log(chalk.red("--------------"));
}
else{

  console.log(chalk.red("Wrong!"));
  console.log("Dont lose hope, continue answering...")
  console.log("___________________");
  console.log("___________________");
}


}




// array of objects
var questions = [{

  question : "Who did Rachel get married to in Vegas? ",
  answer : "Ross"
},
  
  
{

  question : "What is the name of Phoebe's twin sister?",
  answer : "Ursula"
},
{

  question : "Which F.R.I.E.D.S character had seven sisters?",
  answer : "Joey"
},
{
    question : "What was Joey's profession on 'Days of our lives' ?",
  answer : "Neurosurgeon"

},
{
    question : "What was the name of Carol's wife? ",
  answer : "Susan"

},
{
   question : "Complete the line - Hi Emma its ______ are you still enjoying your nap ?",
  answer : "2020"

},
{
  question : "What is Chandler's middle name ?",
  answer : "Muriel"

}
];

//loop
for(i=0;i<questions.length;i++)
{
  var q = questions[i];
	play(q.question,q.answer);
}

console.log("\n");
 
console.log(chalk.bold.green(`Thank you for playing,${userName}!\nIf you beat their scores, send me a screenshot and i'll update your name and score in the leaderboard!`))

console.log(chalk.red.bold("HERE IS THE LEADERBOARD"))
console.log("*----*-----*-----*")

function showLeaderBoard(){

	for(i=0;i<playerScore.length;i++)
  
  {
    player = playerScore[i];
		console.log(chalk.bold.cyan(player.name + ' : ' + chalk.bold.red(player.score)));
	}
}

function highScorer(){

    if(playerScore[0].score >playerScore[1].score){

      console.log(chalk.bold(" The Highest scorer is Rakesh")); 
    }
      else if(playerScore[1].score>playerScore[2].score)
      {
          console.log(chalk.bold.white.bgBlack("The Highest scorer is Sam"));
      }
      else if(playerScore[3].score>playerScore[0].score)
      {
        console.log(chalk.bold("The Highest scorer is Kitty"));
      }
        
      }
  


showLeaderBoard(playerScore);
console.log("*----*-----*-----*")
console.log("\n")
highScorer(playerScore);//function call

