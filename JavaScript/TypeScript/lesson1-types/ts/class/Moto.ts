import { Car } from "./Car.js";
class Moto extends Car{
   constructor(brand: string, model: string, year: number){
    super(brand, model, year);
   }
}


export {Moto}