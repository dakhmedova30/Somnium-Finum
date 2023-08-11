let catGirl, yanaImg, enemy, gif, bg0, bg1, bg2, battleBg;
let dialogueBox, dialogueImg, rune, runeImg;
let rock1Img, rock2Img, bush1Img, bush2Img;
let rock1, rock2, rock3, rock4, bush1, bush2, bush3, bush4;
let worm, wormImg1, wormImg2, wormAni1, wormAni2;
let fox, foxImg, foxAni;
let glass1, glass2, glass3, glass4, glass5, glass6;
let goodEnding, badEnding;
let titleDirections, hidingDirections, mazeDirections, foxDirections, wormDirections;
var titleMusic, minigameMusic, battleMusic, endingMusic;
let catIdleFront, catIdleRight, catIdleLeft, catIdleBack;
let catFront, catRight, catLeft, catBack, catBattle;
let catGirlFace, catGirl_Face, yana_Face;
let ani1, ani2, ani3, ani4;
let catX, catY;
let screen = 0;
let begin = true;
let catHP = 100;
let catDEF = 0;
let enemyHP = 100;
let enemyDEF = 0;
let catTurn = true;
let enemyTurn = false;
let turns = 1;
let battleText = " ";
let battleStart = true;
let cTurn = false;
let eTurn = false;
let randInt;
let script = [];
let names = [];
let words, name;
var font;
let i = 0;
let nextDialogue;
let walls;
let runes = 3;
let hiding = true;
let startWorm = true;
let wormPoints = 0;
let hidingWorm = true;
let startFox = true;
let hidingFox = true;
let qte = false;
let rPressed = 0;
let timer = 5;
let hidingInst = true;
let mazeInst = true;
let foxInst = true;
let wormInst = true;
let faces = [];
let xArray = [];
let xPos;
let runeShow = true;
let screen0 = true;
let screen1 = true;
let screen28 = true;
let screen17 = true;
let screen19a = true;
let screen19b = true;
battleEnd = true;

function preload() {
  gif = loadImage("assets/Backgrounds/Start.gif");
  bg0 = loadImage("assets/Backgrounds/Grass_0.png");
  bg1 = loadImage("assets/Backgrounds/Grass_1.png");
  bg2 = loadImage("assets/Backgrounds/Grass_2.png");
  battleBg = loadImage("assets/Backgrounds/Battle.png");
  yanaImg = loadImage("assets/People/Yana.png");
  dialogueImg = loadImage("assets/Other/Dialogue_Box.png");
  runeImg = loadImage("assets/Objects/Rune.png");
  rock1Img = loadImage("assets/Objects/Rock_1.png");
  rock2Img = loadImage("assets/Objects/Rock_2.png");
  bush1Img = loadImage("assets/Objects/Bush_1.png");
  bush2Img = loadImage("assets/Objects/Bush_2.png");
  glass1 = loadImage("assets/Backgrounds/Background_1.png");
  glass2 = loadImage("assets/Backgrounds/Background_2.png");
  glass3 = loadImage("assets/Backgrounds/Background_3.png");
  glass4 = loadImage("assets/Backgrounds/Background_4.png");
  glass5 = loadImage("assets/Backgrounds/Background_5.png");
  glass6 = loadImage("assets/Backgrounds/Background_6.png");
  badEnding = loadImage("assets/Backgrounds/Bad_Ending.gif");
  goodEnding = loadImage("assets/Backgrounds/Good_Ending.gif");
  catGirl_Face = loadImage("assets/People/CatGirl_Face.png");
  yana_Face = loadImage("assets/People/Yana_Face.png");
  wormImg1 = loadAnimation("assets/Animals/Worm_1.png", "assets/Animals/Worm_2.png", "assets/Animals/Worm_3.png");
  wormImg2 = loadAnimation("assets/Animals/Worm_1.png");
  foxImg = loadAnimation("assets/Animals/Fox_1.png", "assets/Animals/Fox_2.png", "assets/Animals/Fox_3.png", "assets/Animals/Fox_4.png", "assets/Animals/Fox_5.png", "assets/Animals/Fox_6.png", "assets/Animals/Fox_7.png");
  catFront = loadAnimation("assets/People/Cat_0.png", "assets/People/Cat_1.png", "assets/People/Cat_0.png", "assets/People/Cat_2.png");
  catRight = loadAnimation("assets/People/Cat_3.png", "assets/People/Cat_4.png", "assets/People/Cat_3.png", "assets/People/Cat_5.png");
  catLeft = loadAnimation("assets/People/Cat_6.png", "assets/People/Cat_7.png", "assets/People/Cat_6.png", "assets/People/Cat_8.png");
  catBack = loadAnimation("assets/People/Cat_9.png", "assets/People/Cat_10.png", "assets/People/Cat_9.png", "assets/People/Cat_11.png");
  catBattle = loadAnimation("assets/People/Cat_3.png");
  font = loadFont("assets/Other/pcsenior.ttf");
  titleMusic = loadSound("assets/Music/Title.wav");
  minigameMusic = loadSound("assets/Music/Minigame.wav");
  battleMusic = loadSound("assets/Music/Battle.wav");
  endingMusic = loadSound("assets/Music/Ending.wav");
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(1440, 720);
  noSmooth();
  textFont(font);
  titleDirections = new Sprite(width/2, height/2, 500, 350, "n");
}

