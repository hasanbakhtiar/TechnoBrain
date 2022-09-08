// function name(params){ code }
// function car(brand,model,year,newinfo){
//     console.log(brand);
//     console.log(model);
//     console.log(year);
//     console.log(newinfo);
// }

// car('bmw','x5',1995,false);
// car('mercedes','s500',2022,true);

// (function info(name){
//     console.log('Hello,'+name);
// })('Elmin')

// const info = function(a){
//     console.log(a);
// }
// info('Hello');


// const info = function(a){
//     return a;
// }
// console.log(info('Hello'));

// arrow function

// ()=>{}
// const info =(test)=>{
//     return test;
// }
// console.log('Hello');


// const productPrices = [
//     {
//         name:'Xiaomi Poco f3',
//         price: 900
//     },
//     {
//         name:'iphone 13',
//         price: 2259
//     }
// ] 

// const endirim = 1.5;
// const kamissiya = 20;
// const calculate=(numbOne=1000,numbTwo=30)=>{
//     return (numbOne+numbTwo) / endirim;
// }
// // NaN = not a number
// console.log(productPrices[0].name);
// console.log(calculate(productPrices[0].price,kamissiya)+"manat");


// console.log(920/1.5);
// const endirim = 0.7;
// const qiymet = 920;
// const netice1 = qiymet-(920 * 0.7 /100);
// const netice2 = qiymet - netice1;
// console.log(netice1);
// console.log(920 * 0.7 / 100);


// const calc = (price,sales)=>{
//     return price-(price * sales / 100);
// }
// console.log(calc(900,2));

// const myCar = {
//         model:"bmw",
//         year:2000,
//         calcSpeed : (km,hour)=>{
//             const speed = km/hour;
//             return speed + 'km/h';
//         }

// }
// console.log(myCar.model+'='+myCar.calcSpeed(1000,2));


const info = ['table','pen','book'];

// info.push('door');
// info.pop();
// info.unshift('mouse')
info.shift()
console.log(info);

