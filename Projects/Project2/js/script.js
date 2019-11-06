// Kitty Collect
// by Chrysoula Skalkogiannis
/*
Unwind and collect kittens!

Watch out for the bed in the center, the cats like
to sleep in it.

*/

// Our predator
let tiger;

// The three prey
let ladyCat;
let mrKitty;
let puffy;
//bed
let bed;
//our mouse to distract the player
let mouseDictract;
//check is game is playing
let gameStart = false;
//our array
let numPrey = 3;
let prey = []
//Images
let ghost;
let kittyCat;
let kittyCat2;
let kittyCat3;
let clown;
let bedForCat;
let mouse
let floor;

// sound
let mainMusic;

function preload() {

  ghost = loadImage("assets/images/ghost.png.png");
  kittyCat = loadImage("assets/images/kittyCat.png");
  clown = loadImage("assets/images/clown.png");
  kittyCat2 = loadImage("assets/images/kittyCat2.png");
  kittyCat3 = loadImage("assets/images/kittyCat3.png");
  floor = loadImage("assets/images/floor.jpg");
  bedForCat = loadImage("assets/images/catBed.png");
  mouse = loadImage("assets/images/mouse.png");

  mainMusic = loadSound("assets/sounds/calmingMusic.wav");
}
// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  //our main level music
  mainMusic.setVolume(0.2);
  mainMusic.loop();
  // our player
  tiger = new Predator(100, 100, 7, color(200, 200, 0), 80, 3);
  //our mouse
  mouseDictract = new Distractor(500, 500, 20, mouse, 100, 20);
  //our 3 kittens
  ladyCat = new Prey(100, 100, 10, kittyCat, 50, 2);
  mrKitty = new Prey(100, 100, 8, kittyCat2, 60, 2);
  puffy = new Prey(100, 100, 20, kittyCat3, 10, 2);
  // the bed that slows down player and cats
  bed = new CatBed(windowWidth / 2, windowHeight / 2, bedForCat, 250, 2);

  //array for 3 cats
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
    // shows the main background and game
    background(floor);

    // Handle input for the tiger
    tiger.handleInput();

    // Move all the "animals"
    tiger.move();
    mouseDictract.move();
    ladyCat.move();
    mrKitty.move();
    puffy.move();

    // Handle the tiger eating any of the prey
    tiger.handleEating(ladyCat);
    tiger.handleEating(mrKitty);
    tiger.handleEating(puffy);

    //Handle the slow speed for the animals
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
    mouseDictract.display();

    //array to display multiple
    for (let i = 0; i < prey.length; i++) {
      prey[i].move();
      prey[i].display();
      tiger.handleEating(prey[i]);
    }
    //handles the main player death
    tiger.handleDeath();
  }
}
// our main menu
function titleScreen() {
  background(floor);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(100);
  text("Kitty Collect", windowWidth / 2, 100);
  textSize(50);
  text("Click to start the game and unwind while collecting kitties", windowWidth / 2, windowHeight / 2);
  text("Watch out for the kitty bed! It's super comfy", windowWidth / 2, windowHeight / 3);

}
// starts the game on mouse pressed
function mousePressed() {
  if (gameStart === false) {
    gameStart = true;
  }
}
