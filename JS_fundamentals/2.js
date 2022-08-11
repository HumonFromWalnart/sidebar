//Conditions\\

//Дараах 6 бодлогыг Javascript энгийн operation болон condition үйлдлүүдийг ашиглан бодлогуудыг бодож гүйцэтгэнэ үү.\\

// let a = 4
// let b = 6
// if (a > b){console.log(" ih too - ", a)} else {console.log ("ih too -", b)}
// 3 tonii ihiig ol \\
//let a = 1;
//let b = 2;
//let c = 3;
//if (a > b) {
//if (b > c) {
//onsole.log("ih too -", c);
//} else {
//console.log(" ih too -", b);
//}
//} else {
//if (a > c) {
//console.log("ih too -", a);
//} else {
//console.log("ih too -", c);
//}
//}

//Бодлого 1\\
//А болон В тоо өгөгдсөн бол ихийг нь ол. А болон В тоо өгөгдсөн бол жиших үйлдэл хийлгүйгээр ихийг нь ол.\\
//let a = 6;
//let b = 2;
//let max;
//max = ( ( a + b ) + Math.abs( a - b ) ) / 2;
//console.log(max);

//Бодлого 2\\
//А болон В тоо өгөгдсөн бол ихийг нь ол. А болон В тоо өгөгдсөн бол жиших үйлдэл хийж ихийг нь ол.\\
// let a = 4
// let b = 6
// if (a > b){console.log(" ih too - ", a)} else {console.log ("ih too -", b)}

//Бодлого 3\\
//4 тооны ихээсээ 2 дахь тоог ол.\\
// let a = 80;
// let b = 101;
// let c = 666;
// let d = 102;
// let max = 0
// let min = 0
// if (a > b) {
//   if (a > c) {
//     if (a > d) {
//       max = a
//     }
//   }
// }
// if (b > a){
//   if(b > c){
//     if(b > d){
//       max = b
//     }
//   }
// }
// if (c > a){
//   if(c > b){
//     if(c > d){
//       max = c
//     }
//   }
// }
// if (d > a){
//   if(d > b){
//     if(d > c){
//       max = d
//     }
//   }
// }
// if (max == a){
//   if(b > c){
//     if(b > d){
//       min = b
//     }
//   }
//   if(c > b){
//     if(c > d){
//       min = c
//     }
//   }
//   if(d > c){
//     if(d > b){
//       min = d
//     }
//   }
// }
// if (max == b){
//   if(a > c){
//     if(a > d){
//       min = a
//     }
//   }
//   if(c > a){
//     if(c > d){
//       min = c
//     }
//   }
//   if(d > a){
//     if(d > c){
//       min = d
//     }
//   }
// }
// if (max == c){
//   if(a > b){
//     if(a > d){
//       min = a
//     }
//   }
//   if(b > c){
//     if(b > d){
//       min = b
//     }
//   }
//   if(d > a){
//     if(d > b){
//       min = d
//     }
//   }
// }
// if (max == d){
//   if(a > b){
//     if(a > c){
//       min = a
//     }
//   }
//   if(b > a){
//     if(b > c){
//       min = b
//     }
//   }
//   if(c > a){
//     if(c > b){
//       min = c
//     }
//   }
// }
// console.log(min)

//Бодлого 4\\
//4 тооны 0-ээс их тоонуудын нийлбэр, 0-тэй тэнцүү тоонуудын тоолж, 0-ээс бага тоонуудыг үржвэрийг ол.\\
//let a = 2;
//let b = 1;
//let c = 0;
//let d = -1;
//let sum = 0;
//let con = 0;
//let max = 0;
//if (a > 0) {
//sum = sum + a;
//}
//if (b > 0) {
//sum = sum + b;
//}
//if (c > 0) {
//sum = sum + c;
//}
//if (d > 0) {
//sum = sum + d;
//}
//if (a == 0) {
//con = con + 1;
//}
//if (b == 0) {
//con = con + 1;
//}
//if (c == 0) {
//con = con + 1;
//}
//if (d == 0) {
//con = con + 1;
//}
//if (a > 0) {
//max = max * a;
//}
//if (b > 0) {
//max = max * b;
//}
//if (c > 0) {
//max = max * c;
//}
//if (d > 0) {
//max = max * d;
//}
//console.log(sum, con, max);

