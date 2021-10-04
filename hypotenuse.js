const sideInput = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output")

function calculateSumOfquares(a,b){
    const sumOfSquares = a*a + b*b;
   return sumOfSquares;
}
function calculateHypotenuse(){ 
    const sum = calculateSumOfquares(Number(sideInput[0].value),Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sum);
    outputBox.innerText="The length of hypotenuse is: " +(lengthOfHypotenuse);
}
   
calculateBtn.addEventListener("click",calculateHypotenuse);