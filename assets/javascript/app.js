$(document).ready(function() {

//Motor Vars  
quizStep = 0; 

//Game Vars
correctTally = "0";
incorrectTally = "0";

  var question = [
    {
      question: "What is the hex of black?",
      answers: {
        a: '3',
        b: '5',
        c: '115',
        d: '#000'
      },
      correctAnswer: 'd'
    },
    {
      question: "What is the hex of white?",
      answers: {
        a: '3',
        b: '5',
        c: '10',
        d: '#fff'
      },
      correctAnswer: 'd'
    },
    {
      question: "What is the hex of green?",
      answers: {
        a: '3',
        b: '#000099',
        c: '10',
        d: '#fff'
      },
      correctAnswer: 'b'
    },
    {
      question: "What is the hex of red?",
      answers: {
        a: '3',
        b: '5',
        c: '#990000',
        d: '9'
      },
      correctAnswer: 'c'
    }
  ];


function depopulateQuestions(){
  $("#timer").empty();
  $("#question").empty();
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#answer4").empty();

}

  
function populateQuestions(i){
  num = i+1;
  $("#title").html("Question "+num);
  $("#question").html(question[i].question);
  $("#answer1").html(question[i].answers.a);
  $("#answer2").html(question[i].answers.b);
  $("#answer3").html(question[i].answers.c);
  $("#answer4").html(question[i].answers.d);

  if(question[i].correctAnswer == "a"){
    $("#div1").attr('id', 'correct');
  }
  if(question[i].correctAnswer == "b"){
    $("#div2").attr('id', 'correct');
  }
  if(question[i].correctAnswer == "c"){
    $('#div3.').attr('id', 'correct');
  }
  if(question[i].correctAnswer == "d"){
    $("#div4").attr('id', 'correct');
  }

  // console.log(question[i].correctAnswer);
  // if(question[i].correctAnswer == "a"){
  //   $("#div1").attr('div1', 'correct');
  // }else{
  //   $("#div1").removeAttr('div1', 'correct');
  // }
  // if(question[i].correctAnswer == "b"){
  //   $("#div2").attr('div2', 'correct');
  // }else{
  //   $("#div2").removeAttr('div2', 'correct');
  // }
  // if(question[i].correctAnswer == "c"){
  //   $("#div3").attr('div3', 'correct');
  // }else{
  //   $("#div3").removeAttr('div3', 'correct');
  // }
  // if(question[i].correctAnswer == "d"){
  //   $("#div4").attr('div4', 'correct');
  // }else{
  //   $("#div4").removeAttr('div4', 'correct');
  // }
  
}

function spawnDivs(){
  $(".styledDiv").toggle();
  // $("#div1").toggle();
  // $("#div2").toggle();
  // $("#div3").toggle();
  // $("#div4").toggle();
}

function start(){
  $("#start").hide();
  spawnDivs();
  
  if(quizStep == 0){
    populateQuestions(0);
  }else{
    quizStep++;
  }
    populateQuestions(quizStep);
}




//   Game Routine

$("#start").on("click", function(){
  depopulateQuestions();
  start();
});




$("body").on("click", "#correct", function(event){
  console.log("Correct Click");
  correctTally++;
  depopulateQuestions();
  quizStep++;
  populateQuestions(quizStep);
});


$("body").on("click", "#incorrect", function(event){
  console.log("Correct Click");
  correctTally++;
  depopulateQuestions();
  quizStep++;
  populateQuestions(quizStep);
});












//TESTING FUNCTION
// CLICK ON COPYRIGHT MOVES GAME FORWARD

$("#next").on("click", function(){
  console.log("Does this work?");
  depopulateQuestions();
  quizStep++;
  populateQuestions(quizStep);
});


//////////////////////////////////////
  //testing
  // console.log(question[i].question);
  // console.log("Answer is "+question[i].correctAnswer);

//Advance the game with Question ++
// i.e

//List of commands

// populateQuestions( 0 );
// depopulateQuestions();







});