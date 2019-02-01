const myPin = 1234;

const checkPin = (pin) => {
    if (pin == myPin) {
        return true
    } else {
        return false
    }
 };


 
const Balance = 1000

const checkBalance = (amountwithdrawal) => {

    if (amountwithdrawal <= Balance) {
        return true
    } else { 
        return false
    }

};



const cashWithdrawal = () => {
    if (checkPin(1234) == true && checkBalance(500) == true) {
        console.log('happy days')
    } else {
        console.log('unlucky')
    }
}

cashWithdrawal()

// const amountwithdrawal = 20

// const cashWithdrawal = (amountwithdrawal) => {
//     console.log(`withdraw ${amountwithdrawal}`)
// }

// (cashWithdrawal(20))