function draw() {
  if (screen == 0) {
    if (screen0) {
      titleMusic.play();
      titleMusic.loop();
      titleMusic.setVolume(0.2);
      screen0 = false;
    }
    background(gif);
    title();
    
    if (keyIsDown(13)) {
      screen = 1;
      playAssets();
    }
  }
  if (screen == 1) {
    if (screen1) {
      titleMusic.stop();
      minigameMusic.play();
      minigameMusic.loop();
      minigameMusic.setVolume(0.2);
      screen1 = false;
    }
    yana.pos = { x: 760, y: 360 };
    
    rune.pos = { x: -100, y: -100 };
    rock1.pos = { x: -120, y: -120 };
    rock2.pos = { x: -130, y: -130 };
    rock3.pos = { x: -140, y: -140 };
    rock4.pos = { x: -150, y: -150 };
    bush1.pos = { x: -160, y: -160 };
    bush2.pos = { x: -170, y: -170 };
    bush3.pos = { x: -180, y: -180 };
    bush4.pos = { x: -190, y: -190 };
    worm.pos = { x: -200, y: -200 };
    fox.pos = { x: -210, y: -210 };
    titleDirections.pos = { x: -250, y: -250 };
    enemy.pos = { x: -400, y: -400 };
    dialogueBox.pos = { x: -500, y: -500 };
    catGirlFace.pos = { x: -510, y: -510 };
    words.pos = { x: -700, y: -700 };
    name.pos = { x: -900, y: -900 };
    walls.collider = "n";
    walls.visible = false;
    
    background(bg2);
    walk();
    checkCollision();

    if (i == 0) {
      screen = 14;
    }

    if (catGirl.pos.x <= 0) {
      screen = 2;
      catGirl.pos.x = 1370;
    }
    if (catGirl.pos.y <= 0) {
      screen = 3;
      catGirl.pos.y = 650;
    }
    if (catGirl.pos.x >= 1440) {
      screen = 4;
      catGirl.pos.x = 70;
    }
    if (catGirl.pos.y >= 720) {
      screen = 5;
      catGirl.pos.y = 70;
    }
  }
  if (screen == 2) {
    if (hiding) {
      rune.pos = { x: -100, y: -100 };
    }
    rune.collider = "s";
    rock1.pos = { x: 150, y: 550 };
    rock2.pos = { x: 315, y: 215 };
    rock3.pos = { x: 940, y: 500 };
    rock4.pos = { x: 670, y: 610 };
    bush1.pos = { x: 770, y: 130 };
    bush2.pos = { x: 490, y: 400 };
    bush3.pos = { x: 1290, y: 605 };
    bush4.pos = { x: 1230, y: 170 };
    fox.pos = { x: -210, y: -210 };
    worm.pos = { x: -200, y: -200 };
    yana.pos = { x: -300, y: -300 };
    enemy.pos = { x: -400, y: -400 };
    walls.collider = "n";
    walls.visible = false;
    
    background(bg1);
    walk();
    checkCollision();
    hidingGame();

    if (catGirl.pos.x >= 1440) {
      screen = 1;
      catGirl.pos.x = 70;
    }
    if (catGirl.pos.x < 10) {
      catGirl.pos.x = 10;
    }
    if (catGirl.pos.y < 10) {
      catGirl.pos.y = 10;
    }
    if (catGirl.pos.y > 710) {
      catGirl.pos.y = 710;
    }
  }
  if (screen == 3) {
    rune.pos = { x: 1350, y: 90 };
    if (runeShow) {
      rune.visible = true;
    }
    rock1.pos = { x: -120, y: -120 };
    rock2.pos = { x: -130, y: -130 };
    rock3.pos = { x: -140, y: -140 };
    rock4.pos = { x: -150, y: -150 };
    bush1.pos = { x: -160, y: -160 };
    bush2.pos = { x: -170, y: -170 };
    bush3.pos = { x: -180, y: -180 };
    bush4.pos = { x: -190, y: -190 };
    fox.pos = { x: -210, y: -210 };
    worm.pos = { x: -200, y: -200 };
    yana.pos = { x: -300, y: -300 };
    enemy.pos = { x: -400, y: -400 };
    
    background(bg0);
    walk();
    checkCollision();
    mazeGame();

    if (catGirl.pos.y >= 720) {
      screen = 1;
      catGirl.pos.y = 70;
    }
    if (catGirl.pos.x < 10) {
      catGirl.pos.x = 10;
    }
    if (catGirl.pos.y < 10) {
      catGirl.pos.y = 10;
    }
    if (catGirl.pos.x > 1430) {
      catGirl.pos.x = 1430;
    }
  }
  if (screen == 4) {
    if (hidingFox) {
      rune.pos = { x: -100, y: -100 };
    }
    rock1.pos = { x: -120, y: -120 };
    rock2.pos = { x: -130, y: -130 };
    rock3.pos = { x: -140, y: -140 };
    rock4.pos = { x: -150, y: -150 };
    bush1.pos = { x: -160, y: -160 };
    bush2.pos = { x: -170, y: -170 };
    bush3.pos = { x: -180, y: -180 };
    bush4.pos = { x: -190, y: -190 };
    worm.pos = { x: -200, y: -200 };
    if (startFox) {
      fox.pos = { x: width/2, y: height/2 };
    }
    yana.pos = { x: -300, y: -300 };
    enemy.pos = { x: -400, y: -400 };
    walls.collider = "n";
    walls.visible = false;
    
    background(bg1);
    walk();
    checkCollision();
    foxGame();

    if (catGirl.pos.x <= 0) {
      screen = 1;
      catGirl.pos.x = 1370;
    }
    if (catGirl.pos.y < 10) {
      catGirl.pos.y = 10;
    }
    if (catGirl.pos.x > 1430) {
      catGirl.pos.x = 1430;
    }
    if (catGirl.pos.y > 710) {
      catGirl.pos.y = 710;
    }
  }
  if (screen == 5) {
    if (hidingWorm) {
      rune.pos = { x: -100, y: -100 };
    }
    rock1.pos = { x: -120, y: -120 };
    rock2.pos = { x: -130, y: -130 };
    rock3.pos = { x: -140, y: -140 };
    rock4.pos = { x: -150, y: -150 };
    bush1.pos = { x: -160, y: -160 };
    bush2.pos = { x: -170, y: -170 };
    bush3.pos = { x: -180, y: -180 };
    bush4.pos = { x: -190, y: -190 };
    if (startWorm) {
      worm.pos = { x: width/2, y: height/2 };
    }
    fox.pos = { x: -210, y: -210 };
    yana.pos = { x: -300, y: -300 };
    enemy.pos = { x: -400, y: -400 };
    walls.collider = "n";
    walls.visible = false;
    
    background(bg0);
    walk();
    checkCollision();
    wormGame();

    if (catGirl.pos.y <= 0) {
      screen = 1;
      catGirl.pos.y = 650;
    }
    if (catGirl.pos.x < 10) {
      catGirl.pos.x = 10;
    }
    if (catGirl.pos.x > 1430) {
      catGirl.pos.x = 1430;
    }
    if (catGirl.pos.y > 710) {
      catGirl.pos.y = 710;
    }
  }
  if (screen == 14) {
    catGirl.animation.stop();
    if (i < 12) {
      dialogue();
    } else if (runes >= 4) {
      dialogue();
    } else {
      screen = 1;
    }
  }
  if (screen == 16) {
    background(battleBg);
    catGirl.pos = { x: 470, y: 480 };
    enemy.pos = { x: 900, y: 290 };
    catGirl.changeAnimation("battle");
    catGirl.animation.play();
    catGirl.scale = 5;
    enemy.scale = 5;

    dialogue();
  }
  if (screen == 17) {
    if (screen17) {
      battleMusic.stop();
      endingMusic.play();
      endingMusic.loop();
      endingMusic.setVolume(0.2);
      screen17 = false;
    }
    background(0);
    qte = true;
    catGirl.pos = { x: -280, y: -280 };
    enemy.pos = { x: -300, y: -300 };
    dialogueBox.pos = { x: -500, y: -500 };
    catGirlFace.pos = { x: -510, y: -510 };
    name.pos = { x: -900, y: -900 };

    words.pos = { x: width/2, y: height/2 };
    words.textColor = "red";
    words.textSize = 30;
    words.shapeColor = "#211510";
    words.text = "PRESS R!";
    noStroke();

    if (rPressed == 1) {
      background(glass1);
    } else if (rPressed == 2) {
      background(glass2);
    } else if (rPressed == 3) {
      background(glass3);
    } else if (rPressed == 4) {
      background(glass4);
    } else if (rPressed == 5) {
      background(glass5);
    } else if (rPressed == 6) {
      background(glass6);
    }

    if (rPressed >= 7) {
      screen = 18;
    }
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
    if (timer <= 0) {
      screen = 19;
    }
  }
  if (screen == 18) {
    catGirl.pos = { x: -280, y: -280 };
    enemy.pos = { x: -300, y: -300 };
    dialogueBox.pos = { x: -500, y: -500 };
    catGirlFace.pos = { x: -510, y: -510 };
    name.pos = { x: -900, y: -900 };
    
    background(goodEnding);
    words.pos = { x: width/2, y: height/2 };
    words.textColor = "white";
    words.textSize = 30;
    words.shapeColor = "#211510";
    words.text = "THE END.";
    noStroke();
  }
  if (screen == 19) {
    catGirl.pos = { x: -280, y: -280 };
    enemy.pos = { x: -300, y: -300 };
    dialogueBox.pos = { x: -500, y: -500 };
    catGirlFace.pos = { x: -510, y: -510 };
    name.pos = { x: -900, y: -900 };
    
    background(badEnding);
    words.pos = { x: width/2, y: height/2 };
    words.textColor = "white";
    words.textSize = 30;
    words.shapeColor = "#211510";
    words.text = "THE END.";
    noStroke();
  }
  if (screen == 28) {
    if (screen28) {
      minigameMusic.stop();
      battleMusic.play();
      battleMusic.loop();
      battleMusic.setVolume(0.2);
      screen28 = false;
    }
    yana.pos = { x: -300, y: -300 };
    dialogueBox.pos = { x: -500, y: -500 };
    catGirlFace.pos = { x: -510, y: -510 };
    words.pos = { x: -700, y: -700 };
    name.pos = { x: -900, y: -900 };
    walls.collider = "n";
    walls.visible = false;
    
    if (battleStart) {
      battleSetup();
    }
    battle();
  }
  // allSprites.debug = mouse.pressing();
}

