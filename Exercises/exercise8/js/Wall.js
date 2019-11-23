class Wall {
  constructor(x, y, sizeX, sizeY) {

    this.x = x;
    this.y = x;

    this.sizeX = sizeX;
    this.sizeY = sizeY;




  }


display(){

push();
fill(0,0,200);
rect(this.x, this.y, this.sizeX, this.sizeY)
pop();

}


}
