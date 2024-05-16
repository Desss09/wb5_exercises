"use strict"
let menu = [
    [
        { item: "Sausage and Egg Biscuit", price: 3.69 },
        { item: "Bacon and Egg Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
        [
            { item: "Pepperoni Pizza", price: 13.69 },
            { item: "Philly Cheesesteak", price: 14.49 },
            { item: "Cheeseburger", price: 12.29 }
        { item: "Koren Fried Chicken", price: 12.29 }

        ],
        [
        { item: "Surf and turf, price", price: 30.69 },
        { item: "Shrimp Alfredo", price: 16.49 },
        { item: "Hibachi", price: 20.29 }
        { item: "All you can eat Pasta", price: 22.29 }
    ],

]

let meal = 0;

if(meal===0){
console.log("Breakfast Menu")
console.log("--------")
}
if(meal===1){
    console.log("Lunch Menu")
    console.log("--------")
    }
    if(meal===2){
        console.log("Dinner Menu")
        console.log("--------")
        }
 
        menu[meal].forEach((menuItem) => {

            console.log(`${menuItem.item} :  ${menuItem.price}`)
        })
