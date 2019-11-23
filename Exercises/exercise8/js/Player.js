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

  handleCollision(){

    if (this.x < 0) {
           this.x += width;
         }
         else if (this.x > width) {
           this.x -= width;
         }
         // Off the top or bottom
         if (this.y < 0) {
           this.y += height;
         }
         else if (this.y > height) {
           this.y -= height;
         }

  }

  display(){
    push();
    fill(255,0,0);
    ellipse(this.x,this.y, this.size);
    pop();
  }
}
