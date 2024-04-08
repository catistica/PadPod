//parametrización
let m 
let miti = m/2
//let m
//let miti

//recursos
let tipo
let parrafoIntro = 'Este es un instrumento virtual. Con las teclas que muestra la botonera vas a poder activar y desactivar distintos instrumentos.'

let titulo
let flor
let gradient
let flechaArribaBlanca
let flechaAbajoBlanca
let flechaArribaNegra
let flechaAbajoNegra
let spacebarBlanca
let spacebarNegra
let info
let cruz

let bajo
let bamboos
let bateria
let chords
let clap
let cuerdas
let shakers
let trumpet

//volumen
let volbamboos
let volbajo 
let volbateria
let volchords
let volclap
let volcuerdas
let volshakers
let voltrumpet
let volgeneral = 1

//level
let levbajo
let levbamboos
let levbateria
let levchords
let levclap
let levcuerdas
let levshakers
let levtrumpet

let angFlor = 0

//botonera 
let prendido = true
let intro = false

function preload() {

  tipo = loadFont('tipo/MuseoModerno-Black.ttf')

  titulo = loadImage('img/titulo.png')
  flor = loadImage('img/flor.png')
  gradient = loadImage('img/gradient.png')
  flechaAbajoBlanca = loadImage('img/flechaAbajoBlanca.png')
  flechaArribaBlanca = loadImage('img/flechaArribaBlanca.png')
  spacebarBlanca = loadImage('img/spacebarBlanca.png')
  flechaAbajoNegra = loadImage('img/flaechaAbajoNegra.png')
  flechaArribaNegra = loadImage('img/flechaArribaNegra.png')
  spacebarNegra = loadImage('img/spacebarNegra.png')
  info = loadImage('img/Asset 4info.png')
  cruz = loadImage('img/Asset 5info.png')
  bienvenida = loadImage('img/3x/Bienvenida.png')


  bajo = loadSound('audio/bajo.wav')
  bamboos = loadSound('audio/bamboos.wav')
  bateria = loadSound('audio/bateria.wav')
  chords = loadSound('audio/chords.wav')
  clap = loadSound('audio/clap.wav')
  cuerdas = loadSound('audio/cuerdas.wav')
  shakers = loadSound('audio/shakers.wav')
  trumpet = loadSound('audio/trumpet.wav')

  FontMuseoModerno = loadFont('tipo/MuseoModerno-Black.ttf')
  FontInter = loadFont('tipo/Inter-VariableFont.ttf')

}

function setup() {
  m = windowWidth/24
  
  //createCanvas(windowWidth,windowHeight)
  createCanvas(24*m, 13*m)
  noStroke()
  
  //AUDIO
  volbajo = createVolume(bajo)
 
  volbamboos = createVolume(bamboos)
  
  volbateria = createVolume(bateria)
  
  volchords = createVolume(chords)
  
  volclap = createVolume(clap)
  
  volcuerdas = createVolume(cuerdas)
  
  volshakers = createVolume(shakers)
  
  voltrumpet = createVolume(trumpet)

  
  
}


