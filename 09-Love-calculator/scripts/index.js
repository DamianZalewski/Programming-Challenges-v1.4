window.onload = () => {
    var c = document.getElementById("canvas");
    c.style.width = "90%";
    c.style.height = "90%";
    var cw = canvas.scrollWidth;
    var ch = canvas.scrollHeight;
    var ctx = c.getContext("2d");
    var sbmButton = document.getElementById('sbmButton');

    init = () => {
        drawHeart();
        sbmButton.addEventListener('click',loveCalculate);
    }

    drawHeart = () => {
        ctx.strokeStyle = "#000000";
        ctx.strokeWeight = 1;
        ctx.shadowOffsetX = 4.0;
        ctx.shadowOffsetY = 4.0;
        ctx.lineWidth = 10.0;
        ctx.fillStyle = "#FF0000";
        var d = 130;
        var k = 10;
        ctx.moveTo(k, k + d / 4);
        ctx.quadraticCurveTo(k, k, k + d / 4, k);
        ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
        ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
        ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
        ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
        ctx.lineTo(k + d / 2, k + d);
        ctx.lineTo(k + d / 4, k + d * 3/4);
        ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
        ctx.stroke();
        ctx.fill();
    }

    loveCalculate = () => {
        let randomNumber = Math.floor(Math.random() * 100 + 1);
        var name1 = document.getElementById('name1').value;
        var name2 = document.getElementById('name2').value;
        console.log(name1);
        console.log(name2);
        console.log(randomNumber);
    }

    init();
};