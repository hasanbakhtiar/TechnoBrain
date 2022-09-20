// ES5
// const Car = function(brand,year,color){
//     this.ibrand = brand;
//     this.iyear = year;
//     this.icolor = color;
// }

// const speedCount=function(hour,km){
//     return `${myCar.ibrand},${hour/km}km/h`
// }

// const myCar  = new Car('bmw',1990,'black');
// console.log(speedCount(2,100));

// ES6
class Car {
  constructor(brand, year, color) {
    this.ibrand = brand;
    this.iyear = year;
    this.icolor = color;
  }
  speedCount(hour, km) {
    // return `${this.ibrand},${hour/km}km/h`
    return `this ${this.ibrand} is very powerfull and expensive`;
  }
}

const myCar = new Car("bmw", 1990, "black");
console.log(myCar.ibrand);
console.log(myCar.speedCount(2, 100));

class Moto extends Car {
  constructor(brand, year, color, maxSpeed) {
    super(brand, year, color);
    this.imaxSpeed = maxSpeed;
  }
  
}
const myMoto = new Moto("yamaha", 1991, "red", 300);
console.log(myMoto.ibrand);
console.log(myMoto.speedCount(3, 200));
