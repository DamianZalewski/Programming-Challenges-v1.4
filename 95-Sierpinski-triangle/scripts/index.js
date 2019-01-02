let canvas = document.getElementById('canvas');
let canvasContainer = document.getElementById('canvasContainer');
let counterInput = document.getElementById('counter');
let ctx = canvas.getContext('2d');
let cw = canvas.width;
let ch = canvas.height;
let triangleInterval;
let points = [[cw/2,10],[10,ch-10],[cw-10,ch-10]];
let startPoint = points[0];
let counter = 0;
let quantity = 0;
let isStarted = false;

init = () => {
    points = [[cw/2,10],[10,ch-10],[cw-10,ch-10]];
    startPoint = points[0];
    counter = 0;
    quantity = 0;
    isStarted = false;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, cw, ch);
    ctx.fillStyle = "#fff";
    ctx.fillRect(points[0][0],points[0][1],1,1);
    ctx.fillRect(points[1][0],points[1][1],1,1);
    ctx.fillRect(points[2][0],points[2][1],1,1);
    counterInput.value = counter;
}

drawTriangle = () => {
    let random = Math.floor(Math.random()*3);
    let nextPoint = points[random];
    let destination = [
        Math.floor((startPoint[0]+nextPoint[0]) / 2),
        Math.floor((startPoint[1]+nextPoint[1]) / 2),
    ];
    startPoint = [destination[0], destination[1]];
    ctx.fillRect(destination[0],destination[1],1,1);
    counter++;
    counterInput.value = counter;
    if(quantity<counter) clearInterval(triangleInterval);
    
}   

start = () => {
    if (isStarted) {
        return 0;
    }
    isStarted = true;
    quantity = document.getElementById('quantity').value;
    triangleInterval = setInterval(drawTriangle,1);
}

reset = () => {
    isStarted = false;
    clearInterval(triangleInterval);
    init();
}

openPage = () => {
    let wrapper = document.getElementById("wrapper");
    let leftMenu = document.getElementById("leftMenu");
    let canvasContainer = document.getElementById("canvasContainer");
    wrapper.classList.add("wrapperUp");
    menuContainer.classList.add("leftMenuAnimation");
    canvasContainer.classList.add("canvasAnimation");
}