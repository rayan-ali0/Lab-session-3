//Ex1 (Switch case)

// initialized keys variable to get number from a user and check if it matches a condition
var keys=Number(prompt("enter nb of keys"));
// switch case to check the key value and return based on the outcome
switch (true) {
    case keys<=0:
        console.log("we sank together");
        break;
    case keys>=30000:
         console.log("we made it");
          break;
    default:
        console.log("we need to swim a little bit more!");
        break;
}