class Ore {
  constructor(x, y, size, image) {
    this.x = x;
    this.y = y;

    this.size = size;
    this.image = image;
  }

  // displays the ore as a small pink rectangle
  display() {
    push();
  image(this.image, this.x, this.y, this.size * 2, this.size * 2);
    pop();
  }

  // resets ore to random location when called
  reset() {
    this.x = random(0, 800);
    this.y = random(0, 900);
  }
}
