// let count = -10;

// while(count >= 1){
//     console.log(count);
//     count--;
// }


// let count = 100;
// while(count < 10){
//     console.log(count);
//     count++;
// }

// let count = 0;
// do{
//     console.log("test text"+count);
//     count+=10;
// }while(count <= 100);


// for(let count = 0 ; count < 100; count++){
//     if (count ===10) {
//         // break;
//         continue;
//     }
    
//     console.log(count);
// }


// ===========================Array==========================
// const info = ['table','pen', 'book'];
// const info1 = new Array('table1','pen1', 'book1');
// console.log(info1);

// const info =[];
// info[0]='book';
// info[1]='pen';
// info[2]='table';

// const info = ['table','pen', 'book'];
// console.log(info[0]);

// const info = ['table','pen', 'book'];
// info[0] = 'new value';
// info[3] = 'my laptop';

// delete info[0];


// const info = ['table','pen', 'book'];
// info['textName'] = 'laptop';
// console.log(info['textName']);


// const info = ['table','pen', [1,2,3,4,['snow','rain',['data','kwyword',[120,false,300,['laptop',0],'world']]],true], 'book'];
// console.log(info[2][4][2][2][3][1]);

// const info = ['table','pen', 'book'];
// for( x of info){
//     console.log(x);
// }

// for( x in info){
//     console.log(x+info[x]);
// }

// for(let x = 0; x<3;x++){
//     console.log(info[x]);
// }

// console.log(...info);




// ==================================Object==========================================
// const infoObj = {
//     name:'BMW',
//     year:2010
// } 

// infoObj.name = 'mer';
// console.log(infoObj);



// const infoObj = {
//     name:['bmw','lada']
// }
// console.log(infoObj.name[1]);


// const infoArr =[
//     {
//         name:'Bmw',
//         year:1990
//     },
//     {
//         name:'mercedes',
//         year:2000
//     }
// ]

// for( x in infoArr){

//     console.log(infoArr[x].name);
// }