function draw() {
  //let m = windowWidth/24
  //let miti = windowWidth/13

  background(232,214,189)

  /*bajo*/
  push()
  fill(89,126,255)
  rect(7*m, m, 11*m, 3*m)
  pop()

  levbajo = volbajo.getLevel()
  let xbajo = map(levbajo, 0, 1, 7*m, 18*m)
  
  for (let i = 0; i < 10*m; i=i+m) {
    push()
    stroke(232,214,189)
    strokeWeight(m/miti)
    line(7*m, 4*m, xbajo+i, m)
    pop()
  }


  /*botonera*/
  if (prendido){
    botonera()
  } else {
    push()
    fill(40,24,71)
    rect(5*m, 4*m, 7*m)
    pop()
    
    if(clap.isPlaying()){
      push()
      fill(203,148,226)
      rect(8*m, 8*m, 4*m, 3*m)
      pop()
      
      push()
      fill(89,126,255)
      rect(5*m, 8*m, 3*m, 3*m)
      rect(10*m, 8*m, m, 3*m)
      pop()
    }
    
    if(chords.isPlaying()){
      push()
      imageMode(CENTER) 
      translate(10*m, 6*m)
      rotate(PI)
      image(gradient, 0, 0, 4*m, 4*m)
      pop()
    }
    
    if(bateria.isPlaying()){
      push()
      fill(89,126,255)
      rect(5*m, 4*m, 3*m, 7*m)
      pop()
      
      push()
      fill(40,24,71)
      rectMode(CENTER)
      translate(6.5*m, 11*m)
      rotate(QUARTER_PI)
      rect(0, 0, 2.12*m)
      pop()

      push()
      fill(40,24,71)
      rectMode(CENTER)
      translate(6.5*m, 9.5*m)
      rotate(QUARTER_PI)
      rect(0, 0, 2.12*m)
      pop()

      push()
      fill(40,24,71)
      rectMode(CENTER)
      translate(6.5*m, 8*m)
      rotate(QUARTER_PI)
      rect(0, 0, 2.12*m)
      pop()

      push()
      fill(40,24,71)
      rectMode(CENTER)
      translate(6.5*m, 6.5*m)
      rotate(QUARTER_PI)
      rect(0, 0, 2.12*m)
      pop()

      push()
      fill(40,24,71)
      rectMode(CENTER)
      translate(6.5*m, 5*m)
      rotate(QUARTER_PI)
      rect(0, 0, 2.12*m)
      pop()
  
    }
    
    if(trumpet.isPlaying()){
      push()
      fill(247,101,50)
      rect(5*m, 4*m, 3*m, 4*m)
      pop()

      push()
      fill(203,148,226)
      rect(0, 4*m, 8*m, 4*m, 2*m)
      pop()

    }

    if(shakers.isPlaying()){

      for(x = 8*m; x<12*m; x = x + miti) {
        for(y = 4*m; y<8*m; y = y + miti) {
          push()
          fill(89,126,255)
          ellipse(x, y, miti)
          pop()
        }
      }
    }
    
    if(bamboos.isPlaying()){
      push()
      fill(247,101,50)
      rect(10*m, 7*m, m, miti)
      rect(11*m, 8*m, m, miti)
      rect(8*m, 8*m, m, miti)
      rect(10*m, 8*m, 2*m, miti)
      rect(9*m, 8.5*m, 2*m, miti)
      rect(6*m, 9.5*m, 3*m, miti)
      rect(7*m, 10*m, 3*m, miti)
      rect(9*m, 10.5*m, 3*m, miti)
      pop()
    }
    
    if(bajo.isPlaying()){
      push()
      noFill()
      stroke(232,214,189)
      strokeWeight(m/miti)
      line(5*m, 5*m, 12*m, 5*m)
      line(5*m, 5.5*m, 12*m, 5.5*m)
      line(5*m, 6*m, 12*m, 6*m)
      line(5*m, 6.5*m, 12*m, 6.5*m)
      line(5*m, 7*m, 12*m, 7*m)
      pop()
    }
    
    if(cuerdas.isPlaying()){
      push()
      imageMode(CENTER) 
      image(flor, 5*m, 6*m, 2*m, 2*m)
      pop()
    }

    push()
    imageMode(CENTER)
    image(info, 11.5*m, 4.5*m, m/3, m/3)
    pop()

  }
  
  //DISEÑO ESTÁTICO
  
  /*bajo*/
  //está arriba BOTONERA para que no se superponga
  
  /*bamboos*/
  push()
  fill(89,126,255)
  rect(18*m, 4*m, 6*m, 9*m)
  pop()

  push()
  fill(40,24,71)
    
    for(x = 18*m; x < 22.5*m; x = x + 2*m) {
      for(y = 4.5*m; y < 23*m; y = y + m) {
        rect(x, y, m, m/2)
       }
      }
    
    for(x = 19*m; x < 24*m; x = x + 2*m) {
      for(y = 4*m; y < 22.5*m; y = y + m) {
        rect(x, y, m, m/2)
        }
      }
  pop()

  /*batería*/
  push()
  fill(40,24,71)
  rect(18*m, m, 3*m)
  pop()

  /*chords*/
  push()
  fill(203,148,226)
  rect(21*m, m, 3*m)
  pop()

  /*clap*/
  push()
  fill(89,126,255)
  rect(5*m, 11*m, 7*m, 2*m)
  pop()
  
  /*cuerdas*/
  push()
  fill(203,148,226)
  rect(0, m, 5*m, height)
  pop()

  push()
  strokeWeight(2*m/miti)
  stroke(40,24,71)
  line(2.5*m, m, 2.5*m, 13*m)
  pop()

  /*shakers*/
  push()
  fill(232,214,189)
  rect(5*m, m, 2*m, 3*m)
  pop()

  /*barra titulo-volumen*/
  image(titulo, 0, 0, 5*m, m)
  // text('PAD POD',0,0,5*m,m)
  
  //ANIMACIÓN 
  /*bajo*/
  // está arriba de BOTONERA para que no se superponga 

  /*bamboos*/
  push()
  fill(247,101,50)
  bamboosrebotan(18*m, 200)
  bamboosrebotan(20*m, 180)
  bamboosrebotan(22*m, 310)
  pop()
  
  push()
  fill(203,148,226)
  bamboosrebotan(19*m, 270)
  bamboosrebotan(21*m, 240)
  bamboosrebotan(23*m, 150)
  pop()
  
  /*bateria*/
  levbateria = volbateria.getLevel()
  let wbat = map(levbateria, 0, 1, 0, 16.5*m)
  
  if(bateria.isPlaying()){
    push()
    fill(203,148,226)
    rectMode(CENTER)
    translate(19.5*m, 2.5*m)
    rotate(QUARTER_PI)
    rect(0, 0, wbat)
    pop()
  } else { 
    push()
    fill(203,148,226)
    rectMode(CENTER)
    translate(19.5*m, 2.5*m)
    rotate(QUARTER_PI)
    rect(0, 0, 2.12*m)
    pop()

  }

  /*chords*/
  if (chords.isPlaying()){
    image(gradient, 21*m, m, 3*m, 3*m)
    angFlor = angFlor + 0.03
  } else {
    angFlor = 0 
  }
  
  push()
  imageMode(CENTER)
  translate(22.5*m, 2.5*m)
  rotate(angFlor)
  image(flor, 0, 0, 3*m, 3*m)
  pop()
  
  /*clap*/
  levclap = volclap.getLevel()
  let wclap = map (levclap, 0, 1, 0, 500*m)
  fill(247,101,50)
  rect(5*m, 11*m, wclap, 3*m)
  rect(12*m, 11*m, wclap*(-1), 3*m)
  
  /*cuerdas*/
  levcuerdas = volcuerdas.getLevel() 
  let ycuerdas = map(levcuerdas, 0, 1, 2.5*m, 200*m)
  push()
  imageMode(CENTER)
  image(flor, 2.5*m, ycuerdas, 3*m, 3*m)
  pop()

  /*shakers*/
  if(shakers.isPlaying()){
    push()
    frameRate(10)
    circulosRandom(4*m, m/miti)
    pop()
  } else {
    push()
    for (let x = 5.07*m; x < 6.95*m; x=x+5) {
      for (let y = 1.07*m; y < 3.95*m; y=y+5) {
        fill(0)
        ellipse (x, y, m/miti)
        }
      }
    } 
    pop()

  /*trumpet*/
  let hcaja = 9*m

  levtrumpet = voltrumpet.getLevel()
  let htrumpet = 4*m + map(levtrumpet, 0, 1, 0, 100*m)

  let hresto = hcaja - htrumpet
  let htrumpet2 = hresto * 2 / 3
  let htrumpet3 = hresto - htrumpet2

  let ytrumpet2 = 4*m + htrumpet
  let ytrumpet3 = ytrumpet2 + htrumpet2

  push()
  ellipseMode(CORNER)
  fill(203,148,226)
  ellipse(12*m, 4*m, 6*m, htrumpet)
  ellipse(12*m, ytrumpet2, 6*m, htrumpet2)
  ellipse(12*m, ytrumpet3, 6*m, htrumpet3)

  //VOLUMEN
  push()
  let wvolg = map(volgeneral, 0, 1, 0,24*m)
  fill(247,101,50)
  rect(5*m, 0, wvolg, m)
  pop()

  /* leyenda*/ 
  push()
  fill(232,214,189) 
  text("by Catalina Pastorino", 21.5*m, 0.22*m, 2.5*m, 2*m)
  text("and Lucía Belén Rovasio Aguirre", 20.4*m, 0.5*m, 4*m, 3*m)
  pop()

  /*Previa*/
  
 // Previa ()
  /*push()
  fill(0,150)
  rect(0, 0, 24*m, 13*m)
  
  fill(203,148,226)
  rect(5*m, 3.5*m, 14*m, 7.5*m)

  fill(232,214,189)
  rect(5.5*m, 4*m, 13*m, 6.5*m)

  fill(0)
  textSize(0.95*m)
  textFont(FontMuseoModerno)
  text('Bienvenidos a PAD POD', 6.2*m, 4.5*m, 13*m, 7*m)
  //image(bienvenida, 6*m, 4.5*m, 9.5*m, m)

  textFont(FontInter)
  textSize(0.35*m)
  text(parrafoIntro, 6.2*m, 6*m, 10*m, 7*m)

  pop() */
  
}

