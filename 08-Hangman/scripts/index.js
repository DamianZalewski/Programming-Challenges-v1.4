window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let cw = canvas.width;
    let ch = canvas.height;
    let words = ['yell','radiate','slow','ban','thunder','cakes','paint','conscious','nice','room','surround','subdued','hang','icicle','fine','afraid','wide'];
    let actualWord = 'test';
    let hiddenWord = '----';
    let fails = 0;

    drawLetters = () => {
        let letterBox = document.getElementsByClassName("lettersBox")[0];
        let letter = 'A';
        for (i = 0; i < 26; i++) {
            let key = (i + 10).toString(36).toUpperCase();
            var div = document.createElement("div");
            div.classList.add("letter");
            div.innerHTML = key;
            div.addEventListener('click',() => {checkKey(key)});
            letterBox.appendChild(div);
        }
    }
    
    drawWord = () => {
        let wordBox = document.getElementsByClassName("topicWord")[0];
        wordBox.innerHTML = hiddenWord;
    }
    
    randomizeWord = () => {
        let i = Math.floor(Math.random() * words.length);
        actualWord = words[i];
        for(let i = 0; i < actualWord.length; i++) {
            hiddenWord += '-';
        }
    }
    
    checkKey = (key) => {
        console.log(key);
        if (actualWord.toUpperCase().indexOf(key) > -1)
        {
            let index = actualWord.toUpperCase().indexOf(key);
//            alert(actualWord.toUpperCase().indexOf(key));
            hiddenWord = hiddenWord.substr(0, index) + key + hiddenWord.substr(index + 1);
            console.log(hiddenWord);
        }
    }
    
    drawLetters();
//    randomizeWord();
    drawWord();

};
