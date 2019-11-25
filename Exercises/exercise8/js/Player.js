class Player {


  constructor(x, y, size, speed) {
    this.x = x;
    this.y = x;

    this.size = size;

    this.vx = 0;
    this.vy = 0;

    this.speed = speed;

    this.health = 100;

    this.score = 0;
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

      if (this.x < 0 ) {
           this.vx = +this.speed;
         }
        else if (this.x > width - this.size) {
          this.vx = -this.speed;
        }
        else if (this.y < 0 ) {
          this.vy = +this.speed;
        }
        else if (this.y > height - this.size) {
          this.vy = -this.speed;
        }


  }

  display(){
    push();
    fill(255,0,0);
    rect(this.x,this.y, this.size, this.size);
    pop();

    push();
    noStroke();
    fill(255, 255, 255);
    textAlign(CENTER, TOP);
    textSize(20);
    text("Score",100, 50);
    text(this.score, 100, 80);

    text("Health",200, 50);
    text(this.score, 200, 80);

    pop();
  }

}
