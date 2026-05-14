const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        correct: "Mars"
    },
    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Python", "SQL"],
        correct: "CSS"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!-- -->", "**"],
        correct: "//"
    }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");
const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const scoreText = document.getElementById("scoreText");
const resultMessage = document.getElementById("resultMessage");
const progressBar = document.getElementById("progressBar");

function loadQuestion() {
    answered = false;
    nextBtn.style.display = "none";

    optionsBox.textContent = "";

    const currentQuestion = questions[currentIndex];

    questionNumber.textContent = "Question " + (currentIndex + 1) + " of " + questions.length;
    questionText.textContent = currentQuestion.question;

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionButton = document.createElement("button");

        optionButton.textContent = currentQuestion.options[i];
        optionButton.classList.add("option-btn");

        optionButton.onclick = function () {
            checkAnswer(currentQuestion.options[i]);
        };

        optionsBox.append(optionButton);
    }

    updateProgressBar();
}

function checkAnswer(selected) {
    if (answered === true) {
        return;
    }

    answered = true;

    const currentQuestion = questions[currentIndex];
    const allButtons = document.querySelectorAll(".option-btn");

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].disabled = true;

        if (allButtons[i].textContent === currentQuestion.correct) {
            allButtons[i].classList.add("correct");
            allButtons[i].textContent = allButtons[i].textContent + " ✓";
        }

        if (allButtons[i].textContent === selected && selected !== currentQuestion.correct) {
            allButtons[i].classList.add("wrong");
            allButtons[i].textContent = allButtons[i].textContent + " ✗";
        }
    }

    if (selected === currentQuestion.correct) {
        score++;
    }

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizCard.style.display = "none";
    resultCard.style.display = "block";

    scoreText.textContent = "You scored " + score + " out of " + questions.length + "!";

    if (score === 5) {
        resultMessage.textContent = "Perfect score! You're a genius! 🧠";
    } else if (score >= 3) {
        resultMessage.textContent = "Great job! Almost there! 💪";
    } else if (score >= 1) {
        resultMessage.textContent = "Keep practicing, you'll get there! 📚";
    } else {
        resultMessage.textContent = "Don't give up — try again! 🔁";
    }

    progressBar.style.width = "100%";
}

function resetQuiz() {
    currentIndex = 0;
    score = 0;
    answered = false;

    resultCard.style.display = "none";
    quizCard.style.display = "block";

    loadQuestion();
}

function updateProgressBar() {
    const progressPercent = ((currentIndex + 1) / questions.length) * 100;
    progressBar.style.width = progressPercent + "%";
}

loadQuestion();