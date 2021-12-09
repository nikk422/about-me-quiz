var readlinesync=require("readline-sync");
var score=0;
var username=readlinesync.question("whats your name? ");
console.log("welcome " + username + " to do know nikhil? ");

function play (question,answer){
  var userans=readlinesync.question(question);
  if (userans.toUpperCase()===answer.toUpperCase()){
    console.log("your right");
    score=score+1
  }else{
    console.log("your wrong")
  }

  console.log("current score",score);
  console.log("_____")
}

var highScore=[{
  'Bipin':3,
},
{
  'Manoj':3
}];

var questions=[{
  question:"Where do i live? ",
  answer:"Indore"
},{
  question:"Where do i work? ",
  answer:"Google"
},{
  question:"Who is my fav. hero?",
  answer: "Govinda"
},{
  question: "Who is my fav. singer?",
  answer : "Sonu nigam"
},{
  question: "How much member in my family",
  answer: "6"
}];
for (var i=0;i<questions.length;i++){
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}
console.log("yaa, you scored",score);
console.log("highScore" , highScore[0],highScore[1])
