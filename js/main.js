'use sctrict'
var mainCanvas = document.querySelector("#mainCanvas");
var spanX = document.getElementById("posX");
var spanY = document.getElementById("posY");
var spanmcHeight = document.getElementById("mcHeight");
var spanmcWidth = document.getElementById("mcWidth");
var ship = document.getElementById("ship");
var spanAngle = document.getElementById("spanAngle");
var spanClickX = document.getElementById("spanClickX");
var spanClickY = document.getElementById("spanClickY");


function rotateShip(){
    mainCanvas.addEventListener('mousemove', function(e){
        var mainCanvasPos = mainCanvas.getBoundingClientRect();
        let relativeXpos = e.x-mainCanvasPos.left - mainCanvasPos.width/2;
        let relativeYpos = mainCanvasPos.height/2-(e.y-mainCanvasPos.top);
        let angleDeg = (((Math.atan2(relativeYpos, relativeXpos))*180)/Math.PI)*(-1) + 180;
        spanX.textContent = Math.floor(relativeXpos);
        spanY.textContent = Math.floor(relativeYpos);
        spanAngle.textContent = Math.floor(angleDeg);
        ship.style.transform = `rotate(${Math.floor(angleDeg)+90}deg)`
    });
};


var mainCanvasPos = mainCanvas.getBoundingClientRect();
ship.style.left = `${mainCanvasPos.width/2 - 25}px`;
ship.style.top = `${mainCanvasPos.height/2 - 25}px`;

function centerMainCanvas(){
    var mainCanvasPos = mainCanvas.getBoundingClientRect();
    spanmcHeight.textContent = Math.floor(mainCanvasPos.height);
    spanmcWidth.textContent = Math.floor(mainCanvasPos.width);
    window.addEventListener('resize', function(){
        let mainCanvasPos = mainCanvas.getBoundingClientRect();
        spanmcHeight.textContent = Math.floor(mainCanvasPos.height);
        spanmcWidth.textContent = Math.floor(mainCanvasPos.width);
        ship.style.left = `${mainCanvasPos.width/2 - 25}px`;
        ship.style.top = `${mainCanvasPos.height/2 - 50}px`;
    })
};


function shot(){
    mainCanvas.addEventListener('click', function(c){
        let mainCanvasPos = mainCanvas.getBoundingClientRect();
        let posX = c.clientX - mainCanvasPos.left;
        let posY = c.clientY - mainCanvasPos.top;
        spanClickX.textContent = Math.floor(posX);
        spanClickY.textContent = Math.floor(posY);
        let projectile = document.createElement('div');
        projectile.className = "projectile";
        projectile.style.left = `${posX + mainCanvasPos.left}px`;
        projectile.style.top = `${posY + mainCanvasPos.top}px`;
        mainCanvas.appendChild(projectile);
        
    })
};

rotateShip();
centerMainCanvas();
shot();




