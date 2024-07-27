const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
      return this._appetizers;
    },
    get desserts() {
      return this._desserts;
    },
    get mains() {
      return this._mains;
    },
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
    },

    set appetizers(appetizer) {
      this._appetizers = appetizer;
    },
    set desserts(dessert) {
      this._desserts = dessert;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    return dishes[Math.floor(Math.random() * dishes.length)];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Today's meal is ${appetizer.name}, ${main.name} and ${
      dessert.name
    }. Total cost is $${totalPrice.toFixed(2)}.`;
  },
};

menu.addDishToCourse("appetizers", "Wings", 5);
menu.addDishToCourse("appetizers", "Cheese Sticks", 4);
menu.addDishToCourse("appetizers", "Chips and Salsa", 3);

menu.addDishToCourse("mains", "Steak", 20);
menu.addDishToCourse("mains", "Chicken", 10);
menu.addDishToCourse("mains", "Salmon", 25);

menu.addDishToCourse("desserts", "Cake", 2);
menu.addDishToCourse("desserts", "Pie", 3);
menu.addDishToCourse("desserts", "Cookie", 1);

console.log(menu.generateRandomMeal());
