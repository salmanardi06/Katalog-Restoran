import 'regenerator-runtime';
import '../styles/main.css';
import data from '../public/data/DATA.json';

console.log('Hello Coders! :)');

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  });
});

const restaurantList = document.querySelector('.restaurant-list');

function createRestaurantCard(restaurant) {
  const card = document.createElement('div');
  card.classList.add('restaurant-card');
  card.setAttribute('tabindex', 0);

  const image = document.createElement('img');
  image.src = restaurant.pictureId;
  image.alt = restaurant.name;

  const name = document.createElement('h3');
  name.textContent = restaurant.name;

  const city = document.createElement('p');
  city.textContent = `City: ${restaurant.city}`;

  const rating = document.createElement('p');
  rating.textContent = `Rating: ${restaurant.rating}`;

  const description = document.createElement('p');
  description.textContent = restaurant.description;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(city);
  card.appendChild(rating);
  card.appendChild(description);

  return card;
}

function renderRestaurantList() {
  restaurantList.innerHTML = ''; 
  data.restaurants.forEach(restaurant => {
    const card = createRestaurantCard(restaurant);
    restaurantList.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderRestaurantList();
});