function title() {
  titleDirections.rotationLock = true;
  titleDirections.color = "#211510";
  titleDirections.stroke = "#BC8D52";
  titleDirections.strokeWeight = 5;
  titleDirections.textColor = "white";
  titleDirections.textSize = 27;
  titleDirections.text = "Somnium: Finum\n\nWASD to walk\nF for dialogue\n\nPress ENTER to\nstart!";
}

function hidingG() {
  hidingDirections.rotationLock = true;
  hidingDirections.color = "#211510";
  hidingDirections.stroke = "#BC8D52";
  hidingDirections.strokeWeight = 5;
  hidingDirections.textColor = "white";
  hidingDirections.textSize = 27;
  hidingDirections.text = "Find the lost rune\nby turning over each\nrock and bush.\n\nUncover each object\nby touching it!\n\nPress X to close!";
}

function mazeG() {
  mazeDirections.rotationLock = true;
  mazeDirections.color = "#211510";
  mazeDirections.stroke = "#BC8D52";
  mazeDirections.strokeWeight = 5;
  mazeDirections.textColor = "white";
  mazeDirections.textSize = 27;
  mazeDirections.text = "Navigate your way\nthrough the maze to\nget the lost rune.\n\nDon't touch the\nwalls!\n\nPress X to close!";
}

