function setup() {
  createCanvas(600, 600);
  background('#FFFF00'); // Yellow Background

  noFill();
  stroke(0); // Black stroke for the outer border

  // Outer square border
  rect(100, 100, 400, 400);

  noStroke();
  
  // Function to draw a square (no tilt)
  function drawSquare(x, y, size, color) {
    fill(color);
    rect(x - size / 2, y - size / 2, size, size);
  }

  // Function to draw a diamond
  function drawDiamond(x, y, w, h, angle, color) {
    fill(color);
    push();
    translate(x, y);
    rotate(radians(angle));
    beginShape();
    vertex(-w / 2, 0);
    vertex(0, -h / 2);
    vertex(w / 2, 0);
    vertex(0, h / 2);
    endShape(CLOSE);
    pop();
  }

  // Coordinates and sizes for squares and the center diamond
  let shapes = [
    { x: 180, y: 180, size: 40, color: 'red', type: 'square' },
    { x: 250, y: 140, size: 40, color: 'red', type: 'square' },
    { x: 320, y: 180, size: 40, color: 'red', type: 'square' },
    { x: 390, y: 140, size: 40, color: 'red', type: 'square' },
    
    { x: 180, y: 250, size: 40, color: 'red', type: 'square' },
    { x: 290, y: 240, w: 40, h: 20, angle: 0, color: 'green', type: 'diamond' }, // Center diamond in green
    { x: 390, y: 250, size: 40, color: 'red', type: 'square' },
    
    { x: 140, y: 320, size: 40, color: 'red', type: 'square' },
    { x: 250, y: 320, size: 40, color: 'red', type: 'square' },
    { x: 320, y: 350, size: 40, color: 'red', type: 'square' },
    { x: 400, y: 320, size: 40, color: 'red', type: 'square' }
  ];

  // Loop through and draw all the shapes
  for (let s of shapes) {
    if (s.type === 'square') {
      drawSquare(s.x, s.y, s.size, s.color);
    } else if (s.type === 'diamond') {
      drawDiamond(s.x, s.y, s.w, s.h, s.angle, s.color);
    }
  }
}
