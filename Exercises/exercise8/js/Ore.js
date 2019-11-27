class Ore {
  constructor(size) {
    this.x = random(0, 900);
    this.y = random(0, 825);

    this.size = size;
  }

  // displays the ore as a small pink rectangle
  display() {
    push();
    fill(255, 60, 100);
    rect(this.x, this.y, this.size * 2, this.size * 2);

    pop();
  }

  // resets ore to random location when called
  reset() {
    this.x = random(0, 1000);
    this.y = random(0, 900);
  }
}
