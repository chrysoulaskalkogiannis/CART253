/*

class is used to slow down player

*/

class Mosquito {

  constructor(x, y, fillColor, radius, healthLoss) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed

    // Display properties
    this.fillColor = fillColor;
    this.radius = radius;

    this.healthLoss = healthLoss;

}

/*  handleEating(prey) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, prey.x, prey.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < this.radius + prey.radius) {
      // Decrease prey health by the same amount
      prey.health -= this.healthLoss;
      // Check if the prey died and reset it if so
    if (prey.health < 0) {
      prey.reset();
      }
    }
  } */

  handleEating(predator) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, predator.x, predator.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < predator.radius + this.radius) {
      // Decrease prey health by the same amount
      predator.speed = predator.slowSpeed;
    }
    if (d > predator.radius + this.radius)  {
      predator.slowSpeed = predator.normalSpeed;
    }
  }

  display() {
    push();
    noStroke();
    fill(this.fillColor);
    ellipse(this.x, this.y, this.radius * 2);
    pop();

}

}
