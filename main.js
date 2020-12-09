// here created an array with length 10
let numbers = new Array(10);
let numbersSqrt = new Array();
let numbersPwr2 = new Array();
let sum= 0;//assing initial value 0
let averageNums;
let min = Number.POSITIVE_INFINITY;//assigning a maximum value 
let max= Number.NEGATIVE_INFINITY; // assigning a minimum value
//assing all members of arrays with random numbers between 0-100
for (let indexHO = 0; indexHO < numbers.length; indexHO++) {
    numbers[indexHO] = Math.ceil(Math.random() * 10000);
    numbersSqrt[indexHO] = Math.sqrt(numbers[indexHO]);
    numbersPwr2[indexHO] = Math.pow(numbers[indexHO],2);
    sum += numbers[indexHO];
    if (min>numbers[indexHO]){ min = numbers[indexHO];} 
    if (max<numbers[indexHO]){ max = numbers[indexHO];} 
}
averageNums = sum/numbers.length;
//checking if all the members have a value between 0-100
for (let indexHO = 0; indexHO < numbers.length; indexHO++) {
    console.log("The " + (indexHO+1)  + "th number is:   " + numbers[indexHO]+"\n"+
                 "The " + (indexHO+1)  + "th number's square root is:   " + numbersSqrt[indexHO]+"\n"+
                 "The " + (indexHO+1)  + "th number's square  is:   " + numbersPwr2[indexHO]+"\n");
}

console.log(`The sum of the numbers   :${sum}
The average of the numbers   :${averageNums}
The minimum number of the serie is  :${min}
The maximum number of the serie is  :${max}`);