function foxG() {
  foxDirections.rotationLock = true;
  foxDirections.color = "#211510";
  foxDirections.stroke = "#BC8D52";
  foxDirections.strokeWeight = 5;
  foxDirections.textColor = "white";
  foxDirections.textSize = 27;
  foxDirections.text = "Catch the fox by\ntouching it when it\nstarts running laps\nto get the lost rune.\n\nClick on the fox\nto begin the game!\n\nPress X to close!";
}

function wormG() {
  wormDirections.rotationLock = true;
  wormDirections.color = "#211510";
  wormDirections.stroke = "#BC8D52";
  wormDirections.strokeWeight = 5;
  wormDirections.textColor = "white";
  wormDirections.textSize = 27;
  wormDirections.text = "Whack the worm by\nclicking it at least\nten times to get\nthe lost rune.\n\nClick on the worm\nto begin the game!\n\nPress X to close!";
}

function playAssets() {
  // Walls Group
  walls = new Group();
  walls.color = color(0);
  walls.collider = "n";

  new walls.Sprite(width/2, 10, width - 15, 5);
  new walls.Sprite(10, height/2, 5, height - 15);
  new walls.Sprite(width - 10, height/2, 5, height - 15);
  new walls.Sprite(150, 40, 5, 60);
  new walls.Sprite(width/2 + 35, 417, 450, 5);
  new walls.Sprite(270, 198, 5, 109);
  new walls.Sprite(395, 280, 5, 280);
  new walls.Sprite(75, 220, 130, 5);
  new walls.Sprite(150, 460, 5, 200);
  new walls.Sprite(330, 417, 125, 5);
  new walls.Sprite(275, 560, 255, 5);
  new walls.Sprite(520, 142, 250, 5);
  new walls.Sprite(530, 350, 5, 140);
  new walls.Sprite(673, 280, 290, 5);
  new walls.Sprite(980, 350, 5, 140);
  new walls.Sprite(1042, 280, 130, 5);
  new walls.Sprite(1109, 413, 5, 270);
  new walls.Sprite(1268, 550, 322, 5);
  new walls.Sprite(816, 210, 5, 140);
  new walls.Sprite(980, 70, 5, 120);
  new walls.Sprite(1275, 280, 5, 300);
  new walls.Sprite(1195, 130, 165, 5);

  walls.visible = false;

  // Rune Sprite
  rune = new Sprite(1240, 200, 36, 34, "s");
  rune.rotationLock = true;
  rune.img = runeImg;
  rune.scale = 1.5;
  rune.pos = { x: -100, y: -100 };

  // Rock Sprites
  rock1 = new Sprite(150, 550, 1229, 1199, "s");
  rock1.rotationLock = true;
  rock1.img = rock1Img;
  rock1.scale = 0.15;
  rock1.pos = { x: -120, y: -120 };

  rock2 = new Sprite(315, 215, 294, 154, "s");
  rock2.rotationLock = true;
  rock2.img = rock2Img;
  rock2.scale = 0.3;
  rock2.pos = { x: -130, y: -130 };

  rock3 = new Sprite(940, 500, 1229, 1199, "s");
  rock3.rotationLock = true;
  rock3.img = rock1Img;
  rock3.scale = 0.15;
  rock3.pos = { x: -140, y: -140 };

  rock4 = new Sprite(670, 610, 294, 154, "s");
  rock4.rotationLock = true;
  rock4.img = rock2Img;
  rock4.scale = 0.3;
  rock4.pos = { x: -150, y: -150 };

  // Bush Sprites
  bush1 = new Sprite(770, 130, 260, 259, "s");
  bush1.rotationLock = true;
  bush1.img = bush1Img;
  bush1.scale = 0.4;
  bush1.pos = { x: -160, y: -160 };

  bush2 = new Sprite(490, 400, 138, 132, "s");
  bush2.rotationLock = true;
  bush2.img = bush2Img;
  bush2.scale = 0.6;
  bush2.pos = { x: -170, y: -170 };

  bush3 = new Sprite(1290, 605, 260, 259, "s");
  bush3.rotationLock = true;
  bush3.img = bush1Img;
  bush3.scale = 0.4;
  bush3.pos = { x: -180, y: -180 };

  bush4 = new Sprite(1230, 170, 138, 132, "s");
  bush4.rotationLock = true;
  bush4.img = bush2Img;
  bush4.scale = 0.6;
  bush4.pos = { x: -190, y: -190 };

  // Worm Sprite
  worm = new Sprite(width/2, height/2, 15, 16, "s");
  worm.rotationLock = true;
  wormAni1 = worm.addAnimation("wiggle", wormImg1);
  wormAni1.frameDelay = 10;
  wormAni2 = worm.addAnimation("still", wormImg2);
  wormAni2.frameDelay = 10;
  worm.scale = 4;
  worm.pos = { x: -200, y: -200 };

  // Fox Sprite
  fox = new Sprite(width/2, height/2, 21, 16, "s");
  fox.rotationLock = true;
  foxAni = fox.addAnimation("run", foxImg);
  foxAni.frameDelay = 10;
  fox.scale = 4;
  fox.pos = { x: -210, y: -210 };
  
  // Yana Sprite
  yana = new Sprite(760, 360, 20, 35, "s");
  yana.rotationLock = true;
  yana.img = yanaImg;
  yana.scale = 3;

  // Enemy Sprite
  enemy = new Sprite(350, 200, 30, 30, "s");
  enemy.rotationLock = true;
  enemy.img = yanaImg;
  enemy.scale = 3;
  enemy.pos = { x: -400, y: -400 };

  // Cat Girl Sprite
  catGirl = new Sprite(680, 360, 20, 35, "d");
  catGirl.rotationLock = true;
  ani5 = catGirl.addAnimation("battle", catBattle);
  ani2 = catGirl.addAnimation("right", catRight);
  ani2.frameDelay = 10;
  ani3 = catGirl.addAnimation("left", catLeft);
  ani3.frameDelay = 10;
  ani4 = catGirl.addAnimation("back", catBack);
  ani4.frameDelay = 10;
  ani1 = catGirl.addAnimation("front", catFront);
  ani1.frameDelay = 10;
  catGirl.scale = 3;

  // Dialogue Box Sprite
  dialogueBox = new Sprite(710, 525, 200, 100, "n");
  dialogueBox.rotationLock = true;
  dialogueBox.img = dialogueImg;
  dialogueBox.scale = 2.17;
  dialogueBox.pos = { x: -500, y: -500 };

  // Cat Girl Face Sprite
  catGirlFace = new Sprite(204, 521, 138, 139, "n");
  catGirlFace.rotationLock = true;
  catGirlFace.img = catGirl_Face;
  catGirlFace.scale = 2.37;
  catGirlFace.pos = { x: -510, y: -510 };

  // Dialogue Sprite
  words = new Sprite(885, 570, 1, 1, "n");
  words.pos = { x: -700, y: -700 };

  // Name Sprite
  name = new Sprite(885, 570, 1, 1, "n");
  name.pos = { x: -900, y: -900 };

  // Hiding Instructions
  hidingDirections = new Sprite(width/2, height/2, 650, 350, "n");
  hidingDirections.pos = { x: -260, y: -260 };

  // Maze Instructions
  mazeDirections = new Sprite(width/2, height/2, 600, 350, "n");
  mazeDirections.pos = { x: -270, y: -270 };

  // Fox Instructions
  foxDirections = new Sprite(width/2, height/2, 650, 400, "n");
  foxDirections.pos = { x: -280, y: -280 };

  // Worm Instructions
  wormDirections = new Sprite(width/2, height/2, 650, 400, "n");
  wormDirections.pos = { x: -290, y: -290 };
}

