"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/


let bob;

function setup() {
createCanvas(500,500);
bob = new Player(100, 100, 60, 10, 100);
}


// draw()
//
// Description of draw()

function draw() {
background(0);

bob.movement();
bob.display();

}
