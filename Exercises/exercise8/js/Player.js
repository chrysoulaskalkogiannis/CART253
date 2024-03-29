class Player {


  constructor(x, y, size, speed) {
    this.x = x;
    this.y = x;

    this.size = size;

    this.vx = 0;
    this.vy = 0;

    this.speed = speed;
    this.slowSpeed = speed - 7
    this.normalSpeed = speed

    this.health = 100;
    this.maxHealth = 100;

    this.score = 0;

  }

  // player input
  movement() {
    this.x += this.vx;
    this.y += this.vy;

    // horizontal movement
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    // Vertical movement
    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
  }

  // handles the collision of the canvas boarders
  handleCollision() {

    if (this.x < 0) {
      this.vx = +this.speed;
    } else if (this.x > width - this.size * 2) {
      this.vx = -this.speed;
    } else if (this.y < 0) {
      this.vy = +this.speed;
    } else if (this.y > height - this.size * 2) {
      this.vy = -this.speed;
    }
  }

  //handles picking up the ores and adding points.
  handlePickUp(ore) {

    let d = dist(this.x, this.y, ore.x, ore.y);
    if (d < ore.size + this.size) {
      this.score = this.score + ore.size;
      ore.size === 0;
      ore.reset();
    }
  }

  //handles the player display and UI display for the points and health
  display() {

    push();
    fill(255, 0, 0);
    rect(this.x, this.y, this.size * 2, this.size * 2);
    pop();

    push();
    noStroke();
    fill(255, 255, 255);
    textAlign(CENTER, TOP);
    textSize(20);
    text("Score", 100, 50);
    text(this.score, 100, 80);

    text("Health", 200, 50);
    text(this.health, 200, 80);
    pop();
  }

}
