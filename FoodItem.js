// constructor for food items
var FoodItem = function (name, calories, quantity) {
    this.name = name;
    this.calories = calories;
    this.quantity = quantity;
};

// validate method for food item entries
FoodItem.prototype.isValid = function () {
    // check to see if any fields are blank
    if (this.name == "" || this.calories == "" || this.quantity == "") {
        return false; 
    // check if calories and quantity are numbers
    } else if (isNaN(this.calories) || (isNaN(this.quantity))) {
        return false;
    } else {
        return true;
    }
};

FoodItem.prototype.toString = function () {
   return this.name + ", " + this.calories + ", " + this.quantity;
};