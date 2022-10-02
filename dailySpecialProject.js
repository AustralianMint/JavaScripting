//This project allows restaurant managers to safely add, and display daily specials.
//Use of Objects, Getters, Setters, control flow

const menu = {
  _meal: '',
  _price: 0,
  //saving & confirming if entered meal is correct type.
  set meal(mealToCheck){
    if(typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    } else {
      console.log('Invalid. Not a string');
    }
  },
  //confirming if entry is correct type
  set price(priceToCheck){
    if(typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    } else {
      console.log('Invalid. not a number');
    }
  },
  //reads the daily menu entry and displays nicely
  get todaysSpecial(){
    if(this._meal && this._price){
      return `Today's Special is ${this._meal} for ${this._price}`
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
};

//using my created object method as check before user enters info.
menu.meal = 'yummy burgir';
menu.price = 5.60;

console.log(menu.todaysSpecial);
