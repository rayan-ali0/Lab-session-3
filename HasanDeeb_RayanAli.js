//Ex1 (Switch case)

// initialized keys variable to get number from a user and check if it matches a condition
var keys = Number(prompt("enter nb of keys"));
// switch case to check the key value and return based on the outcome
switch (true) {
    case keys <= 0:
        console.log("we sank together");
        break;
    case keys >= 30000:
        console.log("we made it");
        break;
    // default:
    //     console.log("we need to swim a little bit more!");
    //     break;
    case keys < 30000:
        console.log("we need to swim a little bit more!");
        break;
    default: // the default value get back to the switch
        false;
}

//Ex2 
var array = [20, 6, 5, 200, 45, 11];
// initialize a min variable to store the minimum number
var min = array[0]

// initialize a max variable to store the max number
var max = array[0]

//for loop to check each item (number) of the array to check if its the smallest number or biggest number so far..
for (var i = 0; i < array.length + 1; i++) {
    if (array[i] < min) {
        //check if number of the current index is smaller than the current minimum, if it matches the condition, the current index will be stored as the smallest number
        min = array[i]
    }

    if (array[i] > max) {/* we can use here else if instead of just if*/
        //check if number of the current index is greater than the current maxinmum, if it matches the condition, the current index will be stored as the biggest number
        max = array[i]
    }
}

console.log("Min:" + min + "\nMax:" + max);

//Ex3

// for (let i = 0; i < 6; i++) { // first loop is for lines
//     // we have to log * as many as the number of line , for ex in the second line we should have two * .
//     var row = " ";
//     for (let j = 0; j < i + 1; j++) {// second loop is for columns 
//         row += "* "
//     }
//     console.log(row);
//     console.log("\n");// after each column loop finish we have to jump into new line 
// }

var row="";
for (let i = 0; i < 6; i++) { // first loop is for lines
    // we have to log * as many as the number of line , for ex in the second line we should have two * .
    for (let j = 0; j < i + 1; j++) {// second loop is for columns 
        row += "* "
    }
 row+="\n";// after each column loop finish we have to jump into new line 
}
console.log(row); // all the stars will be logged once in one message instead of log each line separatly

//Ex4
var array = [1, 301, 9, 100, 2, 200, 4] // list for testing
var max = array[0] // initialized a max var to store the biggest number
// nested loops, first one to iterate from the start till the middle, and the loop inside of it will check rom the last to the middle
for (var i = 1; i < array.length / 2; i++) {
    if (array[i] > max) {
        max = array[i] //store the current index item if its bigger than the current biggest number
    }
    for (var j = array.length - 1; j >= array.length / 2; j--) {
        if (array[j] > max) {
            max = array[j] //store the current index item if its bigger than the current biggest number
        }
    }

}
console.log("The largest number is " + max);

// EX4 - 2sd solution

const arr = [34, 7, 23, 32, 5, 62, 61, 51];
let largestNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(`loggin i ${i} ${arr[i]} \nloggin j ${j} ${arr[j]}`);
    console.log(`current largest Number ${largestNumber}`);
    if (arr[i] > arr[j]) {
      largestNumber = arr[i];
    } else {
      largestNumber = arr[j];
      break;
    }
  }
}
console.log("max: " + largestNumber);

//Ex5
// reusable function to get the square of a number
function square(number) {
    return number * number;
}

//EX 6

//Ex1 using function

// reusable function that checks the value of a given parameter 
function keysCheck(keys) {
    // switch case to check different conditions of the parameter
    switch (true) {
        // if the parameter value is equal to 0 or negative number return a string 'we sank together'
        case keys <= 0:
            return "we sank together";
        // if the parameter value is equal to 30000 or above return a string 'we made it'
        case keys >= 30000:
            return "we made it";
        // default case return a string 'we need to swim a little bit more' if it's between 0 and 30000
        default:
            return "we need to swim a little bit more!";
    }
}

//Ex2 using function
// same procedure but inside a function, the difference is that it could work based on the parameter 
function checkMinMax(array) {
    // for loop to iterate as the length of the array
    for (var i = 0; i < array.length + 1; i++) {
        if (array[i] < min) { //check if the current value is smaller than the current min value
            min = array[i] //if yes, the current value will be the new min
        }
        if (array[i] > max) { // check if the current value is greater than the current max value
            max = array[i]  // if yes, the current value will be the new max
        }
    }
    console.log("Min:" + min + "\nMax:" + max);
}
//Ex3 using function
// function that prints half a pyramid, with a lenght based on the parameter
function pyramid(line) {
    for (let i = 0; i < line; i++) { // loop for the rows
        var row = " ";
        for (let j = 0; j < i + 1; j++) { // loop for the column
            row += "* "; // print * to shape a half pyramid
        }
        console.log(row);
        console.log("\n");
    }
}

//Ex4 using function
function max(array) {
    var max = array[0]
    for (var i = 1; i < array.length / 2; i++) {
        if (array[i] > max) { // iterate from the start of the array till the mid
            max = array[i] //store the current index item if its bigger than the current biggest number
        }
        for (var j = array.length - 1; j >= array.length / 2; j--) {
            if (array[j] > max) { // iterate from the end till the mid (inclusive)
                max = array[j] //store the current index item if its bigger than the current biggest number
            }
        }

    }
    return max; // get the output
}