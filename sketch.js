function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  fill(0)
  stroke(0)
   text(mouseX + ", " + mouseY, 20, 20)
  
  //head
  fill(170);
  stroke(0);
  square(163,50,60);
 
  //eyes
  fill('red');
  circle(178,65,20,20)
  circle(205,65,20,20)
  fill(240,236,34);
   circle(178,65,12,12)
   circle(205,65,12,12)
   fill(170)
  fill(81,239,255);
    circle(178,65,5,5);
   circle(205,65,5,5);
     fill(170);
  
  //antenna
  line(192,50,192,30);
  fill(240,236,34);
  circle(192,30,15,15);
  fill(170);
  
  //laser
  stroke('red')
  line(178,65,mouseX, mouseY)
  line(205,65,mouseX, mouseY)
  
  //mouth
  fill(255);
  stroke(0)
  arc(192, 85, 40, 40, 0, PI);
  fill(170);
  stroke(0);
  line(172,86,211,86);

  //teeth
   stroke(0);
  line(175,94,209,94);
  line(181,86,181,102);
  line(191,86,191,105);
  line(201,86,201,103);
  
  //neck
  rect(185,110,15,25)
  line (200,113, 186,118);
  line (200,125, 186,130);
  
  //body
  rect(157,136,75,105)
  
  //screen
  fill(184,224,255)
  rect(170,145,49,70)
  stroke(255)
  line(211,157,179,187)
  line(214,176,179,204)
  fill(170)
  
   //button
  fill(255, 75, 162);
  stroke(0)
  triangle(175,220,167,234,185,234);
  fill(5 ,153, 255);
  circle(219,227,15,15);
  fill(170);
  
  //ears
  noStroke()
  fill(170)
  rect(147,65,15,10)
  fill(130)
   rect(147,75,15,10)
    fill(170)
  rect(224,65,15,10)
  fill(130)
   rect(224,75,15,10)
  fill(170)
  stroke(0)
  
//Left arm
  beginShape();
    vertex(156,136);
  vertex (142,136);
  vertex(142,200);
    vertex(156,200);
  endShape(CLOSE);
  square(142,190,15)
  
  //Right arm
  beginShape();

vertex(252,77)
  vertex(266,77)
  vertex(266,150)
  vertex(252,150)
  vertex(232,150)
  vertex(233,135)
  vertex(252,135)
  endShape(CLOSE);

  
  //left leg
  rect(170,242, 17, 60);
  
  //right leg
  rect(203,242, 17, 60);
  
  //shoes
stroke(0)
  arc(220, 303, 35, 35, PI, 0);
   arc(170, 303, 35, 35, PI, 0);
  
  //H
  fill(255,79,182)
  beginShape()
  vertex(240,32)
  vertex(240,60)
vertex(270,60)
  vertex(270,46)
  vertex(290,46)
  vertex(290,60)
  vertex(320,60)
  vertex(320,32)
  vertex(320,9)
  vertex(290,9)
vertex(290,28)
  vertex(270,28)
  vertex(270,9)
  vertex(240,9) 
  endShape(CLOSE);
  fill(170)
  
  //i
  fill(165,135, 232)
  beginShape()
  vertex(340, 9)
  vertex(340,21)
  vertex(360,21)
  vertex(360,49)
  vertex(340,49)
  vertex(340,60)
  vertex(390,60)
  vertex(390,49)
  vertex(370,49)
  vertex(370,21)
  vertex(390,21)
  vertex(390,9)
  endShape(CLOSE);
  fill(170)
  
  //laser
  stroke('red')
  line(178,65,mouseX, mouseY)
  line(205,65,mouseX, mouseY)
  
}