function walk() {
  if (keyIsDown(87)) {
    catGirl.changeAnimation("back");
    catGirl.animation.play();
    catGirl.pos.y -= 3;
  }
  else if (keyIsDown(65)) {
    catGirl.changeAnimation("left");
    catGirl.animation.play();
    catGirl.pos.x -= 3;
  }
  else if (keyIsDown(83)) {
    catGirl.changeAnimation("front");
    catGirl.animation.play();
    catGirl.pos.y += 3;
  }
  else if (keyIsDown(68)) {
    catGirl.changeAnimation("right");
    catGirl.animation.play();
    catGirl.pos.x += 3;
  }
  else {
    catGirl.animation.stop();
  }
}

function checkCollision() {
  if (catGirl.collides(yana)) {
    screen = 14;
  }
  if (catGirl.collides(walls)) {
    catGirl.pos = { x: width/2, y: 620 };
  }
  if (catGirl.collides(rune)) {
    rune.visible = false;
    runes++;
    print(runes);
    runeShow = false;
  }
}

function keyPressed() {
  if (keyCode === 70) {
    if (nextDialogue) {
      i++;
    }
  }
  if (keyCode === 82) {
    if (qte) {
      rPressed++;
    }
  }
  if (keyCode === 88) {
    if ((screen == 2) && hidingInst) {
      hidingDirections.pos = { x: -260, y: -260 };
      hidingInst = false;
    }
    if ((screen == 3) && mazeInst) {
      mazeDirections.pos = { x: -270, y: -270 };
      mazeInst = false;
    }
    if ((screen == 4) && foxInst) {
      foxDirections.pos = { x: -280, y: -280 };
      foxInst = false;
    }
    if ((screen == 5) && wormInst) {
      wormDirections.pos = { x: -290, y: -290 };
      wormInst = false;
    }
  }
}

