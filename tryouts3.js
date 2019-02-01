let myFilms = [`Matrix`,`Ghostbusters`,`Arrival`,`TheGame`];

for (i=0; i<myFilms.length; i++) {
    console.log(myFilms[i])
    // console.log(`The current value of i is ${i}`)

};

const filmCheck = (arrayChose) => {
    if (arrayChose[2] == `Ghostbusters`) {
        return 'prout'
    }else {
        return 'not pout'
    }
}
    console.log(filmCheck(myFilms))
        