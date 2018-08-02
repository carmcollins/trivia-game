$(document).ready(function() {

var trivia = [
    {question: "Who painted the Campbell's Soup Cans in 1962?",
    answer1: "Andy Warhol",
    answer2: "Mark Rothko",
    answer3: "Jackson Pollock",
    correctAnswer: "Andy Warhol",
    imageURL: "assets/images/soupcan.jpg"
    },

    {question: "What is the most visited museum in Europe?",
    answer1: "Guggenheim",
    answer2: "The Louvre",
    answer3: "Musee d'Orsay",
    correctAnswer: "The Louvre",
    imageURL: "assets/images/louvre.jpg"
    },

    {question: "Jackson Pollock was an abstract painter from what country?",
    answer1: "England",
    answer2: "France",
    answer3: "United States",
    correctAnswer: "United States",
    imageURL: "assets/images/pollock.jpg"
    },

    {question: "Who painted the oil painting The Starry Night?",
    answer1: "Michelangelo",
    answer2: "Van Gogh",
    answer3: "Monet",
    correctAnswer: "Van Gogh",
    imageURL: "assets/images/starrynight.jpg"
    },

    {question: "How many times has the Mona Lisa been stolen?",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    correctAnswer: "1",
    imageURL: "assets/images/monalisa.jpg"
    },

    {question: "What type of paint does not use the color white?",
    answer1: "Acrylic",
    answer2: "Gouache",
    answer3: "Watercolor",
    correctAnswer: "Watercolor",
    imageURL: "assets/images/palette.jpg"
    },

    {question: "How many paintings did Van Gogh sell during his lifetime?",
    answer1: "42",
    answer2: "1",
    answer3: "14",
    correctAnswer: "1",
    imageURL: "assets/images/vangogh.jpg"
    },

    {question: "What is Pablo Picasso's style of artwork called?",
    answer1: "Cubism",
    answer2: "Surrealism",
    answer3: "Expressionism",
    correctAnswer: "Cubism",
    imageURL: "assets/images/picasso.jpg"
    },

    {question: "Who is famous for painting huge closeups of flowers?",
    answer1: "Frida Kahlo",
    answer2: "Henri Matisse",
    answer3: "Georgia O'Keeffe",
    correctAnswer: "Georgia O'Keeffe",
    imageURL: "assets/images/okeeffe.jpg"
    },

    {question: "Which culture is credited with producing the first pottery?",
    answer1: "Chinese",
    answer2: "Japanese",
    answer3: "Aztec",
    correctAnswer: "Japanese",
    imageURL: "assets/images/pottery.jpg"
    }

];

var questionIndex = 0;

var questionsCorrect = 0;

var timeCount;

var counter;

var isAnsweringQuestion = true;

var showInitialQuestion = function() {
    $("#question").text(trivia[questionIndex].question);
    $("#answer1").text(trivia[questionIndex].answer1);
    $("#answer2").text(trivia[questionIndex].answer2);
    $("#answer3").text(trivia[questionIndex].answer3);
    $("#photo").attr("src", trivia[questionIndex].imageURL);
    showTimer(10);
}

var showNextQuestion = function() {
    questionIndex++;
    if (questionIndex < trivia.length) {
        isAnsweringQuestion = true;
        $(".questions-answers").show();
        $(".correct").hide();
        $(".incorrect").hide();
        $("#question").text(trivia[questionIndex].question);
        $("#answer1").text(trivia[questionIndex].answer1);
        $("#answer2").text(trivia[questionIndex].answer2);
        $("#answer3").text(trivia[questionIndex].answer3);
        $("#photo").attr("src", trivia[questionIndex].imageURL);
        showTimer(10);
    } else {
        $(".questions-answers").hide();
        $(".correct").hide();
        $(".incorrect").hide();
        $(".results").show();
        $("#questions-correct").text(questionsCorrect);
    }
}

var showCorrectPage = function() {
    $(".questions-answers").hide();
    $(".correct").show();
    showTimer(5);
    isAnsweringQuestion = false;
}

var showIncorrectPage = function() {
    $(".questions-answers").hide();
    $(".incorrect").show();
    $("#correct-answer").text(trivia[questionIndex].correctAnswer);
    showTimer(5);
    isAnsweringQuestion = false;
}

var showTimer = function(x) {
    timeCount = x;
    $("#time-remaining").text(x);
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount--;
        if (timeCount === 0) {
            if (isAnsweringQuestion) {
                clearInterval(counter);
                showIncorrectPage();
            } else {
                clearInterval(counter);
                showNextQuestion();
            }
        }
        $("#time-remaining").text(timeCount);
        console.log(timeCount);
    }

}

// Displays the start button
$(".start-button").show();
$(".questions-answers").hide();
$(".correct").hide();
$(".incorrect").hide();
$(".results").hide();

// When the user clicks on the start button
$(".start-button").on("click", function() {
    $(".start-button").hide();
    $(".questions-answers").show();
    showInitialQuestion();
});

// When the user clicks on an answer button
$(".answerBtn").on("click", function() {
    var userChoice = $(this).text();
    clearInterval(counter);
    if (userChoice === trivia[questionIndex].correctAnswer) {
        showCorrectPage();
        questionsCorrect++;
    } else {
        showIncorrectPage();
    }
});

});