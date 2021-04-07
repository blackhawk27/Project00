
function draw () {
    for (let ball of Ball.balls)
      ball.move();
}

setInterval(draw, 33);
setInterval(Ball.create, 5000)



/*
class Car { // navnet på din class

  static cars = [];

   constructor (inColor) { // en class skal have constructor metode
      this.color = inColor; // dette er en property, altså en variabel som hører til din class
      Car.cars[Car.cars.length] = this;
   }

   print () { // dette er en metode, altså en funktion som hører til din class
      console.log("This car is " + this.color)
  }

  static listCars() {
    console.log(Car.cars);
  }
}

new Car("red"); // sådan laver man et objekt
new Car("blue");

Car.listCars();
*/
