class Ore {
  constructor(size) {
this.x = random(0,1000);
this.y = random(0,850);

this.size = size;



}
display(){
  push();
  fill(255,60,100);
  rect(this.x,this.y, this.size*2, this.size*2);

  pop();
  }

/*
handlePickUp(player){

  let d = dist(player.x, player.y, this.x, this.y);
  if (d < this.size + player.size){
    this.reset();
    player.score = player.score + this.size;
}
}
*/


reset(){
  this.x = random(0, 1000);
  this.y = random(0, 900);
}
}
