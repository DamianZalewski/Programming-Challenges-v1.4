let heightInput = document.getElementsByName("heightInput")[0];
let weightInput = document.getElementsByName("weightInput")[0];
let genderInput = document.getElementsByName("genderInput")[0];

let heightValue = document.getElementById("heightValue");
let weightValue = document.getElementById("weightValue");
let result = document.getElementById("result");

let bmiValue = 0;
let bmiText = "";

changeHeightValue = () => {
    heightValue.innerHTML = heightInput.value + " cm";
}

changeWeightValue = () => {
    weightValue.innerHTML = weightInput.value + " kg";
}

calculateBMI = (e) => {
    bmiValue = weightInput.value / Math.sqrt(heightInput.value);
    if(bmiValue < 18.5) bmiText = "Underweight"; else
    if(bmiValue >= 18.5 && bmiValue < 25) bmiText = "Normal weight"; else
    if(bmiValue >= 25 && bmiValue < 30) bmiText = "Overweight"; else
    if(bmiValue >= 30) bmiText = "Obesity";
    console.log('oke');
    result.innerHTML = "BMI: " + bmiValue + ", Text: " + bmiText;
}


changeHeightValue();
changeWeightValue();