//this is a big one that we can break up into smaller ones ie. ingredients, prepared items, seeds
//every ingredient
//every seedpack
//we need value, name, description, inventory image, cartimage, quantity
//certain items will need recipes that will rely on other items 
//each item will be an object
//for things like lettuce, tomato, stuff we wont grow, the name will be a uniqueID
//im working out how the quantity system should work
// for right now my thought process is that salt, yeast, flour, butter, sugar should be quantified in grams
//things like buns, eggs, should be quantified individually
//we could maybe have a property of these objects called quantityType 
//set it equal to g for items that need it 
//set it equal to x for individual items 
//then when quantity is displayed this will be used at the end 
//but idk 
class Items {
    constructor (itemName,price,quantity,buyQuantity, itemTo,inventoryImage,cartImage,description){
        this.itemName = itemName;
        //grocery store price, only for things we buy in grocery store
        this.price = price;
        //will be updated once in inventory
        this.quantity = quantity;
        this.buyQuantity = buyQuantity;
        //converts item we buy to what we will be using
        this.itemTo = itemTo;
        //for when we have images
        this.inventoryImage = inventoryImage;
        this.cartImage = cartImage; 

        this.description = description;
    }
    
    
}
//the store items are stored here, they will have an itemto and a buy quantity that converts them to individual items in our inventory
//the inventory quantity will be based on how many individual pickles or portions of coffee that we have 
//we will think about this as hp where each recipe will deduct hp from our inventory 
// a burger will "damage/deduct" 3 from pickles 1 from bun ect
export const storeItems = {
    headOfLettuce : new Items("Head of lettuce",1,0,10,lettuce, null, null, "a head of lettuce"),
    jarOfPickles : new Items("jar of pickles",3,0,20,pickles, null, null, "a jar of pickles"),
    ketchupBottle : new Items("bottle of ketchup",3,0,20,ketchup, null, null, "a bottle of ketchup"),
    tomato : new Items("tomato",1,0,8,tomatoSlices,null,null,"a tomato"),
    packOfBeef : new Items("pack of beef",1,0,4,burgerPatty,null,null,"a 1lb pack of beef"),
    packofBuns : new Items("6pack of buns", 3, 0, 6, "bun",null,null, "a pack of 6 buns"),
    greenTeaPack : new Items("pack of green tea", 2, 0, 5, "tea", null, null, "a pack of looseleaf grean tea"),
    bagofCoffee :new Items("Coffee",5,0,20,coffeePortion,null,null,"a bag of ground coffee"),
}
export const items = {
    //items to make a burger
bun : new Items("bun", 0, 0, 0, null,null,null, "a soft bun"),
tomatoSlices : new Items("tomato slices",0,0,0,null,null,null, "a tomato Slice"),
burgerPatty : new Items("burger patty",0,0,0,null, null, null, "a quarter lb patty"),
ketchup : new Items("ketchup",0,0,0,null, null, null, "ketchup"),
pickles : new Items("pickle",0,0,0,null, null, null, "a pickle"), 
lettuce : new Items("lettuce",0,0,0,null,null,null, "a piece of lettuce"),
greenTeaBag : new Items("green tea bag", 0, 0, 0, null, null, null, "a small sachet of looseleaf greenTea"),
coffeePortion: new Items("coffee portion",0,0,0,null,null,null, "a portioned out serving of coffee"), 
//other items inserted here 
//copy paste and edit
}
export const storeItemsList = [
    headOfLettuce,jarOfPickles,ketchupBottle,tomato,packofBuns,packofbeef,greenTeaPack,
    bagofCoffee
]

export default Items;


