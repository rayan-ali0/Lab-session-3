// //Ex1 (Switch case)

// // initialized keys variable to get number from a user and check if it matches a condition
// var keys=Number(prompt("enter nb of keys"));
// // switch case to check the key value and return based on the outcome
// switch (true) {
//     case keys<=0:
//         console.log("we sank together");
//         break;
//     case keys>=30000:
//          console.log("we made it");
//           break;
//     default:
//         console.log("we need to swim a little bit more!");
//         break;
// }

// //Ex2 
// var array=[20,6,5,200,45,11];
// // initialize a min variable to store the minimum number
// var min = array[0] 

// // initialize a max variable to store the max number
// var max = array[0]  

//     //for loop to check each item (number) of the array to check if its the smallest number or biggest number so far..
//     for(var i = 0; i < array.length +1; i++){
//         if(array[i] < min){
//             //check if number of the current index is smaller than the current minimum, if it matches the condition, the current index will be stored as the smallest number
//             min = array[i]
//         }
        
//         if(array[i] > max){
//             //check if number of the current index is greater than the current maxinmum, if it matches the condition, the current index will be stored as the biggest number
//             max = array[i]
//         }       
//     }

//  console.log("Min:"+min+"\nMax:"+max);

 //Ex3

for(let i=0;i<6;i++){ // first loop is for lines
    // we have to log * as many as the number of line , for ex in the second line we should have two * .
    for(let j=0;j<i+1;j++){// second loop is for columns 
        console.log("*");
    }
    console.log("\n");// after each column loop finish we have to jump into new line 
}