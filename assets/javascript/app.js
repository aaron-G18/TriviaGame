// Questions:

/// An array of questions, and each question is an object with same formats. (colapsed)
var questionsMaster = [{
    question: "What is the surname for bastards born in Dorne?",
    answers: ["Flower", "Stone", "Snow", "Sand"],
    correctAnswer: "Sand",
    correctImage: "assets/images/Ellaria-Sand.jpg",
    correctText: "Sand. (e.g. Ellaria Sand)"
  },
  {
    question: "What is the surname for bastards born in the North?",
    answers: ["Stone", "Sand", "Snow", "Flower"],
    correctAnswer: "Snow",
    correctImage: "assets/images/Jon-Snow.jpg",
    correctText: "Snow. (e.g. Jon Snow)"
  },
  {
    question: "What is Gregor Clegane's nickname?",
    answers: [
      "The Mountain",
      "The Hound",
      "The Onion Knight",
      "The King in the North"
    ],
    correctAnswer: "The Mountain",
    correctImage: "assets/images/the-mountain.jpg",
    correctText: "The Mountain"
  },
  {
    question: "What city is the citadel located in?",
    answers: ["King's Landing", "Oldtown", "Braavos", "Meereen"],
    correctAnswer: "Oldtown",
    correctImage: "assets/images/Old-Town.jpg",
    correctText: "Old Town"
  },
  {
    question: "What city are The Faceless Men based in?",
    answers: ["Volantis", "King's Landing", "Braavos", "Lannisport"],
    correctAnswer: "Braavos",
    correctImage: "assets/images/Braavos.png",
    correctText: "Braavos"
  },
  {
    question: "What item did Samwell Tarly steal from House Tarly before leaving for the Citadel?",
    answers: ["Sheild", "Sword", "Armor", "Map"],
    correctAnswer: "Sword",
    correctImage: "assets/images/heartsbane.jpg",
    correctText: "Sword. (Heartsbane)"
  },
  {
    question: "What was the name of Jon Snow's direwolf?",
    answers: ["Fang", "Ice", "Whisp", "Ghost"],
    correctAnswer: "Ghost",
    correctImage: "assets/images/Ghost.jpg",
    correctText: "Ghost"
  },
  {
    question: "What was the name of the Faceless Man that trains Arya Stark?",
    answers: ["Jaqen H'ghar", "Syrio Forel", "Sir Davos", "Grey Worm"],
    correctAnswer: "Jaqen H'ghar",
    correctImage: "assets/images/Jaqen.jpg",
    correctText: "Jaqen H'ghar"
  },
  {
    question: "How many of Davos Seaworth's fingers did Stannis Baratheon cut the tops off of?",
    answers: ["One", "Two", "Three", "Four"],
    correctAnswer: "Four",
    correctImage: "assets/images/Davos-fingers.png",
    correctText: "Four"
  },
  {
    question: "What is one of Davos Seaworth's nicknames?",
    answers: [
      "Theif of Oldtown",
      "Davos the Great",
      "The Onion Knight",
      "Sir Greybeard"
    ],
    correctAnswer: "The Onion Knight",
    correctImage: "assets/images/Onion-knight.jpg",
    correctText: "The Onion Knight"
  },
  {
    question: "What is the name of Arya Stark's direwolf?",
    answers: ["Grey Tooth", "White Face", "Guinevere", "Nymeria"],
    correctAnswer: "Nymeria",
    correctImage: "assets/images/Nymeria.png",
    correctText: "Nymeria"
  },
  {
    question: "What is the name of the disease that scarred half of Shireen Baratheon's face?",
    answers: ["Stone Face", "Greyscale", "Stonescale", "Grey Face"],
    correctAnswer: "Greyscale",
    correctImage: "assets/images/greyscale.jpg",
    correctText: "Greyscale"
  },
  {
    question: "What is Prince Oberyn Martell's nickname?",
    answers: ["The Viper", "The Red Serpent", "The Red Viper", "The Viper"],
    correctAnswer: "The Red Viper",
    correctImage: "assets/images/oberyn.jpeg",
    correctText: "The Red Viper"
  },
  {
    question: "What character has the nickname Blackfish?",
    answers: [
      "Brynden Tully",
      "Robert Baratheon",
      "Sandor Clegane",
      "Petyr Baelish"
    ],
    correctAnswer: "Brynden Tully",
    correctImage: "assets/images/blackfish.jpg",
    correctText: "Brynden Tully"
  },
  {
    question: "What character has the nickname Littlefinger?",
    answers: [
      "Brynden Tully",
      "Robert Baratheon",
      "Sandor Clegane",
      "Petyr Baelish"
    ],
    correctAnswer: "Petyr Baelish",
    correctImage: "assets/images/baelish.jpeg",
    correctText: "Petyr Baelish"
  },
  {
    question: "What character has the nickname Kingslayer?",
    answers: [
      "Brynden Tully",
      "Robert Baratheon",
      "Jaime Lannister",
      "Petyr Baelish"
    ],
    correctAnswer: "Jaime Lannister",
    correctImage: "assets/images/kingslayer.jpeg",
    correctText: "Jaime Lannister"
  },
  {
    question: "What is the name of House Lannister's castle/stronghold?",
    answers: ["Highgarden", "Casterly Rock", "Winterfell", "Harrenhal"],
    correctAnswer: "Casterly Rock",
    correctImage: "assets/images/casterly.png",
    correctText: "Casterly Rock"
  },
  {
    question: "What is the name of House Tully's castle/stronghold?",
    answers: ["Highgarden", "Casterly Rock", "Riverrun", "The Red Keep"],
    correctAnswer: "Riverrun",
    correctImage: "assets/images/riverrun.jpg",
    correctText: "Riverrun"
  },
  {
    question: "What character had the nickname of King Beyond the Wall?",
    answers: ["Robert Baratheon", "Jeor Mormont", "Jon Snow", "Mance Rayder"],
    correctAnswer: "Mance Rayder",
    correctImage: "assets/images/rayder.jpg",
    correctText: "Mance Rayder"
  },
  {
    question: "What is the name of the man who stole Daenerys Targaryen's dragons in Qarth?",
    answers: ["Pyat Pree", "Daario Naharis", "Jojen Reed", "Alliser Thorne"],
    correctAnswer: "Pyat Pree",
    correctImage: "assets/images/pyat.jpeg",
    correctText: "Pyat Pree"
  },
  {
    question: "How many times was Beric Dondarrion brought back to life?",
    answers: ["Four", "Five", "Six", "Seven"],
    correctAnswer: "Six",
    correctImage: "assets/images/beric.jpg",
    correctText: "Six"
  },
  {
    question: "Who helped Sansa escape King's Landing after King Joffrey's death?",
    answers: ["Theon Greyjoy", "Lord Varys", "Tyrion Lannister", "Dontos Hollard"],
    correctAnswer: "Dontos Hollard",
    correctImage: "assets/images/dontos.jpg",
    correctText: "Dontos Hollard"
  },
  {
    question: "What does the high valyrian saying of the Faceless Men, 'valar morghulis,' mean?",
    answers: ["All men must serve", "All men will die", "All men must die", "All that serve must die"],
    correctAnswer: "All men must die",
    correctImage: "assets/images/valar.jpg",
    correctText: "All men must die"
  },
  {
    question: "What is the name of the special metal that can kill white walkers?",
    answers: ["Wildling steel", "Volantis steel", "Dragon steel", "Valyrian steel"],
    correctAnswer: "Valyrian steel",
    correctImage: "assets/images/longclaw.jpg",
    correctText: "Valyrian steel"
  },
  {
    question: "What is the name of the sword that Lord Commander Mormont gives to Jon Snow?",
    answers: ["Longclaw", "Longfang", "Wolf's Bane", "White Fang"],
    correctAnswer: "Longclaw",
    correctImage: "assets/images/longclaw.jpg",
    correctText: "Longclaw"
  },
  {
    question: "How many times was Sansa Stark married?",
    answers: ["One", "Two", "Three", "Four"],
    correctAnswer: "Two",
    correctImage: "assets/images/sansa.png",
    correctText: "Two"
  },
  {
    question: "What is Jon Snow's tru bloodline?",
    answers: ["Stark", "Baratheon", "Lannister", "Targaryen"],
    correctAnswer: "Targaryen",
    correctImage: "assets/images/jon.jpeg",
    correctText: "Targaryen"
  }
];