function dialogue() {
  if (catHP <= 0) {
    i = 32;
    screen = 19;
  }
  
  nextDialogue = true;
  script = [
    "You slowly open your eyes to a grassy, \nflower-filled field. You somehow       \nappeared here out of thin air, but     \neverything certainly felt real. From   \nthe soft grass to the small breeze in  ",
    "the air, it was definitely not a dream.\nYou saw someone standing in front of   \nyou...                                   \n\n",
    "Huh, you fell here too?                \n\n\n\n",
    "You nodded.                            \n\n\n\n",
    "The person standing in front of you had\nshort brown hair with green highlights.\nThey were wearing a rather interesting \noutfit, one that seemed to combine     \nfishnets, a corset, and long boots.    ",
    "They seemed rather familiar, but you   \nweren't sure why...                      \n\n\n",
    "That's so strange... Either way, we      \nshould find a way to get out!          \n\n\n",
    "Oh! I haven't introduced myself yet.   \nMy name is Yana, pleased to meet you.  \n\n\n",
    "About getting out of here... I tried to  \nleave this area before you appeared,   \nbut there seems to be some strange     \nforce field that blocked my path.      \nMaybe... it won't affect you?            ",
    "Although I can't get to the other four \nareas, I was able to see something     \nshining in each of them. We probably   \nhave to retrieve the shining items and \ncombine them to get out.               ",
    "It's just a hunch, but I think it's    \nworth a shot! How about you take a try \nat the force field? If it works, come  \nback to me after you get the four lost \nrunes!                                 ",
    "You nodded.                            \n\n\n\n",
    "...                                      \n\n\n\n",
    "I'm back.                              \n\n\n\n",
    "You handed over the four runes to Yana.\n\n\n\n",
    "No way, you bypassed the force field   \nand found them all! That's... great!     \n\n\n",
    "Yana said this enthusiastically but    \nwore a painful smile on their face.    \n\n\n",
    "Is something wrong?                    \n\n\n\n",
    "You... you can't leave this place.       \nYou have to stay here.                 \n\n\n",
    "What...?                                 \n\n\n\n",
    "I... I said you can't leave! So... just    \nlisten to me and stay here.            \n\n\n",
    "Yana looked like they were in pain. As \nif they were trying to resist something\nfrom the outside.                      \n\n",
    "Is... someone making you say this?       \n\n\n\n",
    "Yana looks at you and nods.            \n\n\n\n",
    "Y-you... have to l-leave... before—        \nI lose control!                        \n\n\n",
    "It's too late. Yana goes limp for a few\nseconds before lunging at you!         \n\n\n",
    "...                                      \n\n\n\n",
    "Ugh...!                                  \n\n\n\n",
    "Why did you attack me?!                \n\n\n\n",
    "I-I'm sorry I can't explain right now. \nI... I don't remember you, but you know  \nwho I am! Everything will come back to \nyou... if you just...                      \n",
    "WAKE UP!                               \n\n\n\n"];
  names = ["...   ", "...   ", "Yana", "You ", "...   ", "...   ", "Yana", "Yana", "Yana", "Yana", "Yana", "You ", "You ", "You ", "...   ", "Yana", "...   ", "You ", "Yana", "You ", "Yana", "...   ", "You ", "...   ", "Yana", "...   ", "You ", "Yana", "You ", "Yana", "Yana"];
  print(i);
  faces = [catGirl_Face, catGirl_Face, yana_Face, catGirl_Face, catGirl_Face, catGirl_Face, yana_Face, yana_Face, yana_Face, yana_Face, yana_Face, catGirl_Face, catGirl_Face, catGirl_Face, catGirl_Face, yana_Face, catGirl_Face, catGirl_Face, yana_Face, catGirl_Face, yana_Face, catGirl_Face, catGirl_Face, catGirl_Face, yana_Face, catGirl_Face, catGirl_Face, yana_Face, catGirl_Face, yana_Face, yana_Face];
  print(i);
  dialogueBox.pos = { x: 710, y: 525 };
  
  name.pos = { x: 451, y: 437 };
  name.color = "#211510";
  name.textColor = "white";
  name.textSize = 27;
  name.text = names[i];
  
  words.pos = { x: 885, y: 570 };
  words.textColor = "white";
  words.textSize = 25;
  words.shapeColor = "#211510";
  words.text = script[i];
  noStroke();

  xArray = [204, 204, 216, 204, 204, 204, 216, 216, 216, 216, 216, 204, 204, 204, 204, 216, 204, 204, 216, 204, 216, 204, 204, 204, 216, 204, 204, 216, 204, 216, 216];
  xPos = xArray[i];

  catGirlFace.pos = { x: xPos, y: 521 };
  catGirlFace.img = faces[i];
  catGirlFace.scale = 2.37;

  if (i == 26) {
    screen = 28;
  }
  if (i == 31) {
    screen = 17;
    i++;
  }
}

function hidingGame() {
  if (hidingInst) {
    catGirl.animation.stop();
    catGirl.pos = { x: 1360, y: height/2 };
    hidingDirections.pos = { x: width/2, y: height/2 };
    hidingG();
  }
  if (catGirl.collides(rock1)) {
    hiding = false;
    rock1.visible = false;
    rock1.collider = "n";
    rune.pos = { x: 150, y: 550 };
    rune.visible = true;
    if (catGirl.collides(rune)) {
      rune.visible = false;
      rune.collider = "n";
      runes++;
      hiding = true;
    }
  }
  if (catGirl.collides(rock2)) {
    rock2.visible = false;
    rock2.collider = "n";
  }
  if (catGirl.collides(rock3)) {
    rock3.visible = false;
    rock3.collider = "n";
  }
  if (catGirl.collides(rock4)) {
    rock4.visible = false;
    rock4.collider = "n";
  }
  if (catGirl.collides(bush1)) {
    bush1.visible = false;
    bush1.collider = "n";
  }
  if (catGirl.collides(bush2)) {
    bush2.visible = false;
    bush2.collider = "n";
  }
  if (catGirl.collides(bush3)) {
    bush3.visible = false;
    bush3.collider = "n";
  }
  if (catGirl.collides(bush4)) {
    bush4.visible = false;
    bush4.collider = "n";
  }
}

