"use strict";

/*****************

Title of Project
By; Chrysoula Skalkogiannis

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
  badGuy = new Enemy(500, 100, 10, 50);
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
    bob.handlePickUp(gold);

    gold.display();

    healthKit.display();
    healthKit.handleRegen(bob);

    badGuy.move();
    badGuy.display();
    badGuy.handlePickUp(gold);
    badGuy.handleEating(bob)
  }


  // display gameOver screen
  if (bob.health <= 0 || badGuy.score >= 1000) {
    gameOver();

  }

  // display win screen
  if (bob.score >= 1000) {
    win();

  }
}
// code for main menu
function titleScreen() {
  background(0);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(100);
  text("GAME", width / 2, 100);
  textSize(25);
  text("W,A,S,D to move", width / 2, height / 2);
  text("Be the first to reach 1000 points before the enemy does", width / 2, height / 4);
  text("INFO", width / 2, height / 3);
}

// code for game over screen
function gameOver() {
  background(0);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(100);
  text("GAME OVER", width / 2, 100);
  textSize(50);
  text("Refresh to play again", width / 2, height / 2);

}
// code for win screen
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