var playAgainButtonHTML =
  "<div class='replay-button'><button id='playagain'>Play Again</button></div>";
var questionsPlaying;
var currentCorrAnswer;
var currentCorrImage;
var currentCorrText;
var gotItRight = "Correct!";
var gotItWrong = "Incorrect!";
var outOfTime = "Times up!";
var questionsLeftMaster = 20;
var questionsLeft;
var correcAnswerCount = 0;
var incorrectAnswerCount = 0;
var masterTimerAmount = 20;
var timerAmount;
var masterAnswerTimerAmount = 3;
var answerTimerAmount;
var interval;
var audio = new Audio(
  "https://www.televisiontunes.com/uploads/audio/Game%20of%20Thrones.mp3"
);

//////  Functions   //////

// Function to run countdown timer for question and possible answers
function runTimer() {
  timerAmount = masterTimerAmount;
  $(".timer").html(timerAmount);
  clearInterval(interval);
  interval = setInterval(decrement, 1000);
}

// Function for countdown timer of displayed question and possible answers.
function decrement() {
  timerAmount--;
  $(".timer").html(timerAmount);
  if (timerAmount === 0) {
    stopTimer();
    $(".timer").empty();
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(outOfTime);
    runDisplayTimer();
  }
}

// Function to run countdown timer for displayed correct answer and message.
function runDisplayTimer() {
  answerTimerAmount = masterAnswerTimerAmount;
  clearInterval(interval);
  interval = setInterval(decrementDisplay, 1000);
}

