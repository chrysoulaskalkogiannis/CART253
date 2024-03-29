// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger;
let lion;

// The three prey
let antelope;
let zebra;
let bee;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);

  // circle player
  tiger = new Predator(100, 100, 5, color(100, 255, 0), 40);

  //square player
  lion = new Predator(100, 50, 5, color(255, 130, 200), 40);

  antelope = new Prey(100, 100, 10, color(255, 130, 10), 50);
  zebra = new Prey(100, 100, 8, color(255, 0, 255), 60);
  bee = new Prey(100, 100, 20, color(55, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  // Handle input for the tiger
  tiger.handleInput();

  lion.handleSecondInput();


  // Move all the "animals"
  tiger.move();
  lion.move();
  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  lion.handleEating(antelope);
  lion.handleEating(zebra);
  lion.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  lion.displayPlayer2();
  antelope.display();
  zebra.display();
  bee.display();
}
