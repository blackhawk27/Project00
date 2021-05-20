// set up game window
let canvas = document.getElementById("canvas");
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


let cookiespawntime = 5000;

// Advanced setinterval
let spawnCookie = function() {
    // cookiespawntime *= 1;
    setTimeout(spawnCookie, cookiespawntime);

    if(Cookie.balls.length < maxcookies){
      Cookie.balls.push(new Cookie({x: Math.ceil(Math.random() * 545) + 25, y: Math.ceil(Math.random() * 550)+ 25}, 
      {x: Math.floor(Math.random() * 3) + 1, y: Math.floor(Math.random() * 3) + 1}, 25, "Peru"))
    }
}
setTimeout(spawnCookie, cookiespawntime);


let autoBake = 0;

function automaticBaking() {
    cookies = cookies + autoBake;
    totalCookies = totalCookies + autoBake;
    return (cookies, totalCookies);
}

setInterval(automaticBaking, 1000);

/*
function spawnCookie() {
  
  if(Cookie.balls.length < 10){
    Cookie.balls.push(new Cookie({x: Math.ceil(Math.random() * 750) + 25, y: Math.ceil(Math.random() * 350)+ 25}, 
    {x: Math.floor(Math.random() * 3) + 1, y: Math.floor(Math.random() * 3) + 1}, 25, "Peru"))
  }
}
setInterval(spawnCookie, cookiespawntime)
*/
