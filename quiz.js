const quizForm = document.querySelector(".quiz-form");
// const questionContainer = document.querySelectorAll(".question-container");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

const correctAnswers = ["40°","Obtuse-angled triangle","greater than the third side"];

function calculateScore(){
    let score = 0;
    let index=0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()){
        if( value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputBox.innerText ="Your score is: " + score;
}

submitBtn.addEventListener("click",calculateScore);