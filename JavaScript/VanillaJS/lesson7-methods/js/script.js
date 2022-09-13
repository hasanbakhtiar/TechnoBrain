// Math methods
// const infoNumb = 5.9264;

// console.log(parseInt(infoNumb));
// console.log(parseFloat(infoNumb));
// console.log(infoNumb.toExponential(2));
// console.log(infoNumb.toFixed(10));
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.floor(infoNumb));
// console.log(Math.ceil(infoNumb));
// console.log(Math.abs(-3));
// console.log(Math.pow(3,2));

// const infoArr = ['table','book','pen'];
// infoArr.pop();
// infoArr.shift();
// infoArr.push('new value')
// infoArr.unshift('new value')
// console.log(infoArr);

// const cars = [
//     {
//         brand: "BMW",
//         color: 'red',
//     },
//     {
//         brand: "Mercedes",
//         color: 'blue'
//     }
// ];

// console.log(
    // cars.map((comingdata)=>{
            // return comingdata.brand;
    // })
// );


// fetch('https://restcountries.com/v3.1/all')
// .then((res)=>res.json())
// .then((comingdata)=>console.log(
//     comingdata.map((a)=>{
//         return a.name.common;
//     })
// ))

// import {infoText,test} from './utils.js';
// import * as utils from './utils.js';
import * as utils from '../data/carsData.js';

// console.log(utils.infoText.name);
// console.log(utils.infoText);

console.log(utils.data1.map((a)=>(
    a.name
)));


const data3 = '{"name": "BMW","color": "red"}'

const dataConvert1 = JSON.parse(data3);
const dataConvert2 = JSON.parse(utils.data2);
console.log(dataConvert2);
