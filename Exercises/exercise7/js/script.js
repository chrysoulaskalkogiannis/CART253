"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let x = 100;
let y = 100;

let vx = 0;
let vy = 0;

let playerSpeed = 10;

function setup() {
createCanvas(500,500);
}


// draw()
//
// Description of draw()

function draw() {
background(0);
player();
maze();


}

function player(){

  push();
  fill(255,0,0);
  ellipse(x,y,100);
  pop();

    x += vx;
    y += vy;

  if (keyIsDown(LEFT_ARROW)) {
vx = -playerSpeed;
   }
   else if (keyIsDown(RIGHT_ARROW)) {
     vx = playerSpeed;
   }
   else {
     vx = 0;
   }
   // Vertical movement
   if (keyIsDown(UP_ARROW)) {
     vy = -playerSpeed;
   }
   else if (keyIsDown(DOWN_ARROW)) {
     vy = playerSpeed;
   }
   else {
     vy = 0;
   }
 }



function maze(){
  push();
fill(0,255,0);
rect(200,200,25,50);
pop();
}




// make small maze
//impliment enemy class
// enemy movement
