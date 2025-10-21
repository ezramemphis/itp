function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
}


function Bobby(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  // Colors
  let hair = color('#795548'); // Hair
  let shade = color('#C9B58D');// Side shade
  let face = color('#E7D3B0'); // Front face
  let nose = color('#A89776'); // Nose

  // Front Face
  fill(face);
  square(140, 150, 100);

  // Hair
  fill(hair);
  quad(
    140, 150, // bottom left
    240, 150, // bottom right
    280, 110, // top right
    180, 110  // top left
  );

  // Side Face
  fill(shade);
  quad(
    240, 150, // top left
    280, 110, // top right
    280, 210, // bottom right
    240, 250  // bottom left
  );

  // Eyes
  fill(255);
  arc(170, 200, 25, 20, 0, PI); // left eye 
  arc(210, 200, 25, 20, 0, PI); // right eye
  fill(0);
  circle(170, 205, 7); // left pupil
  circle(210, 205, 7); // right pupil

  // Nose
  fill(nose);
  triangle(150, 215, 194, 210, 190, 218);

  // Mouth
  stroke(0);
  strokeWeight(2);
  line(165, 225, 215, 225);
  pop();
}

function draw() {
  Bobby(-90, -80, 1);
  Bobby(0, 180, 0.5);
  Bobby(110, 0, 0.75);
  Bobby(20, 60, 1.25);
}
