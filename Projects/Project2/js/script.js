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

let gameStart = false;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 10, color(200, 200, 0), 80);

  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);

  frank = new Mosquito(windowWidth/2,windowHeight/2, color(255, 0, 0),200, 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {

if (gameStart === false){
titleScreen();
}
else {
  // Clear the background to black
  background(0);

  // Handle input for the tiger
  tiger.handleInput();

  // Move all the "animals"
  tiger.move();
  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  frank.handleEating(antelope);
  frank.handleEating(zebra);
  frank.handleEating(bee);
  frank.handleEating(tiger);

  // Display all the "animals"
frank.display();

  tiger.display();
  antelope.display();
  zebra.display();
  bee.display();



  tiger.handleDeath();
}

}

function titleScreen(){
background(0)

fill(255);
  textAlign(CENTER,TOP);
  textSize (50);
  text("TITLE",windowWidth/2, 100);
  text("Click to Start Game",windowWidth/2,windowHeight/2);

}

function mousePressed(){
  if (gameStart === false){
    gameStart = true;
  }
}
