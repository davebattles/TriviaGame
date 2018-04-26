$(document).ready(function () {

  //Motor Vars  
  quizStep = 0;

  //Game Vars
  correctTally = "0";
  incorrectTally = "0";

  var question = [{
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
      question: "What is the hex of hippo?",
      answers: {
        a: '3',
        b: 'whatt',
        c: '115',
        d: '#000'
      },
      correctAnswer: 'b'
    },
    {
      question: "What is the hex of something?",
      answers: {
        a: '3',
        b: 'whatt',
        c: '115',
        d: 'something'
      },
      correctAnswer: 'd'
    },
    {
      question: "Pick b",
      answers: {
        a: '3',
        b: 'click this!',
        c: '115',
        d: 'something'
      },
      correctAnswer: 'b'
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
      question: "pick a",
      answers: {
        a: '3',
        b: '#000099',
        c: '10',
        d: '#fff'
      },
      correctAnswer: 'a'
    },
    {
      question: "pick d",
      answers: {
        a: '3',
        b: '#000099',
        c: '10',
        d: '#fff'
      },
      correctAnswer: 'd'
    },
    {
      question: "pick b",
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


  function depopulateQuestions() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    $(".one").removeAttr('id', 'correct');
    $(".two").removeAttr('id', 'correct');
    $(".three").removeAttr('id', 'correct');
    $(".four").removeAttr('id', 'correct');




    // $("#div1").removeAttr({
    //   'id' : 'correct','incorrect'
    //   });





    // $("#div1").removeAttr('id','correct');
    // $("#div1").removeAttr('id','incorrect');
    // $("#div2").removeAttr('id','correct');
    // $("#div2").removeAttr('id','incorrect');
    // $("#div3").removeAttr('id','correct');
    // $("#div3").removeAttr('id','incorrect');
    // $("#div4").removeAttr('id','correct');
    // $("#div4").removeAttr('id','incorrect');
  }




  function populateQuestions(i) {

    num = i + 1;
    $("#title").html("Question " + num);
    $("#question").html(question[i].question);
    $("#answer1").html(question[i].answers.a);
    $("#answer2").html(question[i].answers.b);
    $("#answer3").html(question[i].answers.c);
    $("#answer4").html(question[i].answers.d);

    if (question[i].correctAnswer == "a") {
      $(".one").attr('id', 'correct');
    } else {
      $(".one").attr('id', 'incorrect');
    }
    if (question[i].correctAnswer == "b") {
      $(".two").attr('id', 'correct');
    } else {
      $(".two").attr('id', 'incorrect');
    }
    if (question[i].correctAnswer == "c") {
      $(".three").attr('id', 'correct');
    } else {
      $(".three").attr('id', 'incorrect');
    }
    if (question[i].correctAnswer == "d") {
      $(".four").attr('id', 'correct');
    } else {
      $(".four").attr('id', 'incorrect');
    }

  }

  function spawnDivs() {
    $(".styledDiv").toggle();
    // $("#div1").toggle();
    // $("#div2").toggle();
    // $("#div3").toggle();
    // $("#div4").toggle();
  }

  function start() {
    $("#start").hide();
    spawnDivs();

    if (quizStep == 0) {
      populateQuestions(0);
    } else {
      quizStep++;
    }
    populateQuestions(quizStep);
  }


  function end() {

    //TODO: WRITE OUT END STATS
    spawnDivs();
    score = correctTally * 10;
    $("#title").html("Your Score:"+"<p>"+"<h2>"+score+"<h2>");
    $("#message").html("You got " + correctTally + " correct and " + incorrectTally + " wrong.");

    //TODO: WRITE A RESTART BUTTON


  }



  //   Game Routine

  $("#start").on("click", function () {
    depopulateQuestions();

    start();
  });




  $("body").on("click", "#correct", function (event) {
    console.log("Correct Click");
    correctTally++;
    console.log(correctTally);
    depopulateQuestions();
    quizStep++;
    if (quizStep === 10) {
      depopulateQuestions();
      end();
    }else{
      populateQuestions(quizStep);
    }
   


  });


  $("body").on("click", "#incorrect", function (event) {
    console.log("Incorrect Click");
    incorrectTally++;
    console.log(incorrectTally);
    depopulateQuestions();
    quizStep++;
    if (quizStep === 10) {
      depopulateQuestions();
      end();
    }else{
      populateQuestions(quizStep);
    }
    
  });











  //TESTING FUNCTION
  // CLICK ON COPYRIGHT MOVES GAME FORWARD

  $("#next").on("click", function () {
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