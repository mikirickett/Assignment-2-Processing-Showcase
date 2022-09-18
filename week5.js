/*
    Paste the code for your week 5 exercise below.
*/
function setup(){
    createCanvas(displayWidth, displayHeight);
    background (0);
} 

function draw() {
//set variables for the 'animation'
let codeX=random(0, 1430);
let codeY=0;
while (codeY<900) {
    codeY=codeY+8;
    //the set-up for the random 'matrix code'
    let matrixCode=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'x', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let pickWord=random(matrixCode);
    textSize(15);
    fill('green');
    text(pickWord, codeX, codeY);
}
//text for the hidden message
    fill(0)
    textSize(50)
    text('Follow the White Rabbit', 450, 400)
    textSize(20)
    text('Press Enter', 650, 450)
}

//the reset button
function keyPressed() {
    if (keyCode === ENTER) {
    clear()
    background(0)
    }
}