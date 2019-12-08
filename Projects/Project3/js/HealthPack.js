class HealthPack {
  constructor(x, y, size, image) {

    this.x = x;
    this.y = x;

    this.size = size;

    this.image = image;
  }

  handleRegen(player) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, player.x, player.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < player.size + this.size) {
      // increase player health
      player.health = player.health + 25;

      // player health is max 100
      player.health = constrain(player.health, 0, player.maxHealth);
      heal.setVolume(0.3);
      heal.play();
      // resets health pack after pick up
      this.reset();
    }
  }

  // reset healthKit after pick up
  reset() {
    this.x = random(width);
    this.y = random(height);
  }

  // displays the health kit
  display() {

    push();
    // display as a health kit
    image(this.image, this.x, this.y, this.size, this.size)
    pop();
  }
}
