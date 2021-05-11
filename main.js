// set up game window
var canvas = document.getElementById("canvas");
canvas = document.body.appendChild(canvas);




function gameloop () {
  //clear the canvas
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);


  for(i = 0; i < Cookie.balls.length; i++){
    Cookie.balls[i].draw();
    Cookie.balls[i].move();
  }
}

setInterval(gameloop, 1000/60)


let cookiespawntime = 1000;

function spawnCookie() {
  
  if(Cookie.balls.length < 5){
    Cookie.balls.push(new Cookie({x: Math.ceil(Math.random() * 750) + 25, y: Math.ceil(Math.random() * 350)+ 25}, {x: Math.floor(Math.random() * 3)+ 1, y: Math.floor(Math.random() * 3)+ 1}, 25, "Peru"))
  }
}
setInterval(spawnCookie, cookiespawntime)




function mousePressed() {
    for(let i = Cookie.balls.length - 1; i >= 0; i--){
      if(Cookie.balls[i].contains(mousePos.x, mousePos.y)){
        Cookie.balls.splice(i, 1);
      }
    }
}