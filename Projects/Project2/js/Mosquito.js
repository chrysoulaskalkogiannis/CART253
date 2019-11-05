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

handleSpeed(other) {
  // Calculate distance from this predator to the prey
  let d = dist(this.x, this.y, other.x, other.y);
  // Check if the distance is less than their two radii (an overlap)
  if (d < other.radius + this.radius) {
    // Decrease prey health by the same amount
    other.speed = other.slowSpeed;
  }
else  {
 other.speed = other.normalSpeed;
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
