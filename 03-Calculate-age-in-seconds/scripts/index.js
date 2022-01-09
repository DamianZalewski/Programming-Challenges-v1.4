let dateInput = document.querySelector('#dateInput');
let resultTextError = document.querySelector('#resultTextError');
let resultText = document.querySelector('#resultText');

function calculateAgeInSeconds(){
    let dateNow = new Date();

    if(dateInput.value == '' || dateInput.value == null){
        resultTextError.innerText = "fill in the field with the date";
    }else{
        let dateInputValue = new Date(dateInput.value);

        if(dateNow < dateInputValue){
            resultTextError.innerText = "Please select a date that is older than today";
        }else{
            let resultDate = new Date(dateNow - dateInputValue);
            resultDate = Math.floor(resultDate.getTime() / 1000);

            resultTextError.innerText = "";
            resultText.innerText = `From date (${dateInputValue.toLocaleDateString()}) to date (${dateNow.toLocaleDateString()}) is about ${resultDate} seconds`;
        }
    }
}