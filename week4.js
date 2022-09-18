/*
    Paste the code for your week 4 exercise below.
*/

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
}

function draw() {
  /*using the 'if' function, I will 
  be able to change the colour of the 
  logo's eyes. The rest of the logo will
  remain static, shown in the code.*/
  if (keyIsPressed===true) {
    //code for the blue eyes
    clear();
    background(0);
    angleMode(DEGREES);
    fill(255)
    //head
    circle((displayWidth/2), (displayHeight/1.5), 250);
    noStroke();
    //ears
    ellipse(640, 380, 60, 400);
    ellipse(800, 380, 60, 400);
    //eyes
    fill('blue');
    rotate(20.0);
    ellipse(840, 400, 40, 10);
    rotate(-40.0);
    ellipse(520, 895, 40, 10);
    rotate(20.0)
    //text
    textSize(30);
    text('Press SPACE', 625, 800);
  } else {
    //code for the red eyes
    clear();
    background(0);
    angleMode(DEGREES);
    fill(255)
    //head
    circle((displayWidth/2), (displayHeight/1.5), 250);
    noStroke();
    //ears
    ellipse(640, 380, 60, 400);
    ellipse(800, 380, 60, 400);
    //eyes
    fill('red');
    rotate(20.0);
    ellipse(840, 400, 40, 10);
    rotate(-40.0);
    ellipse(520, 895, 40, 10);
    rotate(20.0)
    //text
    textSize(30);
    text('Press SPACE', 625, 800);
  }
}

