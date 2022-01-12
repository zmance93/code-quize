var startEl = document.querySelector('#start');
var timeEl = document.querySelector('#timer');
var startBtn = document.querySelector('#startBtn');
var quizEl = document.querySelector('#quiz');
var quizH2 = document.querySelector('#quiz h2');
var quizH3 = document.querySelector('#quiz h3');
var quizOptionsEl = document.querySelector('#quiz article');
var initialEl = document.querySelector('#initials');
var scoreEl = document.querySelector('#score');

 
// var timeLeft = 15;
// function renderTime(num) {
//     var label = (num !==1) ? "seconds" : "second";
//     timerEl.textContent = num + " " + label + "left";
// }

// function setTime() {
//     renderTime(timeLeft);
//     var timerInterval = setInterval(function() {
//         secondsLeft--;

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//             sendMessage();
//         }
//     }, 1000);
// }
// function setTimer() 

var cursor = 0;
var questions = [
    {
        text: "Who is the JIGSAW Killer?",
        possible: [
            "A. The Puppet",
            "B. The Police Officers",
            "C. John Kramer"
        ],
        correct: 3
     },
    {
        text: "Who was the dead body in the first SAW movie?",
        possible: [
         "A. John Kramer",
         "B. The JIGSAW Killer",
         "C. All of the above"
     ],
     correct: 3
     },
    {
        text: "Did Chris Rock's charater win the game?",
        possible: [
            "A. Yes",
            "B. No"
        ],
        correct: 2
     }   
 
]

function displayElements(state) {
    switch(state) {
        case "START": {
            startEl.style.display = "flex";
            quizEl.style.display = "none";
            // scoreEl.style.display = "none";
            initialEl.style.display = "none";
            break;
        }

        case "Quiz": {
            startEl.style.display = "none";
            quizEl.style.display = "flex";
            // scoreEl.style.display = "none";
            initialEl.style.display = "none";

            break;
        }

        case "SCORE": {
            startEl.style.display = "none";
            quizEl.style.display = "none";
            // scoreEl.style.display = "flex";
            initialEl.style.display = "none";

            break;
        }

        // case "Initials": {
        //     startEl.style.display = "none";
        //     quizEl.style.display = "none";
        //     scoreEl.style.display = "none";
        //     initialEl.style.display = "flex";

        //     break;
        // }


        default: {
            startEl.style.display = "flex";
            quizEl.style.display = "none";
            scoreEl.style.display = "none";
        }
    }
}
function init() {
    displayElements("START");
}

function playQuiz() {
    displayElements("Quiz");
    renderQuestion();
}

function enterScore() {
    displayElements("SCORE");
}

function nextQuestion() {
    cursor++;
    renderQuestion();
}

function renderQuestion() {
    var currentQuestion = questions[cursor];
    if (currentQuestion) {
    quizH3.textContent = currentQuestion.text;
    quizOptionsEl.innerHTML = "";
    for (var i in currentQuestion.possible) {
        var answerEl = document.createElement('div');
        answerEl.textContent = currentQuestion.possible[i];
        answerEl.dataset.index = i;
        quizOptionsEl.appendChild(answerEl);
    }    
    } else {
        enterScore();
    }
}
function pickAnswer(event) {
    var currentQuestion = questions [cursor];
    if (event.taget.matches ("div")) {
    if (Number(event.target.dataset.index) === currentQuestion.correct) {
            console.log("Well Played")   
        } else {
            console.log("Try Again");
        }
        nextQuestion();
    }    
}

startBtn.addEventListener("click", playQuiz);
quizH2.addEventListener("click", enterScore);
quizEl.addEventListener("click", pickAnswer);

init();

// function sendMessage() {
//     timerEl.textContent = "Times Up ";
//     bodyEl.appendChild(imgEl);
// }

// setTimer();
