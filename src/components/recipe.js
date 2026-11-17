import {items} from './Items';
//work in progress
//this will store recipes unlocked and locked
//this will also handle things like checking to make sure we have the ingredients and subtracting those from inventory on a cook 
class recipe {
    constructor (productName, ingredients, isUnlocked){
        this.productName = productName;
        this.ingredients = ingredients;
        this.isUnlocked = isUnlocked;
    }
}
export const Recipes = {
    BurgerRecipe : new recipe("hamburger",)
}
const Ingredients = [
{itemName, quantity},
]


