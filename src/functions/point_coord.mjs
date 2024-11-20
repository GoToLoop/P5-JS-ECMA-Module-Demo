function pointCoord(p = p5.instance) {
  p.push();
  p.stroke(255, 0, 0);

  p.line(p.mouseX, 0, p.mouseX, p.height);
  p.line(0, p.mouseY, p.width, p.mouseY);

  p.pop();

  if (p.mouseIsPressed) p.print('x = ' + p.mouseX + ', y = ' + p.mouseY);
}

export { pointCoord };
