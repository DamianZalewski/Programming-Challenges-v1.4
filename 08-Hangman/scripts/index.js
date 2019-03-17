window.onload = function () {
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
            div.id = 'button_' + key;
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
    
    changeImage = () => {
        let hangmanImage = document.getElementsByClassName('hangmanImage')[0];
        console.log(hangmanImage);
        hangmanImage.src = 'assets/hangman' + fails + '.png';
    }
    
    removeKey = (key) => {
        let keyButton = document.getElementById('button_'+key);
        keyButton.style.visibility = 'hidden';
    } 
    
    setCharAt = (str,index,chr) => {
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    
    checkKey = (key) => {
        if(fails == 7) return 0;
        let changeFlag = false;
        for(let i = 0; i < actualWord.length; i++) {
            if(actualWord[i].toUpperCase() == key){
                hiddenWord = setCharAt(hiddenWord, i, key);
                changeFlag = true;
            }
        }
        if(!changeFlag) {
            fails++;
            changeImage();
        }
        drawWord();
        removeKey(key);
    }
    
    drawLetters();
//    randomizeWord();
    drawWord();

};
