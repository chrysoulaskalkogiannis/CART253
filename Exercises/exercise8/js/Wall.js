class Wall {
  constructor(x, y, sizeX, sizeY) {

    this.x = x;
    this.y = x;

    this.sizeX = sizeX;
    this.sizeY = sizeY;

  }

/*  handleWall(player){

      if (player.x < this.sizeX) {
           player.vx = +player.speed;
         }
        else if (this.x > this.sizeX) {
          player.vx = -player.speed;
        }
        else if (this.y < this.siz) {
          player.vy = +player.speed;
        }
        else if (this.y > this.siz) {
          player.vy = -player.speed;
        }
} */

handleWall(player) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, player.x, player.y);
     if (d < this.sizeX - player.size){
       player.vx = -player.speed;
     }
else if (d < this.sizeY) {
  player.vy = +player.speed;
}
}

display(){

push();
fill(0,0,200);
rect(this.x, this.y, this.sizeX, this.sizeY)
pop();

}


}
