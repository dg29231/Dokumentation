let pix = 50; //Abstand Punkte
let col = []; //Farbe Schwarz oder weiss
let pos = []; //Position Punkte
let lin = []; //Positionen für Linien
let xoff = 50;
let spe = [];
let noi = []; //Array für noise Animation
let newcols = [];


function setup() {
  createCanvas(1000, 1000);
  //pixelDensity(3);

  for (let x = 0; x < width + 1; x += pix) {
    for (let y = 0; y < height + 1; y += pix) {
      pos.push({ x, y });
      col.push(random(2));
      spe.push(random(0.00001, 0.0001))

      let ax = x + pix / 2;
      let ay = y;

      let bx = x + pix;
      let by = y + pix / 2;

      let cx = x + pix / 2;
      let cy = y + pix;

      let dx = x;
      let dy = y + pix / 2;
      lin.push({ ax, ay, bx, by, cx, cy, dx, dy });
    }
  }
//console.log(spe);
}

function draw() {
  background(255);
  frameRate(1);

  /*for(let j = 0; j < pos.length; j++){
    let xnoise = map(noise((xoff += 0.01)), 0, 1, 0, 2);
    //let coloor = floor(col[i] + xnoise)*255;
  }*/
  newcols = [];
  for (let j = 0; j < col.length; j++) {

    let xnoise = noise((xoff += spe[j]));
    let newcol = col[j] + xnoise;
    
    newcols.push(newcol);
    console.log(newcol);
  }

  for (let i = 0; i < pos.length; i++) {
    let thisPoint = newcols[i];
    if (thisPoint > 2 || thisPoint < 0) {
      thisPoint = 0;
    }
    let nextPoint = newcols[i + height / pix + 1];
    if (nextPoint > 2 || nextPoint < 0) {
      nextPoint = 0;
    }
    let lowerPoint = newcols[i + 1];
    if (lowerPoint > 2 || lowerPoint < 0) {
      lowerPoint = 0;
    }
    let nextLowerPoint = newcols[i + height / pix + 2];
    if (nextLowerPoint > 2 || nextLowerPoint < 0) {
      nextLowerPoint = 0;
    }

    //console.log(thisPoint);

    //Punkte für Raster
    /*strokeWeight(4);
    stroke(255,0,0);
    point(lin[i].ax, lin[i].ay);
    point(lin[i].bx, lin[i].by);
    point(lin[i].cx, lin[i].cy);
    point(lin[i].dx, lin[i].dy);*/

    /*stroke(thisPoint);
    point(pos[i].x, pos[i].y);*/


    stroke(0);
    strokeWeight(10);

    //möglichkeit 1
    if (
      thisPoint >= 1 &&
      nextPoint >= 1 &&
      lowerPoint < 1 &&
      nextLowerPoint >= 1
    ) {
      line(lin[i].cx, lin[i].cy, lin[i].dx, lin[i].dy);
    }

    //möglichkeit 2
    if (
      thisPoint >= 1 &&
      nextPoint >= 1 &&
      lowerPoint >= 1 &&
      nextLowerPoint < 1
    ) {
      line(lin[i].bx, lin[i].by, lin[i].cx, lin[i].cy);
    }

    //möglichkeit 3
    if (
      thisPoint >= 1 &&
      nextPoint >= 1 &&
      lowerPoint < 1 &&
      nextLowerPoint < 1
    ) {
      line(lin[i].bx, lin[i].by, lin[i].dx, lin[i].dy);
    }

    //möglichkeit 4
    if (
      thisPoint >= 1 &&
      nextPoint < 1 &&
      lowerPoint >= 1 &&
      nextLowerPoint >= 1
    ) {
      line(lin[i].ax, lin[i].ay, lin[i].bx, lin[i].by);
    }

    //möglichkeit 5
    if (
      thisPoint >= 1 &&
      nextPoint < 1 &&
      lowerPoint < 1 &&
      nextLowerPoint >= 1
    ) {
      line(lin[i].ax, lin[i].ay, lin[i].dx, lin[i].dy);
      line(lin[i].bx, lin[i].by, lin[i].cx, lin[i].cy);
    }

    //möglichkeit 6
    if (
      thisPoint >= 1 &&
      nextPoint < 1 &&
      lowerPoint >= 1 &&
      nextLowerPoint < 1
    ) {
      line(lin[i].ax, lin[i].ay, lin[i].cx, lin[i].cy);
    }

    //möglichkeit 7
    if (
      thisPoint >= 1 &&
      nextPoint < 1 &&
      lowerPoint < 1 &&
      nextLowerPoint < 1
    ) {
      line(lin[i].ax, lin[i].ay, lin[i].dx, lin[i].dy);
    }

    //möglichkeit 8
    if (
      thisPoint < 1 &&
      nextPoint >= 1 &&
      lowerPoint >= 1 &&
      nextLowerPoint >= 1
    ) {
      line(lin[i].ax, lin[i].ay, lin[i].dx, lin[i].dy);
    }

    //möglichkeit 9
    if (
      thisPoint < 1 &&
      nextPoint >= 1 &&
      lowerPoint < 1 &&
      nextLowerPoint >= 1
    ) {
      line(lin[i].ax, lin[i].ay, lin[i].cx, lin[i].cy);
    }

    //möglichkeit 10
    if (
      thisPoint < 1 &&
      nextPoint >= 1 &&
      lowerPoint >= 1 &&
      nextLowerPoint < 1
    ) {
      line(lin[i].ax, lin[i].ay, lin[i].bx, lin[i].by);
      line(lin[i].cx, lin[i].cy, lin[i].dx, lin[i].dy);
    }

    //möglichkeit 11
    if (
      thisPoint < 1 &&
      nextPoint >= 1 &&
      lowerPoint < 1 &&
      nextLowerPoint < 1
    ) {
      line(lin[i].ax, lin[i].ay, lin[i].bx, lin[i].by);
    }

    //möglichkeit 12
    if (
      thisPoint < 1 &&
      nextPoint < 1 &&
      lowerPoint >= 1 &&
      nextLowerPoint >= 1
    ) {
      line(lin[i].bx, lin[i].by, lin[i].dx, lin[i].dy);
    }

    //möglichkeit 13
    if (
      thisPoint < 1 &&
      nextPoint < 1 &&
      lowerPoint < 1 &&
      nextLowerPoint >= 1
    ) {
      line(lin[i].cx, lin[i].cy, lin[i].bx, lin[i].by);
    }

    //möglichkeit 14
    if (
      thisPoint < 1 &&
      nextPoint < 1 &&
      lowerPoint >= 1 &&
      nextLowerPoint < 1
    ) {
      line(lin[i].cx, lin[i].cy, lin[i].dx, lin[i].dy);
    }
  }
}

function keyPressed() {
  let dd = day();
  if (dd < 10) {
    dd = "0" + day();
  }
  let mm = month();
  if (mm < 10) {
    mm = "0" + month();
  }
  let yyyy = year();
  let hh = hour();
  if (hh < 10) {
    hh = "0" + hour();
  }
  let min = minute();
  if (min < 10) {
    min = "0" + minute();
  }
  let sec = second();
  if (sec < 10) {
    sec = "0" + second();
  }

  let filename =
    "marching squares " + yyyy + mm + dd + hh + min + sec;

  if (key === "s" || key === "S") {
    saveCanvas(filename, "jpg");
  }
}

