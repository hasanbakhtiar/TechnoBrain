// interface IDatabase{
//     add();
//     get();
//     update();
//     delete();
// }
// class MySql implements IDatabase{
//     add(){
//         console.log('MySql added');
//     }
//     get(){
//         console.log('MySql get');
//     }
//     update(){
//        console.log('MySql update');
//     }
//     delete(){
//        console.log('MySql delete');
//     }
// }
// class MongoDB implements IDatabase{
//     add(){
//         console.log('MongoDB added');
//     }
//     get(){
//         console.log('MongoDB get');
//     }
//     update(){
//        console.log('MongoDB update');
//     }
//     delete(){
//        console.log('MongoDB delete');
//     }
// }
// function AddDataBase(dt:IDatabase){
//     dt.add();
// }
// function DeleteDataBase(dt:IDatabase){
//     dt.delete();
// }
// AddDataBase(new MongoDB);
// DeleteDataBase(new MySql);
// var car:string = 'red';
// var colorCar = (color:'blue'| 'green' | 'red' | 'orange')=>{
//     car = color;
// }
// colorCar('orange')
// console.log(car);
