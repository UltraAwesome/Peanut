windowHeight = 150;

let positionX = 0;
let positionY = 0;

let costume096 = document.createElement('div');
costume096.style.width = '150px';
costume096.style.height = '200px';
costume096.style.backgroundImage = 'url("096.png")';
costume096.style.backgroundSize = 'cover';
costume096.style.position = 'absolute';
document.body.appendChild(costume096);

document.addEventListener('keydown', function(event) {
  if (event.key === 'd') {
    positionX += 20;
    costume096.style.left = positionX + 'px';
  } else if (event.key === 'a') {
    positionX -= 20;
    costume096.style.left = positionX + 'px';
  } else if (event.key === 's') {
    positionY += 20;
    costume096.style.top = positionY + 'px';
  } else if (event.key === 'w') {
    positionY -= 20;
    costume096.style.top = positionY + 'px';
  }
});
document.addEventListener('keydown', function(event) {
  // existing code for moving 096

  // check if 096 went out of the screen view
  if (positionX < 0 || positionX > window.innerWidth || positionY < 0 || positionY > window.innerHeight) {
    positionX = 10;
    positionY = 295;
    costume096.style.left = positionX + 'px';
    costume096.style.top = positionY + 'px';
  }
});
let dSprites = [];

for (let i = 0; i < 10; i++) {
  let dSprite = document.createElement('div');
  dSprite.style.width = '100px';
  dSprite.style.height = '300px';
  dSprite.style.backgroundImage = 'url("dclass.png")';
  dSprite.style.backgroundSize = 'cover';
  dSprite.style.position = 'absolute';
  dSprite.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  dSprite.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  document.body.appendChild(dSprite);
  dSprites.push(dSprite);
}

document.addEventListener('keydown', function(event) {
  // existing code for moving 096
  // existing code for boundary check

  for (let i = 0; i < dSprites.length; i++) {
    let dSprite = dSprites[i];
    if (positionX < (dSprite.offsetLeft + dSprite.offsetWidth) &&
        (positionX + 50) > dSprite.offsetLeft &&
        positionY < (dSprite.offsetTop + dSprite.offsetHeight) &&
        (positionY + 50) > dSprite.offsetTop) {
      dSprite.style.backgroundImage = 'url("dead.png")';
      dSprite.style.backgroundSize = 'cover';
      dSprite.style.pointerEvents = 'none';
    }
  }
});
function repeatInfinitely() {
  while (true) {
    let randomNumber = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1:
          dSprite.x = (dSprite.x + 10);
          dSprite.x = (dSprite.x + 10);
          dSprite.x = (dSprite.x + 10);
          dSprite.x = (dSprite.x + 10);
          dSprite.x = (dSprite.x + 10);
    
      case 2:
          dSprite.x = (dSprite.x - 10);
          dSprite.x = (dSprite.x - 10);
          dSprite.x = (dSprite.x - 10);
          dSprite.x = (dSprite.x - 10);  
          dSprite.x = (dSprite.x - 10);
        break;
      case 3:
        
          dSprite.y = (dSprite.y + 10);
          dSprite.y = (dSprite.y + 10);
          dSprite.y = (dSprite.y + 10);
          dSprite.y = (dSprite.y + 10);
          dSprite.y = (dSprite.y + 10);
        break;
      case 4:
          dSprite.y = (dSprite.y - 10);
          dSprite.y = (dSprite.y - 10);
          dSprite.y = (dSprite.y - 10);
          dSprite.y = (dSprite.y - 10);
          dSprite.y = (dSprite.y - 10);
        break;
    }
  }
}
  setInterval(function() {
    let dx = Math.floor(Math.random() * 10) - 5; // random number between -5 and 5
    let dy = Math.floor(Math.random() * 10) - 5; // random number between -5 and 5
    dSprite.style.left = (dSprite.offsetLeft + dx) + "px";
    dSprite.style.top = (dSprite.offsetTop + dy) + "px";
  }, 1000);
