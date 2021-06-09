var timeCount = 100;
var timerEl = document.getElementById("timer");

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
};

quizStart();

// function quizOver() {}