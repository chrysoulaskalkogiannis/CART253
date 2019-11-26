"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/



let bob;

let healthKit;

let gold;

let walls;

let badGuy;

let gameStart = false;

function setup() {
createCanvas(1000, 900);
bob = new Player(100, 100, 50, 10);
badGuy = new Enemy(500,100,10, 50);
healthKit = new HealthPack(200, 200, 50);
walls = new Wall(500, 500, 100);
gold = new Ore(25);



}


// draw()
//
// Description of draw()

function draw() {

if (gameStart === false) {
    titleScreen();
  } else {
    // shows the main background and game
background(0);

walls.display();
walls.handleSpeed(bob);

bob.movement();
bob.handleCollision();
bob.display();

gold.display();
healthKit.display();
healthKit.handleRegen(bob);

bob.handlePickUp(gold);

//walls.handleWall(bob);


badGuy.move();
badGuy.display();
badGuy.handlePickUp(gold);
badGuy.handleEating(bob)
}

if (bob.health <= 0 || badGuy.score >= 1000){
gameOver();

}

if (bob.score >= 1000){
win();

}

}
function titleScreen() {
  background(255,0,0);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(100);
  text("GAME", width / 2, 100);
  textSize(50);
  text("Click to start the game", width / 2, height / 2);
  text("INFO", width / 2, height / 3);
}

function gameOver() {
  background(0);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(100);
  text("GAME OVER", width / 2, 100);
  textSize(50);
  text("Refresh to play again", width / 2, height / 2);

}

function win() {
  background(0);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(100);
  text("YOU WIN", width / 2, 100);
  textSize(50);
  text("Refresh to play again", width / 2, height / 2);

}


// starts the game on mouse pressed
function mousePressed() {
  if (gameStart === false) {
    gameStart = true;
  }
}
