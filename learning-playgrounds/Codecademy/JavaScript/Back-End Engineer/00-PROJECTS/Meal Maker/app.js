const menu = {
	_courses: {
		appetizers: [],
		mains: [],
		desserts: [],
	},
	get appetizers() {
		return this._courses.appetizers;
	},
	set appetizers(appetizers) {
		this._courses.appetizers = appetizers;
	},
	get mains() {
		return this._courses.mains;
	},
	set mains(mains) {
		this._courses.mains = mains;
	},
	get desserts() {
		return this._courses.desserts;
	},
	set desserts(desserts) {
		this._courses.desserts = desserts;
	},
	get courses() {
		return {
			appetizers: this.appetizers,
			mains: this.mains,
			desserts: this.desserts,
		};
	},
	addDishToCourse(courseName, dishName, dishPrice) {
		const dish = {
			name: dishName,
			price: dishPrice,
		};
		return this._courses[courseName].push(dish);
	},
	getRandomDishFromCourse(courseName) {
		const dishes = this._courses[courseName];
		const randomIndex = Math.floor(Math.random() * dishes.length);
		return dishes[randomIndex];
	},
	generateRandomMeal() {
		const appetizer = this.getRandomDishFromCourse("appetizers");
		const main = this.getRandomDishFromCourse("mains");
		const dessert = this.getRandomDishFromCourse("desserts");
		const totalPrice = appetizer.price + main.price + dessert.price;
		return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. Total price of the meal is ${totalPrice}.`;
	},
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 5.00);
menu.addDishToCourse('appetizers', 'Wings', 7.00);
menu.addDishToCourse('appetizers', 'Fries', 4.00);

menu.addDishToCourse('mains', 'Cobb Salad', 8.00);
menu.addDishToCourse('mains', 'Burger', 10.00);
menu.addDishToCourse('mains', 'Steak', 15.00);

menu.addDishToCourse('desserts', 'Pie', 4.00);
menu.addDishToCourse('desserts', 'Cake', 5.00);
menu.addDishToCourse('desserts', 'Pudding', 3.00);

const meal = menu.generateRandomMeal();
console.log(meal);



