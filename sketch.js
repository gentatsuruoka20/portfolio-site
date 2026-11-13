let r = 0;
let x = 0;
let y = 0;
let expanding = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  if (expanding) {
    noFill();
    stroke(0, 100, 255);
    strokeWeight(2);

    ellipse(x, y, r, r);

    r += 3;

    if (r > 300) {
      expanding = false;
    }
  }

  let speed;

  if (mouseY < height / 2) {
    // 上半分：上方向
    speed = map(mouseY, 0, height / 2, -10, 0);
  } else {
    // 下半分：下方向
    speed = map(mouseY, height / 2, height, 0, 10);
  }

  // ブラウザ画面そのものをスクロール
  window.scrollBy({
    top: speed,
    left: 0,
    behavior: "instant"
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  
  

  window.scrollBy(0, speed);



function mousePressed() {
  x = mouseX;
  y = mouseY;
  r = 0;
  expanding = true;
}



