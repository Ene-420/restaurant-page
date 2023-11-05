export class Food{
    constructor(name, ingredients, price){
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.additionalServings = ['Fish', 'Beef', 'Turkey', 'Chicken']
    }

    getClassName(){
        return this.constructor.name;
    }
    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getIngredients(){
        return this.ingredients.toString().replace(/,/g, ", ") ;
    }

    getAdditionalServings(){
        return this.additionalServings;
    }
}

export class Meal extends Food{
    constructor(name, ingredients, price, optionalServings){
        super(name, ingredients, price);
        this.optionalServings = optionalServings;
    }

    getOptionalServings(){
        return this.optionalServings;
    }
}