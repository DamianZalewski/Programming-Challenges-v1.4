window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let cw = canvas.width;
    let ch = canvas.height;
    let words = ['yell','radiate','slow','ban','thunder','cakes','paint','conscious','nice','room','surround','subdued','hang','icicle','fine','afraid','wide'];
    let actualWord = '';
    let hiddenWord = '';
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
    }
    
    drawLetters();
    randomizeWord();
    drawWord();

};
