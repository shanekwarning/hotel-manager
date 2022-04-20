// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import { allFetchData } from './apiCalls';
import Hotel from './classes/Hotel-class.js';

console.log( allFetchData )

let bookings;
let hotel;

window.addEventListener('load', () => {
  allFetchData.then(data => {
  hotel = new Hotel(data[0].customers, data[1].bookings, data[2].rooms)
  console.log(hotel)
}).catch(error => console.log(error))
});
setTimeout(console.log(hotel), 5000)
console.log(hotel)


console.log('This is the JavaScript entry file - your code begins here.');
