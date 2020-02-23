// Questions:

/// make an array of questions, and each question is an object with same formats. 
/// Should make it easier to work with them.

var questionsMaster = [{
        question: "What is the surname for bastards born in Dorne?",
        answers: [
            "Flower",
            "Stone",
            "Snow",
            "Sand"
        ],
        correctAnswer: "Sand",
    },
    {
        question: "What is the surname for bastards born in the North?",
        answers: [
            "Stone",
            "Sand",
            "Snow",
            "Flower"
        ],
        correctAnswer: "Snow",
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
    }
];

var questionsPlaying = questionsMaster;
var currentCorrAnswer;
// var themeSong = document.getElementById("gameThrones");


var audio = new Audio('https://www.televisiontunes.com/uploads/audio/Game%20of%20Thrones.mp3');



function playAudio() {
    audio.play();
};

// function to "shuffle" the array of questions.
function makeNewArray() {
    questionsPlaying.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    questionsPlaying = questionsPlaying;
    console.log(questionsPlaying);
};

// function to display answers for the current question.
function displayAnswers(item, index) {
    $(".answers").append("<div class='" + index + "'>" + item + "</div>");
}


function question(x) {
    $(".question").html(questionsPlaying[x].question);
    $(".answers").empty();
    questionsPlaying[x].answers.forEach(displayAnswers);
    currentCorrAnswer = questionsPlaying[x].correctAnswer;

};

makeNewArray();

//on click functions
function setLogo() {
    $("#logo").attr("src", "assets/images/GOT_transparent_logo.png");
}

$(".button").on("click", "#start", function () {
    console.log("clicked");
    $(".qa-container").css("display", "unset");
    $("#logo").css({
        "background": "url(assets/images/GOT_transparent_logo_small.png) no-repeat",
        "position": "relative",
        "width": "60%",
        "margin": "auto"
    });


    playAudio();
    question(0);
});

$(".answers").on("click", ".0", function () {
    var clickedHTML = ($(this).html());
    console.log(clickedHTML);
    if (clickedHTML === currentCorrAnswer) {
        console.log("answer is correct!");
    } else {
        console.log("That is WRONG!");
    }
});

$(".answers").on("click", ".1", function () {
    var clickedHTML = ($(this).html());
    console.log(clickedHTML);
    if (clickedHTML === currentCorrAnswer) {
        console.log("answer is correct!");
    } else {
        console.log("That is WRONG!");
    }
});

$(".answers").on("click", ".2", function () {
    var clickedHTML = ($(this).html());
    console.log(clickedHTML);
    if (clickedHTML === currentCorrAnswer) {
        console.log("answer is correct!");
    } else {
        console.log("That is WRONG!");
    }
});

$(".answers").on("click", ".3", function () {
    var clickedHTML = ($(this).html());
    console.log(clickedHTML);
    if (clickedHTML === currentCorrAnswer) {
        console.log("answer is correct!");
    } else {
        console.log("That is WRONG!");
    }
});