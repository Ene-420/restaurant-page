export class Drinks{
    constructor(name, price, additionalServings, optionalServings){
        this.name = name;
        this.additionalServings = additionalServings;
        this.optionalServings = optionalServings;
        this.price = price;
    }


    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getAdditionalServings(){
        return this.additionalServings;
    }

    getOptionalServings(){
        return this.optionalServings;
    }
}