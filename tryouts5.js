const person = {
    Age: 31,
    Name: 'Liban',
    favouriteMusic:'2 Pac',
    
    sayHi() {
        return `hello my name is ${person.Name}`
    } 

}
console.log(person.sayHi());

person.favouriteMusic = ['Michael J', 'Limp Bizkit'];

console.log(person.favouriteMusic [0])






