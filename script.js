
let peanut = document.createElement('div');
peanut.style.width = '50px';
peanut.style.height = '50px';
peanut.style.backgroundImage = 'url("173.png")';
peanut.style.backgroundSize = 'cover';
peanut.style.position = 'absolute';
document.body.appendChild(peanut);

let position = 0;

function movePeanut() {
  if (position < window.innerWidth) {
    position += 20;
    peanut.style.left = position + 'px';
  } else {
    position = 0;
    peanut.style.left = position + 'px';
  }
}

setInterval(movePeanut, 100);
