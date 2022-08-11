// let array = Array(
//   ["1", "0", "0", "0"],
//   ["0", "0", "1", "0"],
//   ["0", "1", "0", "0"],
//   ["0", "0", "1", "0"],
//   ["1", "0", "0", "1"]
// );

// let text = "";
// for (let j = 0; j < array.length; j++) {
//   for (let i = 0; i < array[j].length; i++) {
//     if (array[j][i] == 1) {
//       text = text + "* ";
//     } else {
//       text = text + "  ";
//     }
//   }
//   text = text + "\n";
// }
// console.log(text);

// let array = Array("S", "u", "N", "n", "Y");
// let text = "";

// for (let i = 0; i < array.length; i++) {
//   if (array[i].charCodeAt() >= 97 && array[i].charCodeAt() <= 122) {
//     text += String.fromCharCode(array[i].charCodeAt() - 32);
//   } else {
//     text += array[i];
//   }
// }
// console.log(text);

// // 9 ,6 ,4 ,3 ,1
// let array = Array(1, 3, 6, 9);
// let temp;
// console.log("before - ", array);

// let n = array.length;
// for (let i = 0; i < n; i++) {
//   temp = array[i];
//   array[i] = array[n - 1];
//   array[n - 1] = temp;
//   n--;
// }
// console.log("after -  ", array);

// let numbers = Array(3, 1, 5, 6, 8, 2);
// //  3, 8, 5, 6, 1, 2
// let max = numbers[0];
// let maxIndex = 0;
// let min = numbers[0];
// let minIndex = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (max < numbers[i]) {
//     max = numbers[i];
//     maxIndex = i;
//   }
//   if (min > numbers[i]) {
//     min = numbers[i];
//     minIndex = i;
//   }
// }

// numbers[minIndex] = max;
// numbers[maxIndex] = min;

// console.log(numbers);

// let a = `bilegt`;
// b = a.charAt(0, 1).toUpperCase() + a.slice(1);
// b = a.replace("bilegt", "Bilegt")
// console.log(b);


// let a = `bilegt battsetsen tengis`
// b = a.replace(`bilegt`, `Bilegt`)
// b = b.replace(`battsetsen`, `Battsetsen`)
// b = b.replace(`tengis`, `Tengis`)
// console.log(b)


// let a =`BiLeGt`
// b = a.charAt(0, 1).toLowerCase() + a.slice(1) 
// b = a.charAt(1, 2).toUpperCase() + a.slice(2)
// console.log(b)

// function Name(Name1, Name2){
//    A = Name1.slice(0, 1) + `.` + Name2
//    console.log(A)
// }
//  Name(`Tuvshingargal`, `Bilegt`);

function Name(Name1, Name2){
    Name1[0] + `.` + Name2
}
Name(`Tuvshingargal`, `Bilegt`);