/*function Previa() {
  push()
  fill(0,150)
  rect(0, 0, 24*m, 13*m)
  
  fill(203,148,226)
  rect(5*m, 3.5*m, 14*m, 7.5*m)

  fill(232,214,189)
  rect(5.5*m, 4*m, 13*m, 6.5*m)

  fill(0)
  textSize(0.95*m)
  textFont(FontMuseoModerno)
  text('Bienvenidos a PAD POD', 6.2*m, 4.5*m, 13*m, 7*m)
  //image(bienvenida, 6*m, 4.5*m, 9.5*m, m)

  textFont(FontInter)
  textSize(0.35*m)
  text(parrafoIntro, 6.2*m, 6*m, 10*m, 7*m)

  pop()

}*/

function mouseClicked() {
  
  if (prendido === true) {
    prendido = false 
  } else if (prendido === false) {
    prendido = true }
}

//FUNCIONES DE ANIMACION 

function bamboosrebotan (x, cant) {
  levbamboos = volbamboos.getLevel()
  let hbamboos = map(levbamboos, 0,1,0,cant*m)
  rect(x, 13*m, m, hbamboos*(-1))

}

function botonera () {
  /*BOTONERA*/
  push()
  fill(40,24,71)
  rect(5*m, 4*m, 7*m)
  pop()

  //flechitas de volumen 
  push()
  botonApagado(6*m, 9*m, "", 0.5*m, 0.25*m)
  imageMode(CENTER, CENTER)
  image(flechaArribaBlanca, 6.48*m, 9.7*m, 0.4*m, 0.9*m)
  pop()

  push()
  botonApagado(7*m, 9*m, "", 0.5*m, 0.35*m)
  imageMode(CENTER, CENTER)
  image(flechaAbajoBlanca, 7.5*m, 9.28*m, 0.4*m, 0.9*m)
  pop()

  if (keyIsDown(UP_ARROW)) {
    push()
    botonPrendido(6*m, 9*m, "", 0.5*m, 0.25*m)
    imageMode(CENTER, CENTER)
    image(flechaArribaNegra, 6.5*m, 9.75*m, 0.5*m, m)
    pop()
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    push()
    botonPrendido(7*m, 9*m, "", 0.5*m, 0.35*m)
    imageMode(CENTER, CENTER)
    image(flechaAbajoNegra, 7.5*m, 9.3*m, 0.5*m, m)
    pop()
  }
 
  //spacebar
  push()
  fill(40,24,71)
  stroke(232,214,189)
  strokeWeight(m/miti)
  rect(8*m,8*m,3*m,m,m/3)
  imageMode(CENTER, CENTER)
  image(spacebarBlanca, 9.5*m, 8.5*m, 2.5*m, 0.625*m)
  pop()

  if (keyIsDown(32)) {
    push()
    fill(232,214,189)
    stroke(232,214,189)
    strokeWeight(m/miti)
    rect(8*m,8*m,3*m,m,m/3)
    imageMode(CENTER, CENTER)
    image(spacebarNegra, 9.5*m, 8.5*m, 2.5*m, 0.625*m)
    pop()
  }

  //Instrumentos 
  if(bajo.isPlaying()){
    botonPrendido(7*m, 7*m, "x", 0.5*m, 0.35*m)
  }else{ 
    botonApagado(7*m, 7*m, "x", 0.5*m, 0.35*m)
  }

  if(bamboos.isPlaying()){
    botonPrendido(8*m, 6*m, "d", 0.5*m, 0.35*m)
  }else{ 
    botonApagado(8*m, 6*m, "d", 0.5*m, 0.35*m)
  }

  if(bateria.isPlaying()){
    botonPrendido(9*m, 6*m, "f", 0.5*m, 0.35*m)
  }else{ 
    botonApagado(9*m, 6*m, "f", 0.5*m, 0.35*m)
  }

  if(chords.isPlaying()){
    botonPrendido(7*m, 5*m, "w", 0.5*m, 0.35*m)
  }else{ 
    botonApagado(7*m, 5*m, "w", 0.5*m, 0.35*m)
  }

  if(clap.isPlaying()){
    botonPrendido(6*m, 6*m, "a", 0.5*m, 0.35*m)
  }else{ 
    botonApagado(6*m, 6*m, "a", 0.5*m, 0.35*m)
  }

  if(cuerdas.isPlaying()){
    botonPrendido(6*m, 5*m, "q", 0.5*m, 0.25*m)
  }else{ 
    botonApagado(6*m, 5*m, "q", 0.5*m, 0.25*m)
  }

  if(shakers.isPlaying()){
    botonPrendido(7*m, 6*m, "s", 0.5*m, 0.35*m)
  }else{ 
    botonApagado(7*m, 6*m, "s", 0.5*m, 0.35*m)
  }

  if(trumpet.isPlaying()){
    botonPrendido(8*m, 7*m, "c", 0.5*m, 0.35*m)
  }else{ 
    botonApagado(8*m, 7*m, "c", 0.5*m, 0.35*m)
  }
  
  //cruz 
  push()
  imageMode(CENTER)
  image(cruz, 11.5*m, 4.5*m, m/3, m/3)
  pop()
  
}

