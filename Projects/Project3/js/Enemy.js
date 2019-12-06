class Enemy {

  constructor(x, y, speed, size, image) {

    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;
    this.speed = speed;

    this.image = image;

    this.tx = random(0, 100);
    this.ty = random(0, 100);

    this.score = 0;

    this.size = size;
  }

  // move
  //
  // Sets velocity based on the noise() function and the Prey's speed
  // Moves based on the resulting velocity and handles wrapping
  move() {
    // Set velocity via noise()
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Update time properties
    this.tx += 0.01;
    this.ty += 0.01;
    // Handle wrapping
    this.handleWrapping();
  }


  // handles the screen wrapping
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

  // handles picking up the ores
  handlePickUp(ore) {

    let d = dist(this.x, this.y, ore.x, ore.y);
    if (d < ore.size + this.size) {
      this.score = this.score + ore.size *2;
      ore.size === 0;
      ore.reset();
    }
  }

  //  handles the health loss of the player when overlapping
  handleEating(player) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, player.x, player.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < this.size + player.size) {
      // Decreat player health on overlap
      player.health = player.health - 1;
    }
  }

  // display
  //
  // Draw the enemy  on the canvas
  display() {
    push();
    noStroke();
    image(this.image, this.x, this.y, this.size * 2, this.size * 2);
    pop();

    // draws the enemy points system
    push();
    noStroke();
    fill(255, 255, 255);
    textAlign(CENTER, TOP);
    textSize(20);
    text("Score", 800, 50);
    text(this.score, 800, 80);
    pop();
  }

  // reset
  //
  // Set the position to a random location
  reset() {
    this.x = random(0, width);
    this.y = random(0, height);

  }
}
