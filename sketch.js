function setup(){
    createCanvas(400, 400, WEBGL);
}

function draw(){
    background(255, 0 , 200);

    rotateY(frameCount * 0.01);

  // Draw the triangle.
  triangle(-20, 25, 8, -30, 36, 25);

}

