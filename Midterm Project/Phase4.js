function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  drawBobbyGrid();
}

function Bobby(x, y, s) {
  push();
  translate(x, y);
  scale(s/100);

  // Colors
  let hair = color('#795548');
  let shade = color('#C9B58D');
  let face = color('#E7D3B0');
  let nose = color('#A89776');

  // Front Face
  fill(face);
  square(0, 0, 100);

  // Hair
  fill(hair);
  quad(
    0, 0,  // bottom left
    100, 0,  // bottom right
    140, -40,  // top right
    40, -40  // top left
  );

  // Side Face
  fill(shade);
  quad(
    100, 0,  // top left
    140, -40,  // top right
    140, 60,  // bottom right
    100, 100  // bottom left
  );

  // Eyes
  fill(255);
  arc(30, 50, 25, 20, 0, PI);  // left eye 
  arc(70, 50, 25, 20, 0, PI);  // right eye
  fill(0);
  circle(30, 55, 7);  // left pupil
  circle(70, 55, 7);  // right pupil

  // Nose
  fill(nose);
  triangle(10, 65, 55, 60, 50, 68);

  // Mouth
  stroke(0);
  strokeWeight(2);
  line(25, 75, 75, 75);

  pop();
}

function drawBobbyGrid() {
  let columns = 5;
  let rows = 5;
  let cellW = width / columns;
  let cellH = height / rows;

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;

      let s = min(cellW, cellH) * 0.72;
      Bobby(x, y + s * 0.4, s);
    }
  }
}
