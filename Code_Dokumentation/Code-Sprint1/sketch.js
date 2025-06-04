/* 
+Colabor 2025 HSLU, Hanna Zuellig
Example Custom Audio Class for p5.js
Custom class creates a button to start the microphone
Custom class is to be embedded in index.html and put into library folder
*/

/**
 * Die Variable Mikrofon bindet eine Instanz der Klasse Mic
 * Die Variable micLevel nimmt die aktuelle Lautstärke zurück, von 0 bis 255
 */
let micInstance;
let micLevel = 0;
let posi = [];
let p1 = 0;
let p2 = 0;


function setup() {
  createCanvas(1200, 800);

  angleMode(DEGREES);

  /**
   * Im setup einmalig Zugriff auf das Mikrofon
   */
  micInstance = new Mic("Start Mic"); //Parameter übergibt Beschriftung des Buttons

  for(let i = 0; i < 15; i++){
    let tw = random(0,width);
    let th = random(0, height);
    let r = random(0,10);
    posi.push({tw,th,r});
  
  }

}

function draw() {
  background(255,255,255,100);


  /**
    * User muss mit der Seite interagieren, um Zugriff auf das Mikrofon zu erhalten
    */
  if (micInstance && micInstance.started) {
    /**
    * In jedem Frame wird die aktuelle Lautstärke erfragt 
    * Werte die zurückkommen, gehen von 0 bis 255
    * allenfalls umwandeln
    */
    getMicLevel();

    translate(-200,0);


  let pix = map(micLevel, 0, 200, 1, 15); // frameRate Wechsel
  frameRate(pix);

  noFill();
   let c = map(micLevel, 0,100,50,255); //random color
    stroke(255,130,c); //Linien Farbe
  
  for(let j = 0; j < 5; j++){
    let pp1 = random(0,width);
    let pp2 = random(0,height);
    let swp = random([10, 20, 30]); // random strokeWeight point
    strokeWeight(swp)
    point(pp1,pp2)
  }
  
  let tw = random(0,width) // translation breite
  let th = random(0,height); // translation höhe
  
  translate(tw, th);
  
  for(let i = 0; i < 10; i++){
    
    
  let sw = random([2, 7,20]); //random strokeWeight
    strokeWeight(sw);
  
  let r = random(0,360); //random rotation
    p1 = random(0,500); // random size / form
    p2 = random(0,500); // random size / form
  
  push();
  rotate(r);
 
  bezier(p1+500, p1+20, p1+400, p1+300, p2+90, p2+90, p2+50, p2+500);
  pop();
    
   
  }
  }

  // Draw a bar representing the mic level


// ✅ Async function outside draw() to call listenMic
async function getMicLevel() {
  micLevel = await micInstance.listenMic();
}
}