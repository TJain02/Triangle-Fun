const angleInput = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output")

function sumOfAngles(angle1,angle2,angle3){
const sum = angle1 + angle2 + angle3;
return sum;   
}

function isTriangle(){
    const sum = sumOfAngles(Number(angleInput[0].value),Number(angleInput[1].value), Number(angleInput[2].value));
    if(sum === 180){
        output.innerText="The angles form a triangles!";
    }
    else{
        output.innerText="Oops! the angles doesn't form a triangle";
    }
}

checkBtn.addEventListener("click", isTriangle)