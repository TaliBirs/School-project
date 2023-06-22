let img;
let rectX, rectY;
let rectSize;
let imgX, imgY;

function preload() {
  img = loadImage('03.png');
  font = loadFont('FedraSerifH+L-Book.ttf');
}

function setup() {
  createCanvas(1920, 1080);
  rectMode(CENTER);
  imageMode(CENTER);

  // Scale the image to fill the canvas (slightly scaled down)
  let scale = max(width / img.width, height / img.height) * 0.6; // Scale factor of 0.6 (60%)
  img.resize(img.width * scale, img.height * scale);

  // Set the initial position and size of the rectangle
  rectX = random(width);
  rectY = random(height);
  rectSize = random(50, 200); // Random initial size between 50 and 200 pixels

  // Set the initial position of the image
  imgX = width / 2;
  imgY = height / 2;

  // Change the rectangle's position and size every 3 seconds
  setInterval(changeRectangle, 3000);
}

function draw() {
  background(255); // White background

  // Draw the scaled image at its position
  image(img, imgX, imgY);

  // Draw the rectangle on top of the image
  fill('#F4EDE1');
  noStroke();
  rect(rectX, rectY, rectSize, rectSize);

  // Apply CSS to inverse the text direction
  select('canvas').elt.style.direction = 'rtl';

  // Display Hebrew text
  textFont(font); // Set the font
  textSize(40); // Increase the text size
  fill(0); // Black color
  textAlign(CENTER, CENTER); // Center align the text
  text("Nura - good vibes \npop-up sale\nhapaamon garden - Jerusalem", width / 2, height / 2);

  // Display numbers
  textSize(16);
  textAlign(CENTER);
  text("28/6-8/7", width / 2, height / 2 + 100);

  // Check if the mouse hovers over the image
  if (
    mouseX > imgX - img.width / 2 &&
    mouseX < imgX + img.width / 2 &&
    mouseY > imgY - img.height / 2 &&
    mouseY < imgY + img.height / 2
  ) {
    // Move the image away from the mouse
    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    imgX = width / 2 - dx;
    imgY = height / 2 - dy;
  }
}

function changeRectangle() {
  // Update the rectangle's position and size randomly
  rectX = random(width);
  rectY = random(height);
  rectSize = random(50, 200); // Random size between 50 and 200 pixels
}
