// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger;

// The three prey
let ladyCat;
let mrKitty;
let puffy;

let bed;

let evilGuy;

let gameStart = false;

let numPrey = 3;
let prey = []


//Images
let ghost;
let kittyCat;
let kittyCat2;
let kittyCat3;
let clown;
let bedForCat;

let floor;

let mainMusic;

function preload() {

    ghost = loadImage("assets/images/ghost.png.png");
   kittyCat = loadImage("assets/images/kittyCat.png");
    clown = loadImage("assets/images/clown.png");
    kittyCat2 = loadImage("assets/images/kittyCat2.png");
    kittyCat3 = loadImage("assets/images/kittyCat3.png");
    floor = loadImage("assets/images/floor.jpg");
    bedForCat = loadImage("assets/images/catBed.png");

    mainMusic = loadSound("assets/sounds/calmingMusic.wav");

}




// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);

  mainMusic.setVolume(0.2);
    mainMusic.loop();

  tiger = new Predator(100, 100, 7, color(200, 200, 0), 80, 3);

  evilGuy = new Distractor(500, 500, 20, color(0, 0, 200), 100, 20);

  ladyCat = new Prey(100, 100, 10, kittyCat, 50, 2);
  mrKitty = new Prey(100, 100, 8, kittyCat2, 60, 2);
  puffy = new Prey(100, 100, 20, kittyCat3, 10, 2);

  bed = new CatBed(windowWidth / 2, windowHeight / 2, bedForCat, 250, 2);


  for (let i = 0; i < numPrey; i++) {
    let preyX = random(0, width);
    let preyY = random(0, height);
    let preySpeed = random(2, 20);
    let preyRadius = random(10, 40);
    let preySlowSpeed = 1;
    prey.push(new Prey(preyX, preyY, preySpeed, kittyCat, preyRadius, preySlowSpeed));
    prey.push(new Prey(preyX, preyY, preySpeed, kittyCat2, preyRadius, preySlowSpeed));
    prey.push(new Prey(preyX, preyY, preySpeed, kittyCat3, preyRadius, preySlowSpeed));

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
    background (floor);

    // Handle input for the tiger
    tiger.handleInput();

    // Move all the "animals"
    tiger.move();

    evilGuy.move();

    ladyCat.move();
    mrKitty.move();
    puffy.move();

    // Handle the tiger eating any of the prey
    tiger.handleEating(ladyCat);
    tiger.handleEating(mrKitty);
    tiger.handleEating(puffy);

    bed.handleSpeed(ladyCat);
    bed.handleSpeed(mrKitty);
    bed.handleSpeed(puffy);
    bed.handleSpeed(tiger);

    // Display all the "animals"

bed.display();

        ladyCat.display();
        mrKitty.display();
        puffy.display();




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
  background(floor);

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
