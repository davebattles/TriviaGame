$(document).ready(function () {

  var clock;
  var timeLeft = 30;
  var countdownClock = $("#timer");
  
  var timerId = setInterval(countdown, 1000);
  
  function countdown() {
    if (timeLeft == 0) {
      if (quizStep === 10) {
        clearInterval(timerId);
        depopulateQuestions();
        end();
      }
      clearTimeout(timerId);
      generateIncorrect();
    
      
    } else {
      countdownClock.html(timeLeft + " seconds remaining");
      if(quizStep === 10){
        
      }else{
        timeLeft--;
      }
     
    }
  }

  //Motor Vars  
  var quizStep = 0;
  var audio= document.createElement('audio');
  audio.setAttribute('src', '../assets/sound/click.mp3');
  //Game Vars
  correctTally = "0";
  incorrectTally = "0";
  var question = [{
      question: "What food is 99% of a Giant Panda's diet?",
      answers: {
        a: 'Corn',
        b: 'Grass',
        c: 'Bamboo',
        d: 'Meat'
      },
      correctAnswer: 'c'
    },
    {
      question: "Bats belong to what class of animal? ",
      answers: {
        a: 'Mammalia',
        b: 'Cirripedia',
        c: 'Sauropsida',
        d: 'Neornithes'
      },
      correctAnswer: 'a'
    },
    {
      question: "What is the duration of an African elephant's pregnancy?",
      answers: {
        a: '22 months',
        b: '11 months',
        c: '9 months',
        d: '4 months'
      },
      correctAnswer: 'a'
    },
    {
      question: "What is the fastest land animal in the world?",
      answers: {
        a: 'Leopard',
        b: 'Deer',
        c: 'Gazelle',
        d: 'Cheetah'
      },
      correctAnswer: 'd'
    },
    {
      question: "What is the fastest sea animal on Earth?",
      answers: {
        a: 'Shark',
        b: 'Sailfish',
        c: 'Dolphin',
        d: 'None of the above'
      },
      correctAnswer: 'b'
    },
    {
      question: "What is the biggest animal on earth?",
      answers: {
        a: 'Colossal Squid',
        b: 'African Elephant',
        c: 'Blue Whale',
        d: 'Giraffe'
      },
      correctAnswer: 'c'
    },
    {
      question: "Which of the following bears is the largest?",
      answers: {
        a: 'Polar Bear',
        b: 'Brown Bear',
        c: 'Black Bear',
        d: 'Panda Bear'
      },
      correctAnswer: 'a'
    },
    {
      question: "What is the largest feline in the world?",
      answers: {
        a: 'Leopard',
        b: 'Cougar',
        c: 'Tiger',
        d: 'Lion'
      },
      correctAnswer: 'c'
    },
    {
      question: "Groups of lions are known as what?",
      answers: {
        a: 'Troops',
        b: 'Packs',
        c: 'Bands',
        d: 'Prides'
      },
      correctAnswer: 'd'
    },
    {
      question: "How many stomachs does a cow have?",
      answers: {
        a: '1',
        b: '2',
        c: '3',
        d: '4'
      },
      correctAnswer: 'd'
    }
  ];
  function depopulateQuestions() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    $("#message").empty();
    $(".one").removeAttr('id', 'correct');
    $(".two").removeAttr('id', 'correct');
    $(".three").removeAttr('id', 'correct');
    $(".four").removeAttr('id', 'correct');
  }
  function populateQuestions(i) {
    num = i + 1;
    $("#timer").html(clock);
    
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
    audio.play();
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
    $("#timer").toggle();
    clearInterval(timerId);
    spawnDivs();
    score = correctTally * 10;
    $("#title").html("Your Score:"+"<p>"+"<h2>"+score+"<h2>");
    $("#message").html("You got " + correctTally + " correct and " + incorrectTally + " wrong."+"<p>"+"Click to Restart");
    
  }
function generateIncorrect(){
  timeLeft = 30;
  audio.play();
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
}
function generateCorrect(){
  timeLeft = 30;
  audio.play();
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
}

function restart(){
  quizStep = 0;
  audio.play();
  timeLeft = 30;
  $("#timer").toggle();
  depopulateQuestions();
  populateQuestions(quizStep);
  start();
  $("#message").empty();
}
  //   Game Routine
  clearInterval(timerId);
  $("#start").on("click", function () {
    depopulateQuestions();
    start();
    setInterval(countdown, 1000);
  });
  $("body").on("click", "#correct", function (event) {
    generateCorrect();
  });
  $("body").on("click", "#incorrect", function (event) {
    generateIncorrect();    
  });

  $("body").on("click", "#message", function (event) {
    restart();    
  });

  //TESTING FUNCTION
  // CLICK ON COPYRIGHT MOVES GAME FORWARD
  $("#next").on("click", function () {
    console.log("Does this work?");
    depopulateQuestions();
    quizStep++;
    populateQuestions(quizStep);
  });
});

