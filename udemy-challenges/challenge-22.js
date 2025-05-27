/*
Coding Challenge #22

Your tasks:

1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism �

Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 20;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} slowing to ${this.speed} km/h`);
};

// Child constructor function
function CarEv(make, speed, charge) {
  Car.call(this, make, speed); // Inherit from Car
  this.charge = charge;
}

// Inherit prototype chain
CarEv.prototype = Object.create(Car.prototype);
CarEv.prototype.constructor = CarEv;

// Add new method
CarEv.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Current Battery Level: ${this.charge}%`);
};

// Polymorphic accelerate method
CarEv.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new CarEv("Tesla", 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(100);
tesla.accelerate();
