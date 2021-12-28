let inputFahrenheit = document.getElementById('inputFahrenheit');
let inputRankine = document.getElementById('inputRankine');
let inputCelsius = document.getElementById('inputCelsius');
let inputKelvin = document.getElementById('inputKelvin');

function calculateFahrenheit(){
    let value = inputFahrenheit.value;
    if(value == null || value == ''|| isNaN(value)){
        inputFahrenheit.value = "Wrong value of input";
        inputRankine.value = "Wrong value of input"; 
        inputCelsius.value = "Wrong value of input"; 
        inputKelvin.value = "Wrong value of input";
    }else{
        let fagrenheit = parseFloat(value);
        let celsius = (fagrenheit - 32) / 1.8;
        let rankine = (celsius + 273.15) * 1.8;
        let kelvin = celsius + 273.15;
  
        inputFahrenheit.value = Math.round(fagrenheit * 100) / 100;
        inputRankine.value = Math.round(rankine * 100) / 100;
        inputCelsius.value = Math.round(celsius * 100) / 100; 
        inputKelvin.value = Math.round(kelvin * 100) / 100;
    }
}

function calculateRankine(){
    let value = inputRankine.value;
    if(value == null || value == ''|| isNaN(value)){
        inputFahrenheit.value = "Wrong value of input";
        inputRankine.value = "Wrong value of input"; 
        inputCelsius.value = "Wrong value of input"; 
        inputKelvin.value = "Wrong value of input";
    }else{
        let rankine = parseFloat(value);
        let celsius = (rankine / 1.8) - 273.15;
        let fagrenheit = (celsius * 1.8) + 32;
        let kelvin = celsius + 273.15;
  
        inputFahrenheit.value = Math.round(fagrenheit * 100) / 100;
        inputRankine.value = Math.round(rankine * 100) / 100;
        inputCelsius.value = Math.round(celsius * 100) / 100; 
        inputKelvin.value = Math.round(kelvin * 100) / 100;
    }
}

function calculateCelsius(){
    let value = inputCelsius.value;
    if(value == null || value == ''|| isNaN(value)){
        inputFahrenheit.value = "Wrong value of input";
        inputRankine.value = "Wrong value of input"; 
        inputCelsius.value = "Wrong value of input"; 
        inputKelvin.value = "Wrong value of input";
    }else{
        let celsius = parseFloat(value);
        let rankine = (celsius + 273.15) * 1.8;
        let fagrenheit = (celsius * 1.8) + 32;
        let kelvin = celsius + 273.15;
  
        inputFahrenheit.value = Math.round(fagrenheit * 100) / 100;
        inputRankine.value = Math.round(rankine * 100) / 100;
        inputCelsius.value = Math.round(celsius * 100) / 100; 
        inputKelvin.value = Math.round(kelvin * 100) / 100;
    }
}


function calculateKelvin(){
    let value = inputKelvin.value;
    if(value == null || value == ''|| isNaN(value)){
        inputFahrenheit.value = "Wrong value of input";
        inputRankine.value = "Wrong value of input"; 
        inputCelsius.value = "Wrong value of input"; 
        inputKelvin.value = "Wrong value of input";
    }else{
        let kelvin = parseFloat(value);
        let celsius  = kelvin - 273.15;
        let rankine = (celsius + 273.15) * 1.8;
        let fagrenheit = (celsius * 1.8) + 32;
  
        inputFahrenheit.value = Math.round(fagrenheit * 100) / 100;
        inputRankine.value = Math.round(rankine * 100) / 100;
        inputCelsius.value = Math.round(celsius * 100) / 100; 
        inputKelvin.value = Math.round(kelvin * 100) / 100;
    }
}

function resetForm(){
    inputFahrenheit.value = "";
    inputRankine.value = ""; 
    inputCelsius.value = ""; 
    inputKelvin.value = "";
}