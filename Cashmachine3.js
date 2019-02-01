const myPin = 5000;

const checkPin = (pin) => {
    if (pin == myPin) {
        return true 
    } else {
        return false
    }
};



const Balance = 1500

const checkBalance = (amount) => {
    if (amount <= Balance) {
        return true
    } else {
        return false
    }
};



const cashWithdrawal = () => {
    if (checkPin(5000) == true && checkBalance(1500) ){
    console.log(`Nice`)
}   else {
    console.log(`Broke lad`)
}

}


cashWithdrawal()