/*
Coding Challenge #20

Your tasks:
1. Re-create Challenge #19, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.

Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

const ford = new CarCl("FORD", 120);

console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford.speed);

ford.accelerate();
ford.brake();
console.log("Challenge-20 completed \n");
