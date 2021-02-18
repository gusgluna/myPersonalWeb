'use sctrict'
var mainCanvas = document.querySelector("#mainCanvas");
var spanX = document.getElementById("posX");
var spanY = document.getElementById("posY");
var spanmcHeight = document.getElementById("mcHeight");
var spanmcWidth = document.getElementById("mcWidth");
var ship = document.getElementById("ship");

function mousePositionMC(){
    mainCanvas.addEventListener('mousemove', function(e){
        //console.log(`La posicion X: ${e.x}, La posicion Y: ${e.y}`); 
        var mainCanvasPos = mainCanvas.getBoundingClientRect();
        spanX.textContent = Math.floor(e.x-mainCanvasPos.left);
        spanY.textContent = Math.floor(e.y-mainCanvasPos.top);
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

mousePositionMC();
centerMainCanvas();




