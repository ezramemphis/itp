/// Pretty much the same thing, now substituting to make it a function now. And this was especially easy since I was literally already using x and y values for the positioning


function setup() {
  createCanvas(400, 400);
  noStroke();
  background(220);
}

// Modular Bobby function
function Bobby(x, y, s) {
  let z = s * 0.4;

  // Colors
  let hair = color('#795548');
  let shade = color('#C9B58D');
  let face = color('#E7D3B0');
  let nose = color('#A89776');

  // Front Face
   fill(face);
  square(x, y, s);


  // Hair
  fill(hair);
  quad(x, y, 
       x + s, y, 
       x + s + z, y - z, 
       x + z, y - z);

  // Side Face
  fill(shade);
  quad(x + s, y, 
       x + s + z, y - z, 
       x + s + z, y + s - z, 
       x + s, y + s);

  // Eyes
  fill(255);
  let eyeY = y + s * 0.5;
  let eyeW = s * 0.25;
  let eyeH = s * 0.2;
  arc(x + s * 0.3, eyeY, eyeW, eyeH, 0, PI);
  arc(x + s * 0.7, eyeY, eyeW, eyeH, 0, PI);

  fill(0);
  let pupilY = eyeY + s * 0.03;
  let pupilSize = s * 0.07;
  circle(x + s * 0.3, pupilY, pupilSize);
  circle(x + s * 0.7, pupilY, pupilSize);

  // Nose
  fill(nose);
  triangle(
    x + s * 0.1, y + s * 0.65,
    x + s * 0.54, y + s * 0.6,
    x + s * 0.5, y + s * 0.68
  );

  // Mouth
  stroke(0);
  strokeWeight(s * 0.02);
  line(x + s * 0.25, y + s * 0.75, x + s * 0.75, y + s * 0.75);

  noStroke();
}

function draw() {
  // Draw multiple Bobbys (scaled faces)
  Bobby(20, 80, 120);
  Bobby(120, 250, 60);
  Bobby(220, 120, 80);
  Bobby(260, 250, 20);
}