function circulosRandom(cantidadMAX,diametro) {
  
  for (let cantidad = 0; cantidad < cantidadMAX; cantidad = cantidad +1) {
    
    let x = random(5*m, 7*m)
    let y = random(m, 4*m)
    noStroke()
    fill(0)
    ellipse(x, y, diametro)
    
  }
}

function botonApagado(x,y,letra,correccionx, correcciony){

  push()
  fill(40,24,71)
  stroke(232,214,189)
  strokeWeight(m/miti)
  rect(x,y,m,m,m/3)
  textFont(tipo)
  textAlign(CENTER,CENTER)
  textSize(m/1.7)
  fill(232,214,189)
  noStroke()
  text(letra, x+correccionx, y+correcciony)
  pop()
}

function botonPrendido (x,y,letra,correccionx, correcciony){
  push()
  fill(232,214,189)
  stroke(232,214,189)
  strokeWeight(m/miti)
  rect(x,y,m,m,m/3)
  textFont(tipo)
  textAlign(CENTER,CENTER)
  textSize(m/1.7)
  fill(40,24,71,)
  noStroke()
  text(letra, x+correccionx, y+correcciony)
  pop()
}

//FUNCION VOLUMEN 

function createVolume(sound) {
  let vol = new p5.Amplitude()
  vol.setInput(sound)
  return vol
}

