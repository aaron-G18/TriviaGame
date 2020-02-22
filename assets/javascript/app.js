// Questions:

/// make an array of questions, and each question is an object with same formats. 
/// Should make it easier to work with them.

var questionsMaster = [{
        question: "What is my name",
        answers: {
            correctAnswer: "Aaron",
            incorrectAns1: "John",
            incorrectAns2: "Jason",
            incorrectAns3: "Fred"
        }
    },
    {
        question: "What is my Middle name",
        answers: {
            correctAnswer: "Lee",
            incorrectAns1: "Vaughn",
            incorrectAns2: "Christopher",
            incorrectAns3: "Leon"
        }
    }

];










var questionsPlaying = questionsMaster;




var questionArray = [questionsMaster[0].answers.correctAnswer,
    questionsMaster[0].answers.incorrectAns1, questionsMaster[0].answers.incorrectAns2,
    questionsMaster[0].answers.incorrectAns3
];