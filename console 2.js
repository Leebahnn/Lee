var myName = "Lee"

var myAge = "31"

var myFavouriteColor = "Yellow" 


 

console.log(`My name is ${myName}, my age is ${++myAge}, and my favourite color is ${myFavouriteColor}`)


const coffeeOrder = (size,price) =>{
    console.log(`I want to order a ${size} coffee for ${price} pound`)
} 
coffeeOrder("medium",4)

const heightWeight = (height,weight) =>{
    console.log(`I am ${height} and ${weight} kg`)
}
heightWeight("5ft10",74)

function factorial (n) {

    if ((n === 0) || (n === 1)) {
      return 1;
    } else {
      return (n * factorial(n-1));
    }
   
   }
   
   console.log(factorial(33));

   
  
//    const factorial = (n) =>{
//     if ((n === 0) || (n === 1)) {
//         return 1;
//       } else {
//         return (n * factorial(n-1));
//       }
     
//      }
     
     
   
//    console.log(factorial(33));



const myPin = 5000;

const checkPin = (pin) => {

    if (pin == myPin) {
        return true
    } else {
        return false
    }
} 

const Balance = 1000

const checkBalance = (amountwithdrawal) => {

    if (amountwithdrawal == Balance) {
        return true
    } else { 
        return false
    }

}

console.log(checkBalance(0))


// const cashWithdrawal = (amount,balance) => {
//     console.log(`Withdrawing ${amount} if equal or more than ${balance}`)
// }

// cashWithdrawal(20, 1000);





