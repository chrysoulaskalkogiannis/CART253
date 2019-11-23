class HealthPack {
  constructor(x, y, size) {

    this.x = x;
    this.y = x;

    this.size = size;




  }


display(){

push();
fill(0,255,0);
rect(this.x, this.y, this.size, this.size)
pop();

}


}
