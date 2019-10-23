// Predator
//
// A class that represents a simple predator
// controlled by the arrow keys. It can move around
// the screen and consume Prey objects to maintain its health.



/*
  By Chrysoula Skalkogiannis

- Player 1
Up Arrow, Down Arrow, Left Arrow, Right Arrow
Numpad 0 to sprint


- Player 2
  W,A,S,D
  SHIFT to sprint

*/





class Predator {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, speed, fillColor, radius) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    this.normalSpeed = speed;
    this.sprint = 10;

    // Score counter
    this.score = 0;


    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 1;
    // Display properties
    this.fillColor = fillColor;
    this.radius = this.health; // Radius is defined in terms of health
    // Input properties for player 1
    this.upKey = UP_ARROW;
    this.downKey = DOWN_ARROW;
    this.leftKey = LEFT_ARROW;
    this.rightKey = RIGHT_ARROW;
    // numpad 0 for sprint
    this.sprintKey = 96;


    // Input properties for player 2
    this.upKey2 = 87;
    this.downKey2 = 83;
    this.leftKey2 = 65;
    this.rightKey2 = 68;
    // SHIFT key for sprint
    this.sprintKey2 = SHIFT;


  }

  // handleInput
  //
  // Checks if an arrow key is pressed and sets the predator's
  // velocity appropriately.
  handleInput() {
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    } else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    } else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }

    // Sprint for player 1
    if (keyIsDown(this.sprintKey)) {
      this.speed = +this.sprint;
    } else {
      this.speed = this.normalSpeed;
    }

  }


  // input for second player
  handleSecondInput() {

    if (keyIsDown(this.leftKey2)) {
      this.vx = -this.speed;
    } else if (keyIsDown(this.rightKey2)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    // Vertical movement
    if (keyIsDown(this.upKey2)) {
      this.vy = -this.speed;
    } else if (keyIsDown(this.downKey2)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }

    // sprint for player 2
    if (keyIsDown(this.sprintKey2)) {
      this.speed = +this.sprint;
    } else {
      this.speed = this.normalSpeed;
    }
  }



  // move
  //
  // Updates the position according to velocity
  // Lowers health (as a cost of living)
  // Handles wrapping
  move() {
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Update health
    this.health = this.health - this.healthLossPerMove;
    this.health = constrain(this.health, 0, this.maxHealth);
    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // Checks if the predator has gone off the canvas and
  // wraps it to the other side if so
  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
    } else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    } else if (this.y > height) {
      this.y -= height;
    }
  }

  // handleEating
  //
  // Takes a Prey object as an argument and checks if the predator
  // overlaps it. If so, reduces the prey's health and increases
  // the predator's. If the prey dies, it gets reset.
  handleEating(prey) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, prey.x, prey.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < this.radius + prey.radius) {
      // Increase predator health and constrain it to its possible range
      this.health += this.healthGainPerEat;
      this.health = constrain(this.health, 0, this.maxHealth);
      // Decrease prey health by the same amount
      prey.health -= this.healthGainPerEat;
      // Check if the prey died and reset it if so
      if (prey.health < 0) {
        prey.reset();
        this.score = this.score + 1;
      }
    }
  }



  // display
  //
  // Draw the predator as an ellipse on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    noStroke();
    fill(this.fillColor);
    this.radius = this.health;
    ellipse(this.x, this.y, this.radius * 2);
    pop();

    push();
    textFont("Helvetica");
    textSize(50);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(255, 255, 255);
    text((this.score), this.x, this.y);
    pop();
  }

  //Display for player 2 predator
  displayPlayer2() {
    push();
    noStroke();
    fill(this.fillColor);
    this.radius = this.health;
    rectMode(CENTER);
    rect(this.x, this.y, this.radius * 2, this.radius * 2);
    pop();

    textFont("Helvetica");
    textSize(50);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(255, 255, 255);
    text((this.score), this.x, this.y);
    pop();
  }
}
