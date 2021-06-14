// Start the quiz and the timer after user clicks [Start Quiz]
var timeCount = 100;
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var titleCard = document.getElementById("title-card");

function quizStart() {
    var clock = setInterval(function() {
        timeCount--;
        timerEl.textContent = "Time Left: " + timeCount;
        if (timeCount == 0) {
            clearInterval(clock);
            alert("Time is up!");
            // function quizOver();
        }
    }, 1000)
    titleCard.style.visibility = "hidden";
};





// Displaying answer result
var yupNope = document.getElementById("result");

function showResult() {
    if (answer.correct) {
        yupNope.textContent = "YUUUUUPP!!";
    }
    else {
        yupNope.textContent = "NOOOOOPE!!";
        timeCount = timeCount - 10;
    }
    yupNope.style.visibility = "visible";
};


// function quizOver() {}

// Quiz Questions
var questions = [

]