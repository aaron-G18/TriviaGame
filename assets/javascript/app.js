// Questions:

/// make an array of questions, and each question is an object with same formats.
/// Should make it easier to work with them.

var questionsMaster = [{
        question: "What is the surname for bastards born in Dorne?",
        answers: ["Flower", "Stone", "Snow", "Sand"],
        correctAnswer: "Sand",
        correctImage: "assets/images/Ellaria-Sand.jpg",
        correctText: "Sand. (e.g. Ellaria Sand)",
    },
    {
        question: "What is the surname for bastards born in the North?",
        answers: ["Stone", "Sand", "Snow", "Flower"],
        correctAnswer: "Snow",
        correctImage: "assets/images/Jon-Snow.jpg",
        correctText: "Snow. (e.g. Jon Snow)",
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
        correctText: "The Mountain",
    },
    {
        question: "What city is the citadel located in?",
        answers: ["King's Landing", "Oldtown", "Braavos", "Meereen"],
        correctAnswer: "Oldtown",
        correctImage: "assets/images/Old-Town.jpg",
        correctText: "Old Town",
    },
    {
        question: "What city are The Faceless Men based in?",
        answers: ["Volantis", "King's Landing", "Braavos", "Lannisport"],
        correctAnswer: "Braavos",
        correctImage: "assets/images/Braavos.png",
        correctText: "Braavos",
    }
];

var playAgainButtonHTML = "<div class='replay-button'><button id='playagain'>Play Again</button></div>";

// <div class="replay-button"><button id="playagain">Play Trivia Game</button></div>

var questionsPlaying;
var currentCorrAnswer;
var currentCorrImage;
var currentCorrText;
var gotItRight = "Correct!";
var gotItWrong = "Incorrect!";
var outOfTime = "Times up!";
var questionsLeftMaster = 5;
var questionsLeft;
var correcAnswerCount = 0;
var incorrectAnswerCount = 0;



var masterTimerAmount = 20;
var timerAmount;
var masterAnswerTimerAmount = 4;
var answerTimerAmount;
var interval;



var audio = new Audio(
    "https://www.televisiontunes.com/uploads/audio/Game%20of%20Thrones.mp3"
);

//////  Functions   //////


function runTimer() {
    timerAmount = masterTimerAmount;
    $(".timer").html(timerAmount);
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
};

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
};

function runDisplayTimer() {
    answerTimerAmount = masterAnswerTimerAmount;
    clearInterval(interval);
    interval = setInterval(decrementDisplay, 1000);
};

function decrementDisplay() {
    answerTimerAmount--;
    if (answerTimerAmount === 0 && questionsLeft > 0) {
        stopTimer();
        console.log("display timer up!")
        $(".timer").html(answerTimerAmount);
        runTimer();
        clearDisplay();
        question(0);
        questionsPlaying.splice(0, 1);
        questionsLeft--;
        $(".qa-container").css({
            "box-shadow": "unset",
            "width": "50%"
        });
        console.log("questions left " + questionsLeft)
    } else if (answerTimerAmount === 0 && questionsLeft === 0) {
        clearDisplay();
        $(".timer").empty();
        clearInterval(interval);
        $(".qa-container").css({
            "box-shadow": "unset",
            "width": "50%"
        });
        console.log("out of questions");
        console.log("correct: " + correcAnswerCount);
        console.log("incorrect: " + incorrectAnswerCount);
        $(".question").html("<p>Correct answers: " + correcAnswerCount + "</p>" + "<p>Incorrect answers: " + incorrectAnswerCount + "</p>");
        $(".answers").html(playAgainButtonHTML);
    };
};


function stopTimer() {
    clearInterval(interval);
};










// Function to play GOT theme song when you click play.
function playAudio() {
    audio.loop = true;
    audio.play();
};

// function to "shuffle" the array of questions.
function makeNewArray() {
    questionsLeft = questionsLeftMaster;
    questionsPlaying = Array.from(questionsMaster);
    questionsPlaying.sort(function (a, b) {
        return 0.5 - Math.random();
    });
    questionsPlaying = questionsPlaying;
};

// function to display answers for the current question.
function displayAnswers(item, index) {
    $(".answers").append("<div class='ans " + index + "'>" + item + "</div>");
};

// function to pick a question from the array of questions.
function question(x) {
    $(".question").html(questionsPlaying[x].question);
    $(".answers").empty();
    questionsPlaying[x].answers.forEach(displayAnswers);
    currentCorrAnswer = questionsPlaying[x].correctAnswer;
    currentCorrImage = questionsPlaying[x].correctImage;
    currentCorrText = questionsPlaying[x].correctText;
};

// function to set the logo.
function setLogo() {
    $("#logo").attr("src", "assets/images/GOT_transparent_logo_small.png");
};

//function to diplay correct image.
function displayCorrImage() {
    $(".question").empty();
    $(".answers").empty();
    // $(".qa-container").css("background-image", "url(" + currentCorrImage + ")");
    $(".qa-container").css({
        "background-image": "url(" + currentCorrImage + ")",
        "box-shadow": "8px 8px 4px black",
        "width": "300px"
    });
};

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

function playAgain() {
    makeNewArray();
    // questionsLeft = questionsLeftMaster;
    // questionsPlaying = [];
    // questionsPlaying = questionsMaster;
    // makeNewArray();
}


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
    console.log("questions left " + questionsLeft)
});

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

$(".answers").on("click", "#playagain", function () {

    makeNewArray();
    // $("#logo").css("width", "30%");
    // $(".GOT-logo").css("height", "200px");
    // $(".qa-container").css("visibility", "unset");
    // $("#logo").attr("src", "");
    // $("#logo").attr("src", "assets/images/GOT_transparent_logo_small.png");
    $(".replay-button").css("display", "none");
    $(".timer").html(timerAmount);
    runTimer();
    playAudio();
    question(0);
    questionsPlaying.splice(0, 1);
    questionsLeft--;

});