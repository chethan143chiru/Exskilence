let questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language"
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
    options: ["HTML", "CSS", "JavaScript", "Python"],
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
    options: ["src", "link", "href", "url"],
    answer: 2
  }
];



const quizContainer = document.getElementById("quizContainer");
const quizForm = document.getElementById("quizForm");
const errorMessage = document.getElementById("errorMessage");
const scoreContainer = document.getElementById("scoreContainer");

function loadQuiz() {

    questions.forEach((q, index) => {

        const div = document.createElement("div");

        div.classList.add("question");

        let html = `<h3>${index + 1}. ${q.question}</h3>`;

        q.options.forEach((option, i) => {

            html += `
                <label>
                    <input
                        type="radio"
                        name="question${index}"
                        value="${i}">
                    ${option}
                </label>
            `;

        });

        div.innerHTML = html;

        quizContainer.appendChild(div);

    });

}

loadQuiz();

quizForm.addEventListener("submit", function(e){

    e.preventDefault();

    errorMessage.textContent="";

    scoreContainer.innerHTML="";

    let score=0;

    let answered=true;

    questions.forEach((q,index)=>{

        const selected=document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if(!selected){

            answered=false;

        }

        else if(Number(selected.value)===q.answer){

            score++;

        }

    });

    if(!answered){

        errorMessage.textContent="Please answer all questions before submitting.";

        return;

    }

    scoreContainer.innerHTML=`
        <div class="score-box">
            You scored ${score} out of ${questions.length}
        </div>
    `;

});