class Wall {
  constructor(x, y, size) {

    this.x = x;
    this.y = y;

    this.size = size;

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

  // displays the wall as a blue square
  display() {
    push();
    fill(0, 0, 200);
    rect(this.x, this.y, this.size, this.size)
    pop();

  }
}
