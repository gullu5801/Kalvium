 // Parent constructor
function Vehicle(brand, year) {
  this.brand = brand;
  this.year = year;
}

Vehicle.prototype.drive = function () {
  console.log(`The ${this.brand} vehicle from ${this.year} is driving.`);
};

// Child constructor
function Car(brand, year, doors) {
  // Call parent constructor
  Vehicle.call(this, brand, year);
  this.doors = doors;
}

// Inherit from Vehicle
Car.prototype = Object.create(Vehicle.prototype);  
Car.prototype.constructor = Car;

// Add honk method
Car.prototype.honk = function () {
  console.log(`The ${this.brand} car says: Beep beep!`);
};

// Example usage
const myCar = new Car("Honda", 2023, 4);
myCar.drive(); // inherited method
myCar.honk();  // car-specific method
            
