// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// console.log(pizzaPalace.order('Smoked'));

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.5);
// console.log(customer.discount);
// customer.addOrder(2500, 'Beer');
// console.log(customer.balance);
// console.log(customer.orders);

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;
// child.herirage = 'Ukrainian';
// console.log(child);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  'Hicacus',
];

// const createListRef = document.querySelector('#ingredients');

// const ingridientListRef = ingredients.map(ingridient => {
//   const ingridientRef = document.createElement('li');
//   ingridientRef.textContent = `${ingridient}`;
//   ingridientRef.classList.add('item');
//   return ingridientRef;
// });
// createListRef.append(...ingridientListRef);

// const memories = ['Sega', 'Dendy', 'Sony', 'PS1'];

// const createMemoriesListRef = document.querySelector('#memories');
// const createMemorieListRef = memories.map(memorie => {
//   const memorieRef = document.createElement('li');
//   memorieRef.textContent = `${memorie}`;
//   memorieRef.classList.add('item');
//   return memorieRef;
// });
// createMemoriesListRef.append(...createMemorieListRef);
