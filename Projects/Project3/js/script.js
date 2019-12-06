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

// the array for the ore
let numOre = 4
let ore = []

// the array for the walls
let numWalls = 3;
let wall = []

//images
let goldOre;
let mouse;
let goodCat;
let badCat;


function preload() {
  // load images

  goldOre = loadImage("assets/images/goldOre.png");
  mouse = loadImage("assets/images/mouse.png");
  goodCat = loadImage("assets/images/kittyCat.png");
  badCat = loadImage("assets/images/kittyCat3.png");

}

function setup() {
  createCanvas(1000, 900);
  bob = new Player(100, 100, 50, 10, goodCat);
  badGuy = new Enemy(500, 100, 10, 50, badCat);
  healthKit = new HealthPack(200, 200, 50);
  walls = new Wall(500, 500, 100, mouse);
  gold = new Ore(100, 100, 25, goldOre);


//array for the ore
for (let i = 0; i < numOre; i++){
      let oreX = random(0, width - 200);
      let oreY = random(0, height - 200);
      let oreSize = random([10, 15, 20, 25]);
   ore.push(new Ore(oreX, oreY, oreSize, goldOre));
}

   for (let i = 0; i < numWalls; i++){
         let wallX = random(0, width - 100);
         let wallY = random(0, height - 100);
         let wallSize = random([100, 125, 140, 150]);
    wall.push(new Wall(wallX, wallY, wallSize, mouse));

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
    background(0);



    walls.display();


    bob.movement();
    bob.handleCollision();
    bob.display();
    bob.handlePickUp(gold);



    gold.display();

    //walls.handleSpeed(bob);
    bob.handleSpeed(walls);

    healthKit.display();
    healthKit.handleRegen(bob);

    badGuy.move();
    badGuy.display();
    badGuy.handlePickUp(gold);
    badGuy.handleEating(bob)




// display the ore array
    for (let i = 0; i < ore.length; i++) {
          ore[i].display();
          bob.handlePickUp(ore[i]);

}
        for (let i = 0; i < wall.length; i++) {
              wall[i].display();
              //wall[i].handleSpeed(bob);
              bob.handleSpeed(walls);
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