// Function to for countdown of displayed correct answer and message.
function decrementDisplay() {
  answerTimerAmount--;
  if (answerTimerAmount === 0 && questionsLeft > 0) {
    stopTimer();
    console.log("display timer up!");
    $(".timer").html(answerTimerAmount);
    runTimer();
    clearDisplay();
    question(0);
    questionsPlaying.splice(0, 1);
    questionsLeft--;
    $(".qa-container").css({
      "box-shadow": "unset",
      width: "50%"
    });
    console.log("questions left " + questionsLeft);
  } else if (answerTimerAmount === 0 && questionsLeft === 0) {
    clearDisplay();
    $(".timer").empty();
    clearInterval(interval);
    $(".qa-container").css({
      "box-shadow": "unset",
      width: "50%"
    });
    console.log("out of questions");
    console.log("correct: " + correcAnswerCount);
    console.log("incorrect: " + incorrectAnswerCount);
    $(".question").html(
      "<p>Correct answers: " +
      correcAnswerCount +
      "</p>" +
      "<p>Incorrect answers: " +
      incorrectAnswerCount +
      "</p>"
    );
    $(".answers").html(playAgainButtonHTML);
  }
}

// Function to stop the timers
function stopTimer() {
  clearInterval(interval);
}

// Function to play GOT theme song when you click play.
function playAudio() {
  audio.loop = true;
  audio.play();
}

// function to "shuffle" the array of questions.
function makeNewArray() {
  questionsLeft = questionsLeftMaster;
  questionsPlaying = Array.from(questionsMaster);
  questionsPlaying.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  questionsPlaying = questionsPlaying;
}

// function to display answers for the current question.
function displayAnswers(item, index) {
  $(".answers").append("<div class='ans " + index + "'>" + item + "</div>");
}

// function to pick a question from the array of questions.
function question(x) {
  $(".question").html(questionsPlaying[x].question);
  $(".answers").empty();
  questionsPlaying[x].answers.forEach(displayAnswers);
  currentCorrAnswer = questionsPlaying[x].correctAnswer;
  currentCorrImage = questionsPlaying[x].correctImage;
  currentCorrText = questionsPlaying[x].correctText;
}

