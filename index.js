const quiz = document.getElementById("quiz"); // make sure you have a wrapper div with id="quiz"

const quizData = [
  {
    question: "What is Emily's favourite colour?",
    options: ["Red", "Blue", "Purple", "Yellow"],
    answer: "Blue"
  },
  {
    question: "What is the name of Emily's black & white cat?",
    options: ["Yuna", "Venus", "Luna", "Vaya"],
    answer: "Luna"
  },
  {
    question: "What is the name of Emily's all black cat?",
    options: ["Venus", "Luna", "Lana", "Virus"],
    answer: "Venus"
  },
  {
    question: "How tall is Emily?",
    options: ["4'11", "5'0", "5'1", "5'2"],
    answer: "5'0"
  },
  {
    question: "How much does Emily love you?",
    options: ["0%", "50%", "100%", "10000000000%"],
    answer: "10000000000%"
  },
  {
    question: "How should you respond to 'Can we please go to Shake Shack?'",
    options: ["'I guess'", "'NO'", "'sure >->'", "'YES ANYTHING FOR U MY LOVE'"],
    answer: "'YES ANYTHING FOR U MY LOVE'"
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  } else {
    showFailScreen();
  }
}

function showResult() {
  questionElement.innerText = "All Done! 🎉";
  optionsElement.innerHTML = `
    <p class="quizPar1">Score: ${score}/${quizData.length}</p>
    <button onclick="goToNextPage()">Continue</button>
  `;
}

function showFailScreen() {
   questionElement.innerText = "❌ You Failed!";
optionsElement.innerHTML = `
  <button onclick="restartQuiz()">Try Again</button>

`}

function goToNextPage() {
  window.location.href = "page2.html";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  showQuestion();

  
}

showQuestion();