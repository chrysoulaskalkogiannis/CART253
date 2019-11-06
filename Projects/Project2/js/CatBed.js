/*

class is used to slow down player

*/

class CatBed {

  constructor(x, y, image, radius, healthLoss) {
    // Position
    this.x = x;
    this.y = y;
    //display properties
    this.radius = radius;
    this.image = image;
    this.healthLoss = healthLoss;
  }

  // slows down the player and cats that walk across it
  handleSpeed(other) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, other.x, other.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < other.radius + this.radius) {
      // Decrease prey health by the same amount
      other.speed = other.slowSpeed;
    } else {
      other.speed = other.normalSpeed;
    }
  }
  // display of the cat bed
  display() {
    push();
    noStroke();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
  }
}