function mazeGame() {
  walls.visible = true;
  walls.collider = "s";
  if (mazeInst) {
    catGirl.animation.stop();
    catGirl.pos = { x: width/2, y: 640 };
    mazeDirections.pos = { x: width/2, y: height/2 };
    mazeG();
  }
}

function foxGame() {
  if (foxInst) {
    catGirl.animation.stop();
    catGirl.pos = { x: 80, y: height/2 };
    foxDirections.pos = { x: width/2, y: height/2 };
    foxG();
  }
  if (catGirl.collides(fox) && startFox == false) {
    setTimeout(function() {
      hidingFox = false;
      fox.collider = "n";
      fox.visible = false;
      rune.pos = { x: width/2, y: height/2 };
      rune.visible = true;
      if (catGirl.collides(rune)) {
        rune.visible = false;
        rune.collider = "n";
        runes++;
        hidingFox = true;
      }
    }, 400);
  } else {
    if (fox.mouse.presses()) {
      startFox = false;
    }
    fox.collider = "s";
    fox.changeAnimation("run");
    fox.animation.play();
    fox.pos.x += 5;
    if (fox.pos.x >= 1440) {
      fox.pos.x = 0;
      y1 = Math.floor(Math.random() * 720);
      if (y1 <= 100) {
        y1 += 100;
      }
      if (y1 >= 620) {
        y1 -= 100;
      }
      fox.pos.y = y1;
    }
  }
}

function wormGame() {
  if (wormInst) {
    catGirl.animation.stop();
    catGirl.pos = { x: width/2, y: 80 };
    wormDirections.pos = { x: width/2, y: height/2 };
    wormG();
  }
  if (worm.mouse.presses()) {
    worm.changeAnimation("wiggle");
    worm.animation.play();
    if (wormPoints > 9) {
      setTimeout(function() {
        hidingWorm = false;
        worm.visible = false;
        rune.pos = { x: width/2, y: height/2 };
        rune.visible = true;
        if (catGirl.collides(rune)) {
          rune.visible = false;
          rune.collider = "n";
          runes++;
          hidingWorm = true;
        }
      }, 400);
    }
    setTimeout(function() {
      startWorm = false;
      x1 = Math.floor(Math.random() * 1440);
      y1 = Math.floor(Math.random() * 720);
      if (x1 < 100) {
        x1 += 100;
      }
      if (y1 < 100) {
        y1 += 100;
      }
      if (x1 > 1340) {
        x1 -= 100;
      }
      if (y1 > 620) {
        y1 -= 100;
      }
      worm.pos = { x: x1, y: y1 };
      worm.animation.stop();
      wormPoints++;
    }, 400);
  }
}

function battleSetup() {
  background(battleBg);
  battleText = "Press 1 to attack, 2 to defend, 3 to heal, and 4 to ult!";
  catGirl.pos = { x: 470, y: 480 };
  enemy.pos = { x: 900, y: 290 };
  catGirl.changeAnimation("battle");
  catGirl.animation.play();
  catGirl.scale = 5;
  enemy.scale = 5;

  turns = 1;
  cTurn = true;
  eTurn = false;
  catDEF = 0;
  enemyDEF = 0;
  randInt = (Math.floor(Math.random() * 4) + 1);
  battleStart = false;
}

