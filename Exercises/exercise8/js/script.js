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





bob.movement();
bob.handleCollision();
bob.display();

gold.display();
healthKit.display();

bob.handlePickUp(gold);

//walls.handleWall(bob);
walls.display();
walls.handleSpeed(bob);

badGuy.move();
badGuy.display();
badGuy.handlePickUp(gold);
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
// starts the game on mouse pressed
function mousePressed() {
  if (gameStart === false) {
    gameStart = true;
  }
}
