// var info:string = "Hello";
// var infoArr:Array<number> = [1,2,3,4,5];
// console.log(infoArr);
// type infoObjType={
//     model:string,
//     newCar:boolean
// }
// var infoObj:infoObjType ={
//     model:"BMW X5",
//     newCar:true
// }
// console.log(infoObj);
// class Car {
//     public ibrand;
//     public imodel;
//     public iyear;
//     constructor(brand: string, model: string, year: number) {
//         this.ibrand = brand;
//         this.imodel = model;
//         this.iyear = year;

//     }
// }

// var infoCar = new Car("BMW","X5",2022);

// console.log(infoCar.ibrand);

// function comingInfo(data:number){
//     return data;
// }

// function info(dataOne:number,dataTwo?:number):void{
//     let totalData = dataOne ;
//     console.log(comingInfo(totalData));
    
// }
// info(5);

// var ul:any = document.querySelector<HTMLUListElement>('ul');

// fetch('https://rickandmortyapi.com/api/character')
// .then((res)=>res.json())
// .then((data:any)=>{
//     let li  = "";
//     data.results.map((fd:any,i:number)=>{
//         return li+= `<div>
//         <span>${i+1}</span>
//         <li>${fd.name}</li>
//         <img src="${fd.image}" />
//         </div>`
//     })
//     ul.innerHTML = li;
// })

import { Moto } from "./class/Moto.js";
import { Car } from "./class/Car.js";

var infoMoto = new Moto("Yamaha","s500",2020);
var infoCar = new Car("BMW","X5",2022);

// console.log(infoMoto.imodel);
console.log(infoCar.);