function battle() {
  background(battleBg);  
  textSize(25);
  fill(255);
  text(battleText, 20, 650);
  textSize(27);
  text("Your HP: " + catHP, 310, 300);
  text("Yana's HP: " + enemyHP, 700, 130);
  textSize(25);
  
  if (catHP > 0 || enemyHP > 0) {
    if (catTurn) {
      if (enemyHP > 0) {
        
        if (turns > 6) {
            battleText = "Press 1 to attack, 2 to defend, 3 to heal, and 4 to ult!\nYou can now use your ultimate!";
        }
  
        // ATTACK - CAT
        if (kb.pressing("1")) {
          battleText = "You threw a punch at Yana!";
  
          if (cTurn) {
            if (enemyDEF > 0) {
              enemyDEF -= (Math.floor(Math.random() * 5) + 10);
              turns++;
            } else {
              enemyHP -= (Math.floor(Math.random() * 5) + 10);
              turns++;
              if (enemyHP < 0) {
                enemyHP = 0;
              }
            }
            eTurn = true;
            cTurn = false;
          }
  
          setTimeout(function() {
            if (enemyHP == 0) {
              battleText = "You won!";
              if (battleEnd) {
                i = 27;
                battleEnd = false;
              }
              screen = 16;
              enemyTurn = false;
              catTurn = true;
            } else {
              enemyTurn = true;
              catTurn = false;
            }
          }, 3000);
        }
  
        // DEFEND - CAT
        if (kb.pressing("2")) {
          battleText = "You took a defensive stance!";
  
          if (cTurn) {
            if (!(catDEF >= 20)) {
              catDEF += (Math.floor(Math.random() * 5) + 10);
              turns++;
              if (catDEF > 20) {
                catDEF = 20;
              }
            }
            eTurn = true;
            cTurn = false;
          }
  
          setTimeout(function() {
            enemyTurn = true;
            catTurn = false;
          }, 3000);
        }
  
        // HEAL - CAT
        if (kb.pressing("3")) {
          battleText = "You gulped down some water!";
  
          if (cTurn) {
            if (!(catHP >= 100)) {
              turns++;
              catHP += (Math.floor(Math.random() * 5) + 10);
              if (catHP > 100) {
                catHP = 100;
              }
            }
            eTurn = true;
            cTurn = false;
          }
          
          setTimeout(function() {
            enemyTurn = true;
            catTurn = false;
          }, 3000);
        }
        
        // ULTIMATE - CAT
        if (kb.pressing("4")) {
          if (turns > 6) {
            battleText = "You threw a roundhouse kick at Yana!";
  
            if (cTurn) {
              enemyHP -= (Math.floor(Math.random() * 10) + 20);
              if (enemyHP > 0) {
                enemyHP = 0;
              }
              eTurn = true;
              cTurn = false;
            }
            
            setTimeout(function() {
              if (enemyHP == 0) {
                battleText = "You won!";
                if (battleEnd) {
                  i = 27;
                  battleEnd = false;
                }
                screen = 16;
                enemyTurn = false;
                catTurn = true;
              } else {
                turns = 0;
                enemyTurn = true;
                catTurn = false;
              }
            }, 3000);
          } else {
            battleText = "Press 1 to attack, 2 to defend, 3 to heal, and 4 to ult!\nYou cannot use your ultimate yet!";
          }
        }
      } else {
        if (battleEnd) {
          i = 27;
          battleEnd = false;
        }
        screen = 16;
      }
    }
    if (enemyTurn) {
      if (catHP > 0) {

        // ATTACK - ENEMY
        if (randInt == 1) {
          battleText = "Yana kicked you!";
  
          if (eTurn) {
            if (catDEF > 0) {
              catDEF -= (Math.floor(Math.random() * 5) + 10);
              turns++;
            } else {
              catHP -= (Math.floor(Math.random() * 5) + 10);
              turns++;
              if (catHP < 0) {
                catHP = 0;
              }
            }
            cTurn = true;
            eTurn = false;
          }
            
          setTimeout(function() {
            if (catHP == 0) {
              battleText = "You lost!";
              if (screen19a) {
                battleMusic.stop();
                endingMusic.play();
                endingMusic.loop();
                endingMusic.setVolume(0.2);
                screen19a = false;
              }
              screen = 19;
              catTurn = false;
              enemyTurn = true;
            } else {
              battleText = "Press 1 to attack, 2 to defend, 3 to heal, and 4 to ult!";
              randInt = (Math.floor(Math.random() * 4) + 1);
              catTurn = true;
              enemyTurn = false;
            }
          }, 1000);
        }
  
        // DEFEND - ENEMY
        if (randInt == 2) {
          battleText = "Yana clenched her fists!";
  
          if (eTurn) {
            if (!(enemyDEF >= 20)) {
              enemyDEF += (Math.floor(Math.random() * 5) + 10);
              turns++;
              if (enemyDEF > 20) {
                enemyDEF = 20;
              }
            }
            cTurn = true;
            eTurn = false;
          }
  
          setTimeout(function() {
            battleText = "Press 1 to attack, 2 to defend, 3 to heal, and 4 to ult!";
            randInt = (Math.floor(Math.random() * 4) + 1);
            catTurn = true;
            enemyTurn = false;
          }, 1000);
        }
  
        // HEAL - ENEMY
        if (randInt == 3) {
          battleText = "Yana ate a fistful of herbs!";
  
          if (eTurn) {
            if (!(enemyHP >= 100)) {
              enemyHP += (Math.floor(Math.random() * 5) + 10);
              turns++;
              if (enemyDEF > 20) {
                enemyDEF = 20;
              }
            }
            cTurn = true;
            eTurn = false;
          }
          
          setTimeout(function() {
            battleText = "Press 1 to attack, 2 to defend, 3 to heal, and 4 to ult!";
            randInt = (Math.floor(Math.random() * 4) + 1);
            catTurn = true;
            enemyTurn = false;
          }, 1000);
        }
  
        // ULTIMATE - ENEMY
        if (randInt == 4) {
          if (turns > 6) {
            battleText = "Yana threw a boulder at you!";
  
            if (eTurn) {
              catHP -= (Math.floor(Math.random() * 10) + 20);
              if (catHP < 0) {
                catHP = 0;
              }
              cTurn = true;
              eTurn = false;
            }
            
            setTimeout(function() {
              if (catHP == 0) {
                battleText = "You lost!";
                if (screen19b) {
                  battleMusic.stop();
                  endingMusic.play();
                  endingMusic.loop();
                  endingMusic.setVolume(0.2);
                  screen19b = false;
                }
                screen = 19;
                catTurn = false;
                enemyTurn = true;
              } else {
                turns = 0;
                battleText = "Press 1 to attack, 2 to defend, 3 to heal, and 4 to ult!";
                randInt = (Math.floor(Math.random() * 4) + 1);
                catTurn = true;
                enemyTurn = false;
              }
            }, 1000);
          } else {
            randInt = (Math.floor(Math.random() * 4) + 1);
          }
        }
      } else {
        if (battleEnd) {
          i = 27;
          battleEnd = false;
        }
        screen = 16;
      }
    }
  } else {
    if (battleEnd) {
      i = 27;
      battleEnd = false;
    }
    screen = 16;
  }  
}