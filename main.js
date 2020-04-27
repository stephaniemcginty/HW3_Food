document.addEventListener("DOMContentLoaded", function (event) {

    let input = document.querySelector('#clear');
    let textarea = document.querySelector('#food_list');

    input.addEventListener('click', function () {
        textarea.value = '';
    }, false);

    document.getElementById("add_food").addEventListener("click", function () {
        let foodItem = new FoodItem(
            document.getElementById("name").value,
            document.getElementById("calories").value,
            document.getElementById("quantity").value
            );
        if (!foodItem.isValid()) {
            alert("Sorry, invalid input data");
        } else {
            foodItems.push(foodItem);  // storing each food object created in the array
            displayFoodItems();
        }
    });

    document.getElementById("name").focus();
});

// array of food items
let foodItems = [];

// function to update screen output
let displayFoodItems = function () {
    let displayString = "";

    for (let i in foodItems) {                            
        displayString += foodItems[i].toString() + "\n";  
        // cumulativeCalories += foodItems[i].calculateCalories(); 
    }
    let cumulativeCalories = foodItems.calories * foodItems.quantity;  
    displayString += "\n You have consumed " + cumulativeCalories + " calories";
    
  
    document.getElementById("food_list").value = displayString; // update data
};
