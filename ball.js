class Ball {

  static balls = [];
  //static ballCount = 0;

  constructor () {
    this.ball = document.createElement("p");
    this.ball = document.body.appendChild(this.ball);
    this.ball.innerHTML = "<img src=\"images/cookie.png\" width=\"50px\" height=\"50px\">";
    this.ball.style.userSelect="none";
    //this.ball.id = "ball" + Ball.ballCount;
    //Ball.ballCount++;
    this.ball.style.position = "fixed";
    this.ball.style.left = Math.floor(window.innerWidth * Math.random());
    this.ball.style.top = Math.floor(window.innerHeight * Math.random());
    this.ball.style.fontSize = 100;
    this.ball.style.margin = "-3%";
    this.ball.onclick = function () {Ball.remove(this); this.remove();}
    this.xDir = 10;
    this.yDir = 10;
    Ball.balls[Ball.balls.length] = this;
  }

  move () {
    this.ball.style.left = parseInt(this.ball.style.left) + this.xDir ;
    this.ball.style.top = parseInt(this.ball.style.top) + this.yDir ;

    if(parseInt(this.ball.style.left) > window.innerWidth || parseInt(this.ball.style.left) < 0)
      this.xDir *= -1;
    if(parseInt(this.ball.style.top) > window.innerHeight || parseInt(this.ball.style.top) < 0)
      this.yDir *= -1;
  }

  static create() {
    new Ball();
  }

  static remove(ball) {
    for (let i = 0; i < Ball.balls.length; i++) {
      if(ball === Ball.balls[i].ball)
        Ball.balls.splice(i, 1);
    }
  }
}
