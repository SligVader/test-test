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

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
//   'Hicacus',
// ];

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

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const createImgGaleryRef = document.querySelector('.gallery');

// const imageGaleryRef = images
//   .map(
//     image =>
//       `<li class="gallery__list"><img class="gallery__image" src="${image.url}" alt = "${image.alt}"></li>`
//   )
//   .join('');
// createImgGaleryRef.insertAdjacentHTML('afterbegin', imageGaleryRef);
// // const li = document.querySelector("li");

// const clickValue = document.querySelector('#value');
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// let counterValue = 0;

// const decreseValue = () => {
//   counterValue -= 1;
//   return (clickValue.textContent = counterValue);
// };

// const increseValue = () => {
//   counterValue += 1;
//   return (clickValue.textContent = counterValue);
// };

// decrementBtn.addEventListener('click', decreseValue);
// incrementBtn.addEventListener('click', increseValue);

// const textInput = document.querySelector('#name-input');
// const textOutput = document.querySelector('#name-output');

// const typeInName = event => {
//   if (event.currentTarget.value !== '') {
//     textOutput.textContent = event.currentTarget.value;
//   } else {
//     textOutput.textContent = 'Anonymous';
//   }
// };
// textInput.addEventListener('input', typeInName);

// const textInput = document.querySelector('.text-input');
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener('click', () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener('click', () => {
//   textInput.blur();
// });

// textInput.addEventListener('focus', () => {
//   textInput.value = 'This input has focus';
// });

// textInput.addEventListener('blur', () => {
//   textInput.value = '';
// });

// const inputRef = document.querySelector('#validation-input');
// const inputLength = Number(inputRef.getAttribute('data-length'));

// const onInputFocus = event => {
//   if (event.currentTarget.value.length === inputLength) {
//     inputRef.classList.add('valid');
//     inputRef.classList.remove('invalid');
//   } else {
//     inputRef.classList.remove('valid');
//     inputRef.classList.add('invalid');
//   }
// };

// inputRef.addEventListener('blur', onInputFocus);

// const inputOn = document.querySelector('#validation-input');
// inputOn.addEventListener('focus', onFocus);
// function onFocus(event) {
//   console.log('type in!');
// }

// inputOn.addEventListener('blur', onBlur);
// function onBlur(event) {
//   console.dir(event);
// }
// document.addEventListener('keyup', onPress);
// function onPress(evt) {
//   evt.preventDefault();
//   if (evt.ctrlKey && evt.code === 'KeyS') {
//     alert('Your GrandMa saves less than you!');
//   }

//   console.dir(evt);
// }

// const items = [
//   {
//     name: 'Kitana',
//     prod: 'Mcfarlane',
//     line: 'Mortal Kombat',
//     img: 'https://mcfarlane.com/wp-content/uploads/2020/09/Kitanna_05.jpg',
//   },
//   {
//     name: 'Baraka',
//     prod: 'Mcfarlane',
//     line: 'Mortal Kombat',
//     img: 'https://mcfarlane.com/wp-content/uploads/2022/04/11072-MORTAL-KOMBAT-7IN-FIGURES-WV9-BARAKA-VARIANT-03_Logos.jpg',
//   },
//   {
//     name: 'Scorpion',
//     prod: 'Mcfarlane',
//     line: 'Mortal Kombat',
//     img: 'https://mcfarlane.com/wp-content/uploads/2020/12/11038_01.jpg',
//   },
//   {
//     name: 'Sub-Zero',
//     prod: 'Mcfarlane',
//     line: 'Mortal Kombat',
//     img: 'https://mcfarlane.com/wp-content/uploads/2019/09/Subzero_Front_CC.jpg',
//   },
//   {
//     name: 'Doom Slayer',
//     prod: 'Mcfarlane',
//     line: 'DOOM',
//     img: 'https://mcfarlane.com/wp-content/uploads/2019/07/DoomSlayer_Posed_CC.jpg',
//   },
//   {
//     name: 'Batman Hush',
//     prod: 'Mcfarlane',
//     line: 'DC Multiverse',
//     img: 'https://mcfarlane.com/wp-content/uploads/2022/12/15266_03_Logos.jpg',
//   },
//   {
//     name: 'Spawn',
//     prod: 'Mcfarlane',
//     line: 'Year of Spawn',
//     img: 'https://mcfarlane.com/wp-content/uploads/2020/05/SpawnMace_01.jpg',
//   },
//   {
//     name: 'Tyranid',
//     prod: 'Mcfarlane',
//     line: 'Warhammer',
//     img: 'https://mcfarlane.com/wp-content/uploads/2021/09/10927_06.jpg',
//   },
//   {
//     name: 'Snake Predator',
//     prod: 'Neca',
//     line: 'Predator 2',
//     img: 'https://necaonline.com/wp-content/uploads/2022/07/51426_UNP_1-scaled.jpg',
//   },
// ];

// const form = document.querySelector('.js-search');
// const list = document.querySelector('.js-list');
// form.addEventListener('submit', onSearch);
// console.log(form);
// function onSearch(evt) {
//   evt.preventDefault();
//   const { queryValue, selectValue } = evt.currentTarget.elements;
//   console.log(queryValue.value);
//   console.log(selectValue.value);

//   const searchResult = items.filter(item =>
//     item[selectValue.value].includes(queryValue.value)
//   );
//   const markup = searchResult
//     .map(
//       ({ name, prod, line, img }) => `<li>
//     <img src="${img}" alt="${name}" width = "300">
//     <h2>${name}</h2>
//     <h3>${line}</h3>
//     <h4>${prod}</h4>
//     </li>
//   `
//     )
//     .join('');
//   list.innerHTML = markup;
// }
// console.log('form');
// console.log('why???');

const list = document.querySelector('.js-list');
const load = document.querySelector('.js-load');

let page = 1;
load.addEventListener('click', onLoad);

function rickAndMortyAPI(page = 1) {
  const BASE_URL = 'https://rickandmortyapi.com/api/character';
  const options = {
    method: 'GET',
  };

  return fetch(`${BASE_URL}?page=${page}`, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

rickAndMortyAPI()
  .then(data => {
    createMarkup(data.results);
    load.hidden = false;
  })
  .catch(err => console.log(err));

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ image, name, status, species, type }) => `<li>
<image src ="${image}"></>
<h2>${name}</h2>
<h3>${status}</h3>
<h4>${species}</h4>
<h5>${type}</h5>
</li>`
    )
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

function onLoad() {
  page += 1;
  rickAndMortyAPI(page)
    .then(data => {
      createMarkup(data.results);
      console.log(data);
      console.log(page);
      if (page === data.info.pages) {
        load.hidden = true;
      }
    })
    .catch(err => console.log(err));
}
