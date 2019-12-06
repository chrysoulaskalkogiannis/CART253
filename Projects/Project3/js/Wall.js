class Wall {
  constructor(x, y, size, speed, image) {

    this.x = x;
    this.y = y;

    this.speed = speed;

    this.tx = random(0, 100);
    this.ty = random(0, 100);

    this.vx = 0;
    this.vy = 0;

    this.size = size;
    this.image = image;

  }


  handleSpeed(player) {
    // Calculate distance from this wall to the player
    let d = dist(this.x, this.y, player.x, player.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < player.size + this.size) {
      // slows down the player when overlapping
      player.speed = player.slowSpeed;
    } else {

      // back to normal speed when not overlapping
      player.speed = player.normalSpeed;
    }
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

  // displays the wall as an image
  display() {
    push();

    image(this.image, this.x, this.y, this.size*2, this.size*2)
    pop();

  }
}
