import { Drinks } from "./Drink";
import { Food, Meal } from "./food";


 const food_items = [];
 const drink_items =[]
//const protein = ['Fish', 'Beef', 'Turkey', 'Chicken']
const swallow = ['Eba', 'Fufu', 'Semo', 'Poundo']

const beans = new Meal('Ewa Agoyin', ['Red Palm Oil', 'pepper', 'beans'], 10, ['Bread', 'Garri']);
const jollof = new Meal('Jollof Rice', ['rice', 'tomato', 'pepper'], 10, ['plantain', 'salad']);
const efo = new Meal('Efo Riro', ['stock fish', 'Ugu leaves', 'Red Palm Oil'], 10, swallow);
const egusi = new Meal('Egusi', ['Egusi', 'stock fish', 'pepper', 'Vegetable Leaves'], 10, swallow);

const coke = new Drinks('Cola', 2.50, ['Basic Cola', 'Cherry Cola', 'Grape Cola', 'Diet Cola'], ['Ice', 'Lime'])
const fanta = new Drinks('Fanta', 2.50, ['Basic Fanta', 'Cherry Fanta', 'Grape Fanta', 'Diet Fanta'], ['Ice', 'Lime']);
const beer = new Drinks('Beer', 3.50, ['Heinikein', 'Guiness ', ' Budweiser', 'Starling', 'Corona'], ['Canned', 'Bottle'])


food_items.push(beans);
food_items.push(jollof);
food_items.push(efo);
food_items.push(egusi);

drink_items.push(coke, fanta, beer);

export  {drink_items, food_items}
