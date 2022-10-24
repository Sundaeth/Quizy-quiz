const quizData = [
    {
        question: 'Javascript is an _______ language?',
        a:'Object-Oriented', 
        b:'Object-Based',
        c:'Procedural',
        d:'None of the above',
        correct: 'a',
    },{
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        a:'var',
        b:'let',
        c:'Both A and B', 
        d:'None of the above', 
        correct: 'c', 
    },{
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        a:'getElementById()',
        b:'getElementByClassName()',
        c:'Both A and B', 
        d:'None of the above',
        correct: 'c',
    },{
        question: 'Which of the following methods can be used to display data in some form using Javascript?',
        a:'document.write()',
        b:'console.log()',
        c:'window.alert()',
        d:'All of the above methods',
        correct: 'd', 
    },{
        question: 'When an operator’s value is NULL, the typeof returned by the unary operator is ?',
        a:'Boolean',
        b:'Undefined',
        c:'Object',
        d:'Integer', 
        correct: 'd',
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn= document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData= quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // currentQestion++;
};

function getSelected(){
    // const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
          answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',() => {
    
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].
            correct){
                score++;
            }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h3>${score} Of ${quizData.length}</h3>`;
        }
        
    };
});