//Rest parameters = (...rest) allow a function work with a variable
//                  number of arguments by bundling them into an array

//                  spread = espands an array into seprate elements
//                  rest = bundles seperate elements into an array


function openFridge(...foods) {
    console.log(...foods);
}
function toGetFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = toGetFood(food1, food2, food3, food4, food5);
console.log(foods);

