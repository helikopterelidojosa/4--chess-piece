window.addEventListener("load", () =>{

    //this work is about to make a moving game piece movable with mouse


    //establishing canvas
var canvas = document.getElementById("myCanvas");
let cw = 400;
let ch = 100;
canvas.width = cw;
canvas.height = ch;
var ctx = canvas.getContext("2d");


//colors
var colorBlack =    "black";
var colorWhite =    "white";
var colorYellow =   "yellow";
var colorRed =      "red";
var colorBlue =     "blue";


//drawing backgr squares
function back1(){
    ctx.fillStyle = colorWhite;
    ctx.fillRect(0,0,100,100);
    ctx.fill(); 
};

function back2(){
    ctx.fillStyle = colorBlack;
    ctx.fillRect(100,0,100,100);
    ctx.fill(); 
};

function back3(){
    ctx.fillStyle = colorWhite;
    ctx.fillRect(200,0,100,100);
    ctx.fill(); 
};

function back4(){
    ctx.fillStyle = colorBlack;
    ctx.fillRect(300,0,100,100);
    ctx.fill(); 
};

//drawing board
back1();
back2();
back3();
back4();


//drawing movenment squares

function startSquare(x){
    ctx.fillStyle = colorYellow;
    ctx.fillRect(x,0,100,100);
    ctx.fill(); 
};

function endSquare(x){
    ctx.fillStyle = colorRed;
    ctx.fillRect(x,0,100,100);
    ctx.fill(); 
};

function blackSquare(x){
    ctx.fillStyle = colorBlack;
    ctx.fillRect(x,0,100,100);
    ctx.fill(); 
};

function whiteSquare(x){
    ctx.fillStyle = colorWhite;
    ctx.fillRect(x,0,100,100);
    ctx.fill(); 
};



//variables for movenments
let gx;
let x1;
let x2;

//drawing gamepiece
function gamePiece(x){
    ctx.fillStyle = colorBlue;
    ctx.fillRect(x + 20,20,60,60);
    ctx.fill(); 
};
gamePiece(0);
gamePiece(100);

function startMoving(e){

 //making average for client coordinates
    switch (Math.ceil((e.clientX) / 100)){

        case 1: x1 = 0; break;
        case 2: x1 = 100; break;
        case 3: x1 = 200; break;
        case 4: x1 = 300; break;
    };

    //showing start of the move
    
        startSquare(x1);
        gamePiece(x1)
   
    


};

    function endMoving(e){

            //averaging client coordinates
        switch (Math.ceil((e.clientX) / 100)){
    
            case 1: x2 = 0; break;
            case 2: x2 = 100; break;
            case 3: x2 = 200; break;
            case 4: x2 = 300; break;
        };

        
        


        //return background color if move into different
        if(x1 !== x2){

            switch (x1){

            case 0: whiteSquare(0); break;
            case 100: blackSquare(100); break;
            case 200: whiteSquare(200); break;
            case 300: blackSquare(300); break;
            };

            endSquare(x2);
            gamePiece(x2);
        };

        if(x1 == x2){

            switch (x1){

            case 0:   whiteSquare(0); break;
            case 100: blackSquare(100); break;
            case 200: whiteSquare(200); break;
            case 300: blackSquare(300); break;
            };

            gamePiece(x1);
        };
        
    };


    
    



canvas.addEventListener('mouseup', endMoving);
canvas.addEventListener("mousedown", startMoving);
//canvas.addEventListener('mousemove', movingMoving);


});