const x = document.getElementById('canvas');
const ctx = x.getContext('2d');




class Cookie {


  static balls = [];
  //static ballCount = 0;


  constructor (position, speed, radius, color) {
    this.position = position;
    this.speed = speed;
    this.radius = radius;
    this.color = color;
    this.imgX = this.position.x - this.radius;
  }






  // draws a circle with correct position, color and radius
  draw () {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0, 2 * Math.PI
    );
    context.fillStyle = this.color;
    context.fill();

  }

  // move circle  and reverse direction if circle collides with border
  move () {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    
    if(
      this.position.x + this.radius > canvas.width ||
      this.position.x - this.radius < 0
    )
    this.speed.x *= -1;

    if(
      this.position.y + this.radius > canvas.height ||
      this.position.y - this.radius < 0
    )
    this.speed.y *= -1;
  }

  
  static remove(mousePos) {
    for (let i = 0; i < Cookie.balls.length; i++) {
      let dy = Math.abs(Cookie.balls[i].position.y - mousePos.y);
      let dx = Math.abs(Cookie.balls[i].position.x - mousePos.x);
      let d = Math.sqrt(dy*dy + dx*dx);

      if( d <= Cookie.balls[i].radius + 3){
        Cookie.balls.splice(i, 1);
        cookies = cookies + cookiebonus
      }
    }
  }

  


}



const img = document.createElement('img');
img.src = 'https://cdn.discordapp.com/attachments/799537708217270273/829326866557042718/unknown.png';



Cookie.prototype.render = function() {
  // begin a  new sub-path
  ctx.beginPath();
  ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-in';
  ctx.drawImage(img, this.imgX, this.position.y - this.radius, this.radius * 2, this.radius * 2);
  ctx.globalCompositeOperation = 'source-over';
};

Cookie.prototype.motion = function() {
  this.imgX = this.imgX + 1;
  this.position.x = this.position.x + 1;
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Cookie.spawnCookie.render();
  Cookie.spawnCookie.motion();
  requestAnimationFrame(animate);
}
animate();
