import Animal from './classes/Animal.mjs';
import { pointCoord } from './functions/point_coord.mjs';

const dog = new Animal('Dog');
dog.sayName();

function setup() {
  createCanvas(400, 400).parent('sketch-holder');
}

function draw() {
  background(220);
  pointCoord();
}

globalThis.setup = setup;
globalThis.draw = draw;
