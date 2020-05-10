const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(item) {
        this._courses.appetizers = item;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(item) {
        this._courses.mains = item;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(item) {
        this._courses.desserts = item;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            dishName,
            dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let randNum = Math.floor(Math.random() * dishes.length);
        return dishes[randNum];
    },
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse("appetizers");
        let main = this.getRandomDishFromCourse("mains");
        let dessert = this.getRandomDishFromCourse("desserts");
        let total = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
        return `Appetizer: ${appetizer.dishName}\nMain: ${main.dishName}\nDessert: ${dessert.dishName}\nTotal: ${total}$`;
    },
};

menu.addDishToCourse("appetizers", "Springrolls", 5);
menu.addDishToCourse("appetizers", "Salad", 3);
menu.addDishToCourse("appetizers", "Bread", 1);
menu.addDishToCourse("mains", "Dumplings", 5);
menu.addDishToCourse("mains", "Soup", 3);
menu.addDishToCourse("mains", "Steak", 10);
menu.addDishToCourse("desserts", "Cake", 5);
menu.addDishToCourse("desserts", "Ice cream", 3);
menu.addDishToCourse("desserts", "Cookies", 2);

let meal = console.log(menu.generateRandomMeal());
