class Wall {
  constructor(x, y, size) {

    this.x = x;
    this.y = y;

    this.size = size;

}


handleSpeed(player) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, player.x, player.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < player.size + this.size) {
      // Decrease prey health by the same amount
      player.speed = player.slowSpeed;
    } else {
      player.speed = player.normalSpeed;
    }
  }

display(){



push();
fill(0,0,200);
rect(this.x, this.y, this.size, this.size)
pop();

}
}
