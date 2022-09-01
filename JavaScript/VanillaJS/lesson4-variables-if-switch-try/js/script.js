// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// =========================================================================

// var      ->      variable  ->   global
// const    ->      constant  ->   local
// let      ->      let       ->   local

// var a = 5;
//  a = 10;
// console.log(a);

// console.log(b);
// var b = 10;

// // global
// if (true) {
//     // local global

//     if(true){
//         // local global
//         if (true) {
//             let a  = 5;
//             // local
//         }
//         console.log(a);
//     }
// }

// =============================================================
// if -> eger
// else -> deyilse
// else if - deyilse eger

// const a = "hello";

// if (a==10) {
//     console.log('a beraberdir 10a');
// }else if(a<5){
//     console.log('a kicikdir 5den');
// }else if( a==='hello'){
//     console.log('a hello dur');

// }
// else{
//     console.log('sehvdir');
// }

// const myTime = 9;
// if (myTime >= 5 && myTime < 13) {
//   console.log("good morning");
//   if (myTime == 7) {
//     console.log('get up');
//   }else if(myTime == 9){
//         console.log('have breakfast');
//   }
// } else if (myTime >= 13 && myTime < 17) {
//   console.log("good afternoon");
// } else if (myTime >= 17 && myTime < 21) {
//   console.log("good evening");
// } else if (myTime >= 21 && myTime < 23) {
//   console.log("good night");
// } else {
//   console.log("no time");
// }

// let info = 10;
// switch (info) {
//   case 5:
//     console.log("this is five");
//     break;

//     case 10:
//         console.log("this is ten");
//         if (info < 100) {
//             info += 10;
//             console.log(info);
//             if (info > 5) {
//                 info-=5;
//                 console.log(info);
//                 info+=1;
//                 switch(info){
//                     case 15:
//                         console.log('success');
//                         break;
//                     default:
//                         console.log('reject');
//                         break;
//                 }
//             }
//         }
//         break;

//         case "hello":
//             console.log("this is hello");
//             break;

//             case true:
//                 console.log("this is true");
//                 break;
//   default:
//     console.log("this is default blog");
//     break;
// }

// try{
//     throw 'super code';
//     console.loga('a');
// }catch(err){
//     console.log(err);
//     // console.log('something wrong');
// }finally{
//     console.log('im runnig everytime...');
// }


const money =10;


console.log('bread','onion');    