// function to set the logo.
function setLogo() {
  $("#logo").attr("src", "assets/images/GOT_transparent_logo_small.png");
}

// function to diplay correct image.
function displayCorrImage() {
  $(".question").empty();
  $(".answers").empty();
  // $(".qa-container").css("background-image", "url(" + currentCorrImage + ")");
  $(".qa-container").css({
    "background-image": "url(" + currentCorrImage + ")",
    "box-shadow": "8px 8px 4px black",
    width: "300px"
  });
}

// Function to clear the display in the qa-container.
function clearDisplay() {
  $(".question").empty();
  $(".answers").empty();
  $(".qa-container").css("background-image", "");
}

// function to display "Correct" in place of timer.
function displayCorrText() {
  $(".answers").empty();
  $(".answers").html(currentCorrText);
}

/////// the game "nuts and bolts."  ////////////

setLogo();

// On click "play" button to start game.
$(".button").on("click", "#start", function () {
  makeNewArray();
  $("#logo").css("width", "30%");
  $(".GOT-logo").css("height", "200px");
  $(".qa-container").css("visibility", "unset");
  $("#logo").attr("src", "");
  $("#logo").attr("src", "assets/images/GOT_transparent_logo_small.png");
  $(".button").css("display", "none");
  $(".timer").html(timerAmount);
  runTimer();
  playAudio();
  question(0);
  questionsPlaying.splice(0, 1);
  questionsLeft--;
  console.log("questions left " + questionsLeft);
});

// On click for 1st possible answer.
$(".answers").on("click", ".0", function () {
  var clickedHTML = $(this).html();
  console.log(clickedHTML);
  if (clickedHTML === currentCorrAnswer) {
    correcAnswerCount++;
    console.log("answer is correct!");
    stopTimer();
    $(".timer").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItRight);
    runDisplayTimer();
  } else {
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    stopTimer();
    $(".timer").empty();
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItWrong);
    runDisplayTimer();
  }
});

// On click for 2nd possible answer.
$(".answers").on("click", ".1", function () {
  var clickedHTML = $(this).html();
  console.log(clickedHTML);
  if (clickedHTML === currentCorrAnswer) {
    correcAnswerCount++;
    console.log("answer is correct!");
    stopTimer();
    $(".timer").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItRight);
    runDisplayTimer();
  } else {
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    stopTimer();
    $(".timer").empty();
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItWrong);
    runDisplayTimer();
  }
});

// On click for 3rd possible answer.
$(".answers").on("click", ".2", function () {
  var clickedHTML = $(this).html();
  console.log(clickedHTML);
  if (clickedHTML === currentCorrAnswer) {
    correcAnswerCount++;
    console.log("answer is correct!");
    stopTimer();
    $(".timer").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItRight);
    runDisplayTimer();
  } else {
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    stopTimer();
    $(".timer").empty();
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItWrong);
    runDisplayTimer();
  }
});

// On click for 4th possible answer.
$(".answers").on("click", ".3", function () {
  var clickedHTML = $(this).html();
  console.log(clickedHTML);
  if (clickedHTML === currentCorrAnswer) {
    correcAnswerCount++;
    console.log("answer is correct!");
    stopTimer();
    $(".timer").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItRight);
    runDisplayTimer();
  } else {
    incorrectAnswerCount++;
    console.log("That is WRONG!");
    stopTimer();
    $(".timer").empty();
    $(".question").empty();
    $(".answers").empty();
    displayCorrImage();
    displayCorrText();
    $(".timer").html(gotItWrong);
    runDisplayTimer();
  }
});

// On click for Play Again button after end of game.
$(".answers").on("click", "#playagain", function () {
  makeNewArray();
  $(".replay-button").css("display", "none");
  $(".timer").html(timerAmount);
  runTimer();
  playAudio();
  question(0);
  questionsPlaying.splice(0, 1);
  questionsLeft--;
});