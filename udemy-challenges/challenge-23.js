/*
Coding Challenge #23

Your tasks:

1. Re-create Challenge #22, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!

Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 20;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} slowing to ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 15;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with charge ${this.#charge}%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery charged to Level: ${this.#charge}%`);
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian.make);
console.log(rivian.speed);
// console.log(rivian.#charge);

rivian.accelerate().accelerate().brake().chargeBattery(69).accelerate();
