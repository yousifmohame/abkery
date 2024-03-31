let quizData = [
{
    question: "Which feature of OOP indicates code reusability?",
    answer: "Inheritance",
    options: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Abstraction"
    ]
},
{
  question: "An object of a class carries:",
  answer: "a and b",
  options: [
      "class properties",
      "class methods",
      "a and b",
      "None"
  ]
},
{
  question: "To create an object of class Cars, do the following:",
  answer: "Cars c = new Cars ( );",
  options: [
      "Cars c = Cars( );",
      "Cars c = new Cars;",
      "Cars c = new Cars ( );",
      "None"
  ]
},
{
  question: "The following is an example of abstraction:",
  answer: "All of the mentioned",
  options: [
      "String name;",
      "double salary;",
      "int id;",
      "All of the mentioned"
  ]
},
{
  question: "The relation among objects of class Cars and class Engine is:",
  answer: "Composition",
  options: [
      "Abstraction",
      "Polymorphism",
      "Composition",
      "Aggregation"
  ]
},
{
  question: "The keyword extends is used to achieve the following:",
  answer: "Inheritance",
  options: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction"
  ]
},
{
  question: "All of the following are examples of abstraction except:",
  answer: "student1.GPA=3;",
  options: [
      "String name;",
      "double salary;",
      "int id;",
      "student1.GPA=3;"
  ]
},
{
  question: "The relation among objects of class Doctors and class Student is:",
  answer: "Aggregation",
  options: [
      "Abstraction",
      "Polymorphism",
      "Composition",
      "Aggregation"
  ]
},
{
  question: "Constructors are used to do the following",
  answer: "a and b",
  options: [
      "create object",
      "initialize attributes",
      "a and b",
      "none of the mentioned"
  ]
},
{
  question: "The ability of different objects to the same class to respond to the same request, each in its own way is called…..",
  answer: "polymorphism",
  options: [
      "encapsulation",
      "polymorphism",
      "aggregation",
      "association"
  ]
},
{
  question: "The ability of different objects of different classes to communicate is called…..",
  answer: "association",
  options: [
      "encapsulation",
      "polymorphism",
      "inheritance",
      "association"
  ]
},
{
  question: "The following keyword is used to apply inheritance",
  answer: "extends",
  options: [
      "static",
      "final",
      "abstract",
      "extends"
  ]
},
{
  question: "Which of the following means redefinition of the same method of a parent class in a child class",
  answer: "overriding",
  options: [
      "overloading",
      "overhead",
      "overriding",
      "none of the mentioned"
  ]
},
{
  question: "main method in java must be",
  answer: "a and b",
  options: [
      "public",
      "static",
      "a and b",
      "None of the mentioned"
  ]
},
{
  question: "Aggregation is",
  answer: "weak association",
  options: [
      "weak inheritance",
      "strong association",
      "weak association",
      "weak abstraction"
  ]
},
{
  question: "Encapsulation makes sure that",
  answer: "data is protected",
  options: [
      "inheritance is achieved",
      "data is protected",
      "overloading is applied",
      "overriding and overloading are applied"
  ]
},
{
  question: "Strong dependency among different object is also called……………",
  answer: "composition",
  options: [
      "polymorphism",
      "aggregation",
      "composition",
      "abstraction"
  ]
},
{
  question: "There are two types of association",
  answer: "aggregation and composition",
  options: [
      "aggregation and abstraction",
      "aggregation and composition",
      "aggregation and encapsulation",
      "aggregation and inheritance"
  ]
},

  ];
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const resultBox = document.querySelector('.result-box');
  const tryagainBtn = document.querySelector('.tryAgain-btn');
  const showAnswerBtn = document.querySelector('.showanswer-btn');


  tryagainBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    questionNumb = 1;
    quizContainer.style.display = 'block';
    nextBtn.classList.remove('activew');
    backBtn.style.display = 'inline-block';
    resultContainer.innerHTML = '';
    backBtn.classList.remove('activee');    
    resultBox.classList.remove('active'); 
    finishBtn.classList.remove('active');

    displayQuestion();
    questioncounter(questionNumb);
  }

  showAnswerBtn.onclick = () => {
    quizContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    backBtn.style.display = 'none';
    resultBox.classList.remove('active');  
    finishBtn.classList.remove('active');


    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p class="check">
          <div class="text"> ${incorrectAnswers[i].question} </div> <strong>:السؤال</strong> <br>
          <div class="text"> ${incorrectAnswers[i].incorrectAnswer} </div> <strong>:اجابتك</strong> <br>
          <div class="text"> ${incorrectAnswers[i].correctAnswer} </div> <strong>:الاجابة الصحيحة</strong>
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <h2>الأسئلة الخاطئة</h2>
      ${incorrectAnswersHtml}
    `;
  }



  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  let questionNumb = 1;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      
    }
  }
  
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
    
    
    questioncounter(questionNumb);
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
    
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
    
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
    
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
      
      option.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        option.classList.add('active');
      
    });
  
  
    
        

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
      
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
      
    }
    
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  



  const nextBtn = document.querySelector('.next-btn');

  nextBtn.onclick = () => {
    
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }};
    
            
  if (currentQuestion < quizData.length -1) {
      currentQuestion++;
      displayQuestion();

      questionNumb++;
      questioncounter(questionNumb);
    backBtn.classList.add('activee');
  }
     
  else {
      finishBtn.classList.add('active');
      nextBtn.classList.add('activew');
    }
    
  };

  const finishBtn = document.querySelector('.finish-btn');

finishBtn.onclick = () => {
    showResultBox();
}
  
  const backBtn = document.querySelector('.back-btn');
  
  backBtn.onclick = () => {
    currentQuestion--;
    displayQuestion();
    questionNumb--;
    questioncounter(questionNumb);
    score--;
    
    finishBtn.classList.remove('active');
    nextBtn.classList.remove('activew');
    
    if (currentQuestion <= 0) {
      
    backBtn.classList.remove('activee')
      
    }
    
  }

  function questioncounter(index) {
    const questionTotal =document.querySelector('.question-total');
    questionTotal.textContent = `${quizData.length}  السؤال ${index} من`
}


  function showResultBox() {
  resultBox.classList.add('active');
  quizContainer.style.display = 'none';

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = ` الاجابة الصحيحة  ${score} من ${quizData.length}`;

    const circularprogress = document.querySelector('.circular-progress');
    const progressValue =document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (Math.floor((score / quizData.length) * 100));
    let speed =20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularprogress.style.background = `conic-gradient(#c40094 ${progressStartValue *3.6}deg, rgba(255, 255, 255, .1) 0deg)`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}




  displayQuestion();