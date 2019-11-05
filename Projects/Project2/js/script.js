// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger;

// The three prey
let antelope;
let zebra;
let bee;

let frank;

let evilGuy;

let gameStart = false;

let numPrey = 3;
let prey = []



let ghost;
let kittyCat;
let clown;

function preload() {

    ghost = loadImage("assets/images/ghost.png.png");
   kittyCat = loadImage("assets/images/kittyCat.png");
    clown = loadImage("assets/images/clown.png");

}




// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 10, color(200, 200, 0), 80, 3);

  evilGuy = new Hunter(500, 500, 20, color(0, 0, 200), 100, 5);

  antelope = new Prey(100, 100, 10, clown, 50, 2);
  zebra = new Prey(100, 100, 8, kittyCat, 60, 2);
  bee = new Prey(100, 100, 20, ghost, 10, 2);

  frank = new Mosquito(windowWidth / 2, windowHeight / 2, color(255, 0, 0), 150, 2);


  for (let i = 0; i < numPrey; i++) {
    let preyX = random(0, width);
    let preyY = random(0, height);
    let preySpeed = random(2, 20);
    let preyRadius = random(10, 60);
    let preySlowSpeed = random(1, 5);
    prey.push(new Prey(preyX, preyY, preySpeed, clown, preyRadius, preySlowSpeed));
    prey.push(new Prey(preyX, preyY, preySpeed, kittyCat, preyRadius, preySlowSpeed));
    prey.push(new Prey(preyX, preyY, preySpeed, ghost, preyRadius, preySlowSpeed));

  }

}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {

  if (gameStart === false) {
    titleScreen();
  } else {
    // Clear the background to black
    background(0);

    // Handle input for the tiger
    tiger.handleInput();

    // Move all the "animals"
    tiger.move();

    evilGuy.move();

    antelope.move();
    zebra.move();
    bee.move();

    // Handle the tiger eating any of the prey
    tiger.handleEating(antelope);
    tiger.handleEating(zebra);
    tiger.handleEating(bee);

    frank.handleSpeed(antelope);
    frank.handleSpeed(zebra);
    frank.handleSpeed(bee);
    frank.handleSpeed(tiger);

    // Display all the "animals"

        antelope.display();
        zebra.display();
        bee.display();


    frank.display();

    tiger.display();

    evilGuy.display();



    for (let i = 0; i < prey.length; i++) {
      prey[i].move();
      prey[i].display();
      tiger.handleEating(prey[i]);
    }



    tiger.handleDeath();
  }

}

function titleScreen() {
  background(0)

  fill(255);
  textAlign(CENTER, TOP);
  textSize(50);
  text("TITLE", windowWidth / 2, 100);
  text("Click to Start Game", windowWidth / 2, windowHeight / 2);

}

function mousePressed() {
  if (gameStart === false) {
    gameStart = true;
  }
}
