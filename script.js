var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var quizOptionsEl = document.querySelector('#quiz article');
var scoreEl = document.querySelector('#score');
var startBtn = document.querySelector('#startBtn');
var quizH2 = document.querySelector('#quiz h2');
var quizH3 = document.querySelector('#quiz h3');

var cursor = 0;
var questions = [
   {   
       text: "Who is the JIGSAW Killer?",
       possible: [
           "The Puppet",
           "The Police Officers",
           "John Kramer"
       ],
       correct: 3
    },
   {
       text: "Who was the dead body in the first SAW movie?",
       possible: [
        "John Kramer",
        "The JIGSAW Killer",
        "All of the above"
    ],
    correct: 3
    },
   {
       text: "Did Chris Rock's charater win the game?",
       possible: [
           "Yes",
           "No"
       ],
       correct: 2
    }   
]

function displayElements(state) {
    switch(state) {
    case "START": {
     startEl.style.display = "flex";
     quizEl.style.display = "none";
     scoreEl.style.display = "none";
     break;

}
    case "Quiz": {
    startEl.style.display = "none";
    quizEl.style.display = "flex";
    scoreEl.style.display = "none";
    break;
}
    case "SCORE": {
    startEl.style.display = "none";
    quizEl.style.display = "none";
    scoreEl.style.display = "flex";
    break;
}
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
    var currenetQuestion = questions [cursor];
    if (currenetQuestion) {
    quizH3.textContent = currenetQuestion.text;
    quizOptionsEl.innerHTML = "";
    for (var i in currenetQuestion.possible) {
        var answerEl = document.createElement('div');
        answerEl.textContent = currenetQuestion.possible[i];
        answerEl.dataset.index = i;
        quizOptionsEl.appendChild(answerEl); 
    }
} else {
    enterScore();
}
}
function pickAnswer(event) {
    var currenetQuestion = questions [cursor];
    if (event.target.matches ("div")) {
    if (Number(event.target.dataset.index) === currenetQuestion.correct) {
        console.log("CORRECT")
} else { 
    console.log("WRONG");
}
nextQuestion();
    }
}
    
startBtn.addEventListener("click", playQuiz);
quizH2.addEventListener("click", enterScore);
quizEl.addEventListener("click", pickAnswer);

init();