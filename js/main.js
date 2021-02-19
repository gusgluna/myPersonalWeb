'use sctrict'
var mainCanvas = document.querySelector("#mainCanvas");
var spanX = document.getElementById("posX");
var spanY = document.getElementById("posY");
var spanmcHeight = document.getElementById("mcHeight");
var spanmcWidth = document.getElementById("mcWidth");
var ship = document.getElementById("ship");
var spanAngle = document.getElementById("spanAngle");

function mousePositionMC(){
    mainCanvas.addEventListener('mousemove', function(e){
        //console.log(`La posicion X: ${e.x}, La posicion Y: ${e.y}`); 
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
        ship.style.top = `${mainCanvasPos.height/2 - 25}px`;
    })
};

function rotateShip(){
    let mainCanvasPos = mainCanvas.getBoundingClientRect();
    
}

mousePositionMC();
centerMainCanvas();