function suboybajovol (sound, volumen) {
  sound.setVolume(volumen * volgeneral) 
}

function keyPressed() {
  //STOP-PLAY
  
  /*bajo*/
  if(key=='X' || key=='x'){
    if(bajo.isPlaying()) {
      bajo.stop()
    } else {
      bajo.loop()
    }
  }

  /*bamboos*/
  if (key == 'd' || key == 'D') {
    if (bamboos.isPlaying()) {
      bamboos.stop()
    } else {
      bamboos.loop()
    }
  }

  /*batería*/
  if (key == 'f' || key == 'F') {
    if (bateria.isPlaying()) {
      bateria.stop()
    } else {
      bateria.loop()
    }
  }
  
  /*chords*/
  if (key == 'w' || key == 'W') {
    if (chords.isPlaying()) {
      chords.stop()
    } else {
      chords.loop()
    }
  }

  /*clap*/
  if (key == 'a' || key == 'A') {
    if (clap.isPlaying()) {
      clap.stop()
    } else {
      clap.loop()
    }
  }

  /*cuerdas*/
  if (key == 'q' || key == 'Q') {
    if (cuerdas.isPlaying()) {
      cuerdas.stop()
    } else {
      cuerdas.loop()
    }
  }

  /*shakers*/
  if (key == 's' || key == 'S') {
    if (shakers.isPlaying()) {
      shakers.stop()
    } else {
      shakers.loop()
    }
  }
  /*trumpets*/
  if (key == 'c' || key == 'C') {
    if (trumpet.isPlaying()) {
      trumpet.stop()
    } else {
      trumpet.loop()
    }
  }

  //Volumen 
  if (keyCode === UP_ARROW) {
    volgeneral = volgeneral + 0.1
  } else if (keyCode === DOWN_ARROW) {
    volgeneral = volgeneral - 0.1
  }

  volgeneral = constrain(volgeneral, 0, 1)

  suboybajovol(bajo, 1)
  suboybajovol(bamboos, 0.5)
  suboybajovol(bateria, 0.7)
  suboybajovol(chords, 0.7)
  suboybajovol(clap, 0.5)
  suboybajovol(cuerdas, 1)
  suboybajovol(shakers, 0.5)
  suboybajovol(trumpet, 1)

  /*STOP*/
  if(key == " "){
    bajo.stop()
    bamboos.stop()
    bateria.stop()
    chords.stop()
    clap.stop()
    cuerdas.stop()
    shakers.stop()
    trumpet.stop()
  } 

}
