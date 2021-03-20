class Nephew {
    constructor(
        name,
        age,
        hairColor
    ) { //define properties
        this.name = name,
        this.age = age,
        this.hairColor = hairColor
    }
    sayName(){
        console.log(`My name is ${this.name}!`);
    }
};

export default Nephew;