//Бодлого 5\\
//Тоог тэгш сондгой эсэхийг нь тодорхойлох.\\
//let a = 1;
//let b = 2;
//let c = 3;
//let d = 4;
//let sum = 0;
//let max = 0;
//if (a / 2) {
//sum = sum + 1;
//}
//if (b / 2) {
//sum = sum + 1;
//}
//if (c / 2) {
//sum = sum + 1;
//}
//if (d / 2) {
//sum = sum + 1;
//}
//if (0 == a % 2) {
//max = max + 1;
//}
//if (0 == b % 2) {
//max = max + 1;
//}
//if (0 == c % 2) {
//max = max + 1;
//}
//if (0 == d % 2) {
//max = max + 1;
//}
//console.log(sum, max);



//Home work\\

//Бодлого 1\\
//Өгөгдсөн А он нь өндөр жил мөн үү.  Өндөр жил гэдэг нь 4-т хуваагддаг, 100   хуваагддаггүй, 400 жилд хуваагддаг жилийг хэлдэг.\\

// let a = 1996
// let max = 0
// let min = 0
// if (a % 4 == 0){
//     max = max + a
// }
// if (a % 400 == 0){
//     max = max + a
// }
// if (a % 100 == 0){
//     min = min + a
// }
// if (max > min){
//     console.log(`undor jil mon`)
// }else{
//     console.log(`undor jil bish`)
// }



// let a = 1992
// if (a % 100 == 0) {
//     console.log(`undor jil bish`)
// } else {
//     if (a % 4 == 0) {
//         console.log(`undor jil mon`)
//     }else{
//         if ( a % 400 == 0 ){
//             console.log(`undor jil mon`)
//         }else{
//             console.log(`undor jil bish`)
//         }
//     }
// }


//Бодлого 2\\
//1-100 хүртэлх тоонуудын нийлбэрийг ол.\\

// let max = 0
// let i = 0
// for(i = 0; i <= 100; i++){
//  max = max + i
// }
// console.log(max)

//Бодлого 3\\
//Шатрын хөлгийн 2 буудал координатын цэгүүд өгөгдсөн бол ижил өнгөтэй эсэхийг нь ол. Хэрвээ тийм бол `Yes`, үгүй бол `No` гэж хэвлэнэ.\\



//Бодлого 4\\
//N нас өгөгдвөл тухайн хүнийг аль ангилалд хамрах гэдгийг олно уу.\\

// let a = 68
// let low = 18
// let mid = 30
// let high = 50
// if (a > low){
//     if(a > mid){
//         if(a > high){
//             console.log(`undor nastan`)
//         }else{
//             console.log(`undor nastan`)
//         }
//     }else{
//         console.log(`nasand hursen hun`)
//     }
// }else{
//     console.log(`huuhed`)
// }

//Бодлого 5\\
//ATM машины code ийг бичицгээе. Тоон дүн оруулахад “20000”, “10000”, “5000”, “1000”, “500” ийн дэвсгэртүүдийг ашиглан тоон дүнд харгалзах мөнгийг буцаа.\\
// Жишээ: \\
// 43500 -> 2 ш “20000”, 3 ш “1000”, 1 ш “500”\\
// 28000 ->1 ш “20000”, 1 ш “5000”, 3 ш “1000”\\
// let money = 122000
// let max = 0
// let mix = 0
// let min = 0
// let con = 0
// if (money % 500 == 0) {
//     max = money
//     for(let i = 500; i <= max; i += 500){
//         mix++ 
//         min = mix
//     }
//     for(let j = 40; j <= mix; j += 40 ){
//         console.log(`20000`)
//         min = min - 40
//         con = min
//     }
//     for(let s = 2; s <= min; s += 2){
//         console.log(`1000`)
//         con = con - 2 
//     }
//     for(let q = 1; q <= con; q++){
//         console.log(`500`)
//     }
// }else{
//     console.log(`Uuchlarai zadgui mongo hursengui`)
// }