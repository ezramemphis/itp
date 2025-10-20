function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();

  // Colors
  let hair = color('#795548');   // hair
  let shade = color('#C9B58D');  // side shade
  let face = color('#E7D3B0');   // front face
  let nose = color('#A89776');   // nose color

  // FRONT FACE (square)
  fill(face);
  square(140, 150, 100);

  // HAIR (top)
  fill(hair);
  quad(
    140, 150,     // front-left
    240, 150,     // front-right
    280, 110,     // back-right
    180, 110      // back-left
  );

  // SIDE FACE (right)
  fill(shade);
  quad(
    240, 150,     // front-top-right
    280, 110,     // back-top-right
    280, 210,     // back-bottom-right
    240, 250      // front-bottom-right
  );

  // EYES
  fill(255);
  arc(170, 200, 25, 20, 0, PI);  // left eye white
  arc(210, 200, 25, 20, 0, PI);  // right eye white
  fill(0);
  circle(170, 205, 7);           // left pupil
  circle(210, 205, 7);           // right pupil

  // NOSE
  fill(nose);
  triangle(150, 215, 194, 210, 190, 218);

  // MOUTH
  stroke(0);
  strokeWeight(2);
  line(165, 225, 215, 225);
}
