class HealthPack {
  constructor(x, y, size) {

    this.x = x;
    this.y = x;

    this.size = size;

  }

  handleRegen(player) {
      // Calculate distance from this predator to the prey
      let d = dist(this.x, this.y, player.x, player.y);
      // Check if the distance is less than their two radii (an overlap)
      if (d < player.size + this.size) {
        // Decrease prey health by the same amount
        player.health = player.health + 50;
          player.health = constrain(player.health, 0, player.maxHealth);
        this.reset();
      }
    }
    reset(){
      this.x = random(0, 1000);
      this.y = random(0, 900);
    }


display(){

push();
fill(0,255,0);
rect(this.x, this.y, this.size, this.size)
pop();

}


}
