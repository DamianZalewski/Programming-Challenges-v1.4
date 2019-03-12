window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let cw = canvas.width;
    let ch = canvas.height;

    drawLetters = () => {
        let letterBox = document.getElementsByClassName("lettersBox")[0];
        let letter = 'A';
        for (i = 0; i < 26; i++) {
            var div = document.createElement("div");
            div.classList.add("letter");
            div.innerHTML = (i + 10).toString(36).toUpperCase();
            letterBox.appendChild(div);

        }
    }
    drawLetters();

};
