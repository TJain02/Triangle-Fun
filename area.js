const sides = document.querySelectorAll(".input-sides");
const areaBtn = document.querySelector("#area-btn");
const outputBox = document.querySelector("#output");

function baseAndHeightProduct(b,h)
{
    const prodOfBaseHeight = (b * h);
    return prodOfBaseHeight;
}



function calculateArea()
{
    const prodOfBaseHeight = baseAndHeightProduct(Number(sides[0].value) , Number(sides[1].value));
 
    const area = prodOfBaseHeight /2;
    outputBox.innerText = "The area of the triangle is : " + area + " cm²."

}

areaBtn.addEventListener("click" , calculateArea);