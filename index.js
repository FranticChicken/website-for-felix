function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector(".header").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      document.querySelector(".header").style.backgroundColor = "rgba(0, 0 ,0, 1)";
    }
  }
  window.onscroll = scrollFunction;

  const quizData = [
    {
      question: "What is my favourite colour?",
      options: ["Red", "Blue", "Purple", "Yellow"],
      answer: "Blue"
    },
    {
      question: "What is my favourite food?",
      options: ["Burger", "Ramen", "Sushi", "Wings"],
      answer: "Burger"
    },
    {
        question: "How many bones have I broken?",
        options: ["1", "2", "3", "0"],
        answer: "0"
      },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
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
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1 id = "quizHeader">All Done!</h1>
      <p class = "quizPar1">Score: ${score}/${quizData.length}</p>
      <p class = "quizPar">Answers:</p>
      <p class = "quizPar">Favourite Colour = Blue</p>
      <p class = "quizPar">Favourite Food = Burger</p>
      <p class = "quizPar">Number of Bones Broken = 0</p>
    `;
  }
  
  showQuestion();