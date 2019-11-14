class Player {


  constructor(x, y, size, speed, health) {
    this.x = x;
    this.y = x;

    this.size = size;

    this.vx = 0;
    this.vy = 0;

    this.speed = speed;

    this.health = health;
  }

  movement(){
    this.x += this.vx;
    this.y += this.vy;

    if (keyIsDown(LEFT_ARROW)) {
  this.vx = -this.speed;
     }
     else if (keyIsDown(RIGHT_ARROW)) {
       this.vx = this.speed;
     }
     else {
       this.vx = 0;
     }
     // Vertical movement
     if (keyIsDown(UP_ARROW)) {
       this.vy = -this.speed;
     }
     else if (keyIsDown(DOWN_ARROW)) {
       this.vy = this.speed;
     }
     else {
       this.vy = 0;
     }
  }

  display(){
    push();
    fill(255,0,0);
    ellipse(this.x,this.y,100);
    pop();
  }
}
