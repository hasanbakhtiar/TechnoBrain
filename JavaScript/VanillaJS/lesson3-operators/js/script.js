// Operators
// Assingment operators
// =
// +=
// *=
// /=
// %=
// **=

// var a = 5;
// a%=10; //a = a+10;
//  console.log(a);

// ============================================================================================
// Aricmatic operators
// +
// -
// *
// /
// %
// **
// ++
// --

// var a = 5;
// a--;
// var b = 10;
// console.log(a);


// ============================================================================================
// Compersion operators
// ==
// ===
// <
// >
// <=
// >=
// !=
// !==
// var a = "5";
// var b = 5;
// if (a !== b) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// ============================================================================================
//Logical operators
// && - AND 
// || - OR
// ! - NOT


// if (!true) {
//     console.log('this is true');
// }else{
//     console.log('this is false');
// }


// const userNameIV = 'emin1';
// const passIV = 'emin2022';

// const dataUserName = 'emin1';
// const dataPass = 'emin2022';

// if ((userNameIV === dataUserName) && (passIV === dataPass)) {
//     console.log('login successfully');
// }else{
//     console.log('username or password is wrong...');
// }




// ============================================================================================
// String Operators 
// +
// +=

// var a = "Hello ";
// var b = "JavaScript";
// a+=b;
// console.log(a);

// ============================================================================================
// Special Operators
// ,            (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// var a = 10, b = 20;
// console.log(a,b);
// \            (tərs slash)(Qaçındırma operatorudur)
// const info = 'JavaScript\'s Book';
// console.log(info);
// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)
// const a = 5;
// console.log(typeof a);
// console.log(typeof(a));

// ?:           (sual üst-üstə qoşa nöqtə)((şərt) ? ifadə1 : ifadə2)(ternary)

// 5>10 ? console.log(true): console.log(false);
// (5 >= 10) ? document.write("Hi") : document.write("Bye");
// şərt            ? true                 : false

// 10  >100 ? console.log('this is true'): console.log('this is false');


// void         (dəyişkənin dəyərini undefined etmək üçündür)
// var a = 5;
// console.log(void a);


// delete       (objectin dəyərini silmək üçündür)
// var a = {
//     name:'b'
// }
// delete a.name;
// console.log(a.name);
// new          (yeni dəyər yaratməq üçündür)
// class Car {
//     constructor(name){
//         this.carName = name; 
//     }
// }

// const myCar = new Car("BMW");
// console.log(myCar.carName);
// this         (mövcud dəyəri işarələmək üçündür)
// in           (dəyişkənin(object) daxilində dəyərin olub olmamasını yoxlamaq üçündür)
// const car = { make: 'Honda', model: 'Accord', year: 1998 };

// console.log('make' in car);
// instanceof   (dəyişkənin(objectin xüsusiyyətinin) içində xüsusiyyət olub olmamasını yoxlamaq üçündür)
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);




    

// Special Operators End
// --------------------------------------------------------------------------------------------------