let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let cw = 800;
let ch = 600;
ctx.fillStyle = "lightgray";
ctx.fillRect(0, 0, cw, ch);

let points = [[cw/2,10],[10,ch-10],[cw-10,ch-10]];
let startPoint = points[0];

ctx.fillStyle = "red";
ctx.fillRect(points[0][0],points[0][1],1,1);
ctx.fillRect(points[1][0],points[1][1],1,1);
ctx.fillRect(points[2][0],points[2][1],1,1);

let counter = 0;
let quantity = 10000;
let delay = 1;

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
    if(quantity<counter) clearInterval(triangleInterval);
    
}

let triangleInterval = setInterval(drawTriangle,delay);



