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

let wallMouse;

let badGuy;

let gameStart = false;

// the array for the ore
let numOre = 14
let ore = []

let wallNum = 3
let wallsArray = [];

//images
let goldOre;
let mouse;
let goodCat;
let badCat;
let health;

// sounds
let pickUpSound;
let enemyPickUpSound;
let heal;
let mainSong;

//background images
let goldMine


function preload() {
  // load images
  goldOre = loadImage("assets/images/goldOre.png");
  mouse = loadImage("assets/images/mouse.png");
  goodCat = loadImage("assets/images/kittyCat.png");
  badCat = loadImage("assets/images/kittyCat3.png");
  health = loadImage("assets/images/healthPack.png");

  goldMine = loadImage("assets/images/tunnel.jpg");

// load sounds
  pickUpSound = loadSound("assets/sounds/goldPickUp.wav");
  enemyPickUpSound = loadSound("assets/sounds/EnemyPickUp.wav");
  heal = loadSound("assets/sounds/HealthPickUp.wav");
  mainSong = loadSound("assets/sounds/MainLevelSong.wav");

}

function setup() {
mainSong.loop();
mainSong.setVolume(0.4);

  createCanvas(windowWidth, windowHeight);
  bob = new Player(100, 100, 50, 10, goodCat);
  badGuy = new Enemy(500, 100, 10, 100, badCat);
  healthKit = new HealthPack(200, 200, 50, health);
  wallMouse = new Wall(500, 500, 100, 10, mouse);
  gold = new Ore(100, 100, 25, goldOre);


//array for the ore
for (let i = 0; i < numOre; i++){
      let oreX = random(0, width);
      let oreY = random(0, height);
      let oreSize = random([15, 20, 25, 30]);
   ore.push(new Ore(oreX, oreY, oreSize, goldOre));
}

// array for the walls
for (let i = 0; i < wallNum; i++){
      let wallsArrayX = random(0, width - 200);
      let wallsArrayY = random(0, height - 200);
      let wallsArraySize = random([100, 130, 160, 190]);
      let wallsArraySpeed = random(5,10);
   wallsArray.push(new Wall(wallsArrayX, wallsArrayY, wallsArraySize, wallsArraySpeed, mouse));
}

}

// draw()
//
// Description of draw()

function draw() {

  if (gameStart === false) {
    titleScreen();
  } else {
    // shows the main background and game
    background(goldMine);



   wallMouse.display();
   wallMouse.move();

    bob.movement();
    bob.handleCollision();
    bob.display();
    bob.handlePickUp(gold);





    wallMouse.handleSpeed(bob);
    //bob.handleSpeed(walls);

    healthKit.display();
    healthKit.handleRegen(bob);

    badGuy.move();

    badGuy.handlePickUp(gold);
    badGuy.handleEating(bob)
badGuy.display();
gold.display();

// display the ore array
    for (let i = 0; i < ore.length; i++) {
          push();
          ore[i].display();
          bob.handlePickUp(ore[i]);
          badGuy.handlePickUp(ore[i]);
          pop();
}


  bob.speed = bob.normalSpeed;
  for (let i = 0; i < wallsArray.length; i++) {
        push();
        wallsArray[i].display();
          bob.display();
        wallsArray[i].handleSpeed(bob);
        wallsArray[i].move();

        pop()
}

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
  background(goldMine);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(100);
  text("MINING KITTY", width / 2, 100);
  textSize(35);
  text("Be the first to reach 1000 points before the enemy does", width / 2, height / 4);
textSize(25);
  text("The mice will slow you down and distract you", width / 2, height / 3);
  text("The black cat will attack if you get too close", width / 2, height / 2.5);
  text("If you get hurt, the health pack will heal you", width / 2, height / 2);
  text("Use the up, down, left, right arrows to move", width / 2, height / 1.75);
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
  background(goldMine);

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
