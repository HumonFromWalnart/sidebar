const ages = [22, 19, 19, 23, 20, 25, 26, 29, 25, 24];

//19 ,19, 20, 22, 24, 24, 24, 25, 25, 26
let temp; //22

// bubble sort

for (let j = 0; j < ages.length; j++) {
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > ages[i + 1]) {
      temp = ages[i];
      ages[i] = ages[i + 1];
      ages[i + 1] = temp;
    }
  }
}

console.log("array - ", ages);
console.log("max", ages[ages.length - 1]);
console.log("min", ages[0]);
// find median
if (ages.length % 2 === 0) {
  console.log(
    "median tegsh - ",
    (ages[parseInt(ages.length / 2) - 1] + ages[parseInt(ages.length / 2)]) / 2
  );
} else {
  console.log("median sondgoi -", ages[parseInt(ages.length / 2)]);
}

let avg;
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
}

console.log("niilber", sum);
avg= sum / ages.length
console.log("dundaj", avg);

function ReversedArray(Array){
    console.log(`Reversed Ages -`, Array.reverse())
}
ReversedArray(ages)