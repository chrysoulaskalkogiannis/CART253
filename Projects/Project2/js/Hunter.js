/*

class is used to eat prey and player (cannot be killed)

*/

class Hunter {

  constructor(x, y, speed, fillColor, radius) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    // Time properties for noise() function
    this.tx = random(0, 100); // To make x and y noise different
    this.ty = random(0, 100); // we use random starting values
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    // Display properties
    this.fillColor = fillColor;
    this.radius = this.health;
  }

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

  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }

  display() {
    push();
    noStroke();
    fill(this.fillColor);
    this.radius = this.health;
    ellipse(this.x, this.y, this.radius * 2);
    pop();
  }


}
