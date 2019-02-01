let fibSequence = [0,1];
for (let i = 0; i <= 10; i++) {
    fibSequence.push(fibSequence[i]+fibSequence[i+1]);
};
console.log(fibSequence)
