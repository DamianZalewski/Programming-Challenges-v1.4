window.onload = function () {
    let ASCII = [
        "#####--##--#####",
        "-##---#---#--###",
        "####--#--#--####",
        "####---#--#-####"
    ];
    
    let clock = document.querySelector('.clock');

    updateTime = () => {
        let time = new Date();
        let hours = time.getHours() < 10 ? '0'+time.getHours() : time.getHours() ;
        let minutes = time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes();
        let seconds = time.getSeconds() < 10 ? '0'+time.getSeconds() : time.getSeconds();
        clock.innerHTML = hours + " : " + minutes + " : " + seconds;
    }
    
//    setInterval(updateTime,1000);
//    updateTime();
    
    drawASCII = () => {
        let text = "";
//        for(let i = 0; i<ASCII.length; i++){
//            for(let j=0; j<ASCII[i].length; j++) {
//                let word = ASCII[i];
//                if(word[j] == "/") text += "<br />";
//                else {
//                    text += word[j];
//                }
//            }
//        }
        for(let i = 0; i<4; i++){
            for(let j = 0; j<ASCII.length; j++){
                for(let k = 0; k<4; k++){
                    text += 
                }
            }
        }
        clock.innerHTML = text;
    }
    drawASCII();
};
