class Enemy {

  constructor(x, y, speed, size) {

    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;
    this.speed = speed;

    this.tx = random(0, 100);
    this.ty = random(0, 100);

this.score = 0;

    this.size = size;
  }

  // move
  //
  // Sets velocity based on the noise() function and the Prey's speed
  // Moves based on the resulting velocity and handles wrapping
  move() {   ///// Fixed spelling for move
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
      if (this.x < 0) {  /////// Fixed x < 0
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
        this.y -= height; /////// Fixed height spelling
      }
    }

    handlePickUp(ore){

      let d = dist(this.x, this.y, ore.x, ore.y);
      if (d < ore.size + this.size){
        this.score = this.score + ore.size;
        ore.size === 0;
        ore.reset();
  }
}

    // display
    //
    // Draw the prey as an ellipse on the canvas
    // with a radius the same size as its current health.
    display() {
      push();
      noStroke();
      fill(255,25,85);
      rect(this.x, this.y, this.size*2, this.size*2); /////// Fixed 2 instead of "two"
      pop();


      push();
      noStroke();
      fill(255, 255, 255);
      textAlign(CENTER, TOP);
      textSize(20);
      text("Score",800, 50);
      text(this.score, 800, 80);



      pop();
    }

    // reset
    //
    // Set the position to a random location and reset health
    // and radius back to default
    reset() {
      // Random position
      this.x = random(0, width);
      this.y = random(0, height);

    }
  }
