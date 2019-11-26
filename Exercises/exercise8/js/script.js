"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/


let bob;

let healthKit;

let gold;

let walls;

let badGuy;

function setup() {
createCanvas(1000, 900);
bob = new Player(100, 100, 50, 10);
badGuy = new Enemy(500,100,10, 50);
healthKit = new HealthPack(200, 200, 50);
walls = new Wall(500, 500, 100, 300);
gold = new Ore(50);

}


// draw()
//
// Description of draw()

function draw() {
background(0);

bob.movement();
bob.handleCollision();
bob.display();

gold.display();
healthKit.display();

bob.handlePickUp(gold);

walls.handleWall(bob);
walls.display();

badGuy.move();
badGuy.display();
badGuy.handlePickUp(gold);



}
