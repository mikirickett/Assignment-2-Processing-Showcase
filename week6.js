function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
}

//setting values for 
let youX=700;
let youY=400;

function draw() {
  //code for the player's character 
  if (keyIsDown(UP_ARROW)) {
    youY-=5;
  } if (keyIsDown(DOWN_ARROW)) {
    youY+=5;
  } if (keyIsDown(LEFT_ARROW)) {
    youX-=5;
  } if (keyIsDown(RIGHT_ARROW)) {
    youX+=5;
  } 
  clear();
  background(0);

  //the player's character
  fill('green');
  stroke(0);
  circle(youX, youY, 28);

  //background text/game aim
  stroke(0);
  textSize(60);
  text('Find the Hidden Word', 430, 200); 
  textSize(20);
  text('Use the arrows to move your torch. Find the hidden word to escape the Matrix.', 380, 300);

  //hidden word
  fill(0); 
  textSize(8);
  text('Red Pill', 420, 690);
}
