// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import { allFetchData } from './apiCalls';
import Hotel from './classes/Hotel-class.js';
import Customer from './classes/Customer-class.js';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Quert Selectors ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const bookedDatesDisplay = document.querySelector('.main__content-display')
const showAllBookingButton = document.querySelector('.all-bookings')
const totalCostDisplay = document.querySelector('.main__cost-display')
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Global Variables ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let bookings;
let hotel;
let currentCustomer;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', () => {
  allFetchData.then(data => {
  hotel = new Hotel(data[0].customers, data[1].bookings, data[2].rooms)
  currentCustomer = new Customer(data[0].customers[0].id, data[0].customers[0].name)
  console.log(hotel)
  console.log(currentCustomer)
}).catch(error => console.log(error))
});

showAllBookingButton.addEventListener('click', function(){
  showCustomerBookings()
})


let createShowBookingsHTML = () => {
  console.log(currentCustomer.totalCost)
  currentCustomer.bookings.forEach(booking => {
    bookedDatesDisplay.innerHTML +=
    `<section class='main__content-display-booked-dates'>Date Booked:${booking.date} Room Number:${booking.roomNumber}</section>
  </section>`
  })
}

let totalCost = () => {
  totalCostDisplay.innerText = `${currentCustomer.totalCost.toFixed(2)}`
}

const showCustomerBookings = () => {
  currentCustomer.populateCustomerBookings(hotel.bookings);
  currentCustomer.calculateCost(hotel.rooms)
  createShowBookingsHTML()
  totalCost()
}
