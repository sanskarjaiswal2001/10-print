let x = 0;
let y = 0;
let spacing = 25;

function setup() 
{
  createCanvas(1536, 749);
  background(0);
}

function draw() 
{
  stroke(255, 0, 0);
  if (random(1) < 0.5)
    line (x, y, x + spacing, y + spacing); //Backwardslash
  else
    line (x, y + spacing, x + spacing, y); //Forwardslash
  x = x + spacing;
  if (x > width)
  {
    x = 0;
    y = y + spacing;
  }
}