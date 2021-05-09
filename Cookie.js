class Cookie {


  static balls = [];
  //static ballCount = 0;


  constructor (position, speed, radius, color) {
    this.position = position;
    this.speed = speed;
    this.radius = radius;
    this.color = color;
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
    console.log(this.position);
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

  /*
  static remove() {
    for (let i = 0; i < Cookie.balls.length; i++) {
      if( getMousePos === Cookie.balls[i])
        Cookie.balls.splice(i, 1);
    }
  }
*/
  


}
