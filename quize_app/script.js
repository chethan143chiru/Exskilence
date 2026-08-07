// Array of quiz questions
let questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Markup Language"
        ],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 1
    },
    {
        question: "Which language is used to add interactivity to a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: 2
    },
    {
        question: "Which HTML tag is used for the largest heading?",
        options: [
            "<h6>",
            "<head>",
            "<h1>",
            "<title>"
        ],
        answer: 2
    },
    {
        question: "Which attribute is used in an anchor tag for links?",
        options: [
            "src",
            "link",
            "href",
            "url"
        ],
        answer: 2
    }
];

// Selecting HTML elements
let quizContainer = document.getElementById("quizContainer");
let quizForm = document.getElementById("quizForm");
let errorMessage = document.getElementById("errorMessage");
let scoreContainer = document.getElementById("scoreContainer");

// Display Questions
questions.forEach(function (item, index) {

    let questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    let questionTitle = document.createElement("h3");
    questionTitle.textContent = (index + 1) + ". " + item.question;

    questionDiv.appendChild(questionTitle);

    item.options.forEach(function (option, optionIndex) {

        let label = document.createElement("label");

        let radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "q" + index;
        radio.value = optionIndex;

        label.appendChild(radio);

        label.append(" " + option);

        questionDiv.appendChild(label);

    });

    quizContainer.appendChild(questionDiv);

});

// Submit Event
quizForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let score = 0;

    let allAnswered = true;

    errorMessage.textContent = "";

    scoreContainer.textContent = "";

    for (let i = 0; i < questions.length; i++) {

        let selectedOption = document.querySelector(
            'input[name="q' + i + '"]:checked'
        );

        if (selectedOption == null) {

            allAnswered = false;
            break;

        }

        if (Number(selectedOption.value) === questions[i].answer) {

            score++;

        }

    }

    if (!allAnswered) {

        errorMessage.textContent =
            "Please answer all questions before submitting.";

        return;

    }

    scoreContainer.textContent =
        "You scored " + score + " out of " + questions.length;

});
