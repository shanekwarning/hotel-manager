// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/Hotel-room-img.jpg';
import './images/classic-hotel-room-14.jpg'
import { allFetchData } from './apiCalls';
import Hotel from './classes/Hotel-class.js';
import Customer from './classes/Customer-class.js';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Quert Selectors ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const bookedDatesDisplay = document.querySelector('.main__content-display')
const showAllBookingButton = document.querySelector('.all-bookings')
const totalCostDisplay = document.querySelector('.main__cost-display')
const submitDateButton = document.querySelector('.Submit-date')
const dateInput = document.querySelector('.date-input')
const roomDropDown = document.getElementById('rooms')
const searchForRoomDisplay = document.querySelector('.main__search-for-room-display')
const avalibleRoomsDisplay = document.querySelector('.main__avaliable-rooms-display')
const customerBookingsDisplay = document.querySelector('.main__customer-booking-display')
const viewBookingsButton = document.querySelector('.bookings-button')
const webSiteName = document.querySelector('h1')
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Global Variables ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let bookings;
let hotel;
let currentCustomer;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', () => {
  allFetchData.then(data => {
  hotel = new Hotel(data[0].customers, data[1].bookings, data[2].rooms)
  currentCustomer = new Customer(data[0].customers[0].id, data[0].customers[0].name)
}).catch(error => {
  webSiteName.innerText = "Something went wrong please try again."
  console.log(error)
})
});

showAllBookingButton.addEventListener('click', function(){
  showCustomerBookings()
})
viewBookingsButton.addEventListener('click', function() {
  if(viewBookingsButton.innerText === 'View Your Bookings'){
  showYourBookingsView()
  avalibleRoomsDisplay.innerHTML = ''
  viewBookingsButton.innerText = 'Look for Rooms'
} else if (viewBookingsButton.innerText === 'Look for Rooms'){
  viewBookingsButton.innerText = 'View Your Bookings';
  showAvalibleRoomsView()
  bookedDatesDisplay.innerHTML = ''
}
})

submitDateButton.addEventListener('click', function() {
  hotel.filterAvalibleRooms(dateInput.value.split('-').join('/'))
  hotel.filterByRoomType(roomDropDown.value)
  createFilteredRoomsHTML()
})


let createShowBookingsHTML = () => {
  currentCustomer.bookings.forEach(booking => {
    bookedDatesDisplay.innerHTML +=
    `<div class='main__content-display-booked-dates'>
    <section class='booked-date-card-info-box'>
    <p class='reservation-date'>Date Booked:${booking.date}</p>
    <p class='room-number'>Room Number:${booking.roomNumber}</p>
    </section>
    </div>`
  })
}

const createFilteredRoomsHTML = () => {
  avalibleRoomsDisplay.innerHTML = ''
  hotel.avalibleRooms.forEach(avalibleRoom => {
    avalibleRoomsDisplay.innerHTML += `
    <div class='avalible-room-card'>
      <section class='room-information-box'>
        <p class='room-discriptors'>Room Number: ${avalibleRoom.number}</p>
        <p class='room-discriptors'>Room Type: ${avalibleRoom.roomType}</p>
        <p class='room-discriptors'>Number of Beds: ${avalibleRoom.numBeds}</p>
        <p class='room-discriptors'>Bed Size: ${avalibleRoom.bedSize}</p>
        <p class='room-discriptors'>This Room has a bidet: ${avalibleRoom.bidet}</p>
      </section>
      <section class='cost-per-night-box'>Cost Per Night: $${avalibleRoom.costPerNight}
      <button class='booking-button'>Book Now</button>
      </section>
    </div>`
  })
}

let totalCost = () => {
  totalCostDisplay.innerText = ''
  totalCostDisplay.innerText = `Total Spent on Rooms: $${currentCustomer.totalCost.toFixed(2)}`
}

const showCustomerBookings = () => {
  currentCustomer.populateCustomerBookings(hotel.bookings);
  currentCustomer.calculateCost(hotel.rooms)
  createShowBookingsHTML()
  totalCost()
}

const showYourBookingsView = () => {
  hide(searchForRoomDisplay)
  show(customerBookingsDisplay)
}

const showAvalibleRoomsView = () => {
  hide(customerBookingsDisplay);
  show(searchForRoomDisplay)
}

const hide = (element) => {
  element.classList.add('hidden')
}

const show = (element) => {
  element.classList.remove('hidden')
}
