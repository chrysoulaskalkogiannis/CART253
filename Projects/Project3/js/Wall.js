class Wall {
  constructor(x, y, size, image) {

    this.x = x;
    this.y = y;

    this.size = size;
    this.image = image;

  }

/*
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
  */

  // displays the wall as an image
  display() {
    push();
    fill(0, 0, 200);
  image(this.image, this.x, this.y, this.size*2, this.size*2)
    pop();

  }
}
