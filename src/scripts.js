
import './css/styles.css';
import './images/Hotel-room-img.jpg';
import './images/classic-hotel-room-14.jpg'
import { fetchUser, allFetchData, postBooking } from './apiCalls';
import Hotel from './classes/Hotel-class.js';
import Customer from './classes/Customer-class.js';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const bookedDatesDisplay = document.querySelector('.main__content-display')
const showAllBookingButton = document.querySelector('.all-bookings')
const headingBox = document.querySelector('.heading-box')
const totalCostDisplay = document.querySelector('.main__cost-display')
const submitDateButton = document.querySelector('.Submit-date')
const dateInput = document.querySelector('.date-input')
const roomDropDown = document.getElementById('rooms')
const searchForRoomDisplay = document.querySelector('.main__search-for-room-display')
const avalibleRoomsDisplay = document.querySelector('.main__avaliable-rooms-display')
const customerBookingsDisplay = document.querySelector('.main__customer-booking-display')
const viewBookingsButton = document.querySelector('.bookings-button')
const webSiteName = document.querySelector('h1')
const loginButton = document.getElementById('login')
const userNameInput = document.querySelector('.user-name')
const passwordInput = document.querySelector('.password')
const loginPageDescriptor = document.querySelector('.login-page-descriptor')
const loginBox = document.querySelector('.main__login-page-display')
const errorMessage = document.querySelector('.error-message')
const logoutButton = document.querySelector('.logout-button')
const customerNameDisplay = document.querySelector('.customer-name-display')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Global Variables ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let bookings;
let hotel;
let currentCustomer;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', () => {
  instantiateHotel()
  dateInput.min = setCurrentDate('-')

});

loginButton.addEventListener('click', function(){
  event.preventDefault()
  checkLoginInformation()

})

showAllBookingButton.addEventListener('click', function(){
  showCustomerBookings()
})

viewBookingsButton.addEventListener('click', function() {
  if(viewBookingsButton.innerText === 'View Your Bookings'){
  showYourBookingsView()
  totalCostDisplay.innerText = ''
  avalibleRoomsDisplay.innerHTML = ''
  viewBookingsButton.innerText = 'Look for Rooms'
} else if (viewBookingsButton.innerText === 'Look for Rooms'){
  viewBookingsButton.innerText = 'View Your Bookings';
  showAvalibleRoomsView()
  bookedDatesDisplay.innerHTML = ''
}
})

submitDateButton.addEventListener('click', function() {
  if(dateInput.value === ''){
    popUpMessage('Please select a date.')
    return
  }

  if(dateInput.value < setCurrentDate('-')){
    popUpMessage('Please select a current date.')
    return
  }
  hotel.filterAvalibleRooms(dateInput.value.split('-').join('/'))
  hotel.filterByRoomType(roomDropDown.value)
  createFilteredRoomsHTML()
  displayNoRoomsAvaliable()
})

avalibleRoomsDisplay.addEventListener('click', (e) => {
  if(e.target.dataset.button) {
    avalibleRoomsDisplay.innerHTML = ''
    createConfirmationHTML(e)
  }else if(e.target.dataset.confirm) {
    confirmBooking(e)
    displayRoomBookedConfirmationHTML()
  }

});
logoutButton.addEventListener('click', () => {
  logout()
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Dom Updates ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
    <div data-room='room-card' class='avalible-room-card'>
      <section class='room-information-box'>
        <p class='room-discriptors'>Room Number: ${avalibleRoom.number}</p>
        <p class='room-discriptors'>Room Type: ${avalibleRoom.roomType}</p>
        <p class='room-discriptors'>Number of Beds: ${avalibleRoom.numBeds}</p>
        <p class='room-discriptors'>Bed Size: ${avalibleRoom.bedSize}</p>
        <p class='room-discriptors'>This Room has a bidet: ${avalibleRoom.bidet}</p>
      </section>
      <section class='cost-per-night-box'>Cost Per Night: $${avalibleRoom.costPerNight}
      <button aria-label="${avalibleRoom.number}, Room Type: ${avalibleRoom.roomType}, Number of Beds: ${avalibleRoom.numBeds},
      Bed Size: ${avalibleRoom.bedSize}, This Room has a bidet: ${avalibleRoom.bidet}, Cost Per Night: $${avalibleRoom.costPerNight} "
       data-button='room' class="${avalibleRoom.number}">Book Now</button>
      </section>
    </div>`
  })
}

const createConfirmationHTML = (e) => {
  let confirmRoomNumber = e.target.classList[0]
  avalibleRoomsDisplay.innerHTML =`
<div class='confirm-booking-box'>
    <class='room-information-box'>
      <p class='confirmation-header'> Are you sure you want to book room ${confirmRoomNumber}?</p>
      <div class='room-confirmation-styling-box'>
      <p  class='room-discriptors'>Room Number: ${hotel.rooms[confirmRoomNumber - 1].number}</p>
      <p class='room-discriptors'>Room Type:${hotel.rooms[confirmRoomNumber - 1].roomType}</p>
      <p class='room-discriptors'>Number of Beds: ${hotel.rooms[confirmRoomNumber - 1].numBeds}</p>
      <p class='room-discriptors'>Bed Size: ${hotel.rooms[confirmRoomNumber - 1].bedSize}</p>
      <p class='room-discriptors'>This Room has a bidet:  ${hotel.rooms[confirmRoomNumber - 1].bidet}</p>
    </section>
    <section class='cost-per-night-box'>Cost Per Night: ${hotel.rooms[confirmRoomNumber - 1].costPerNight}
    <button data-confirm='room' class="${confirmRoomNumber}">Confirm Reservation</button>
  </section>
</div>
  </div>`
}

const displayNoRoomsAvaliable = () => {
  if(hotel.avalibleRooms.length === 0){
    avalibleRoomsDisplay.innerHTML = `
    <div class='confirm-booking-box'>
        <section class='room-information-box'>
          <p class='no-rooms-avalible'>We are very sorry. There are no rooms avalible that meet your specifications. We are sorrry for any inconvience. Please try a different selection.</p>
        </section>
    </div>`
  }
}

const displayRoomBookedConfirmationHTML = () => {
  avalibleRoomsDisplay.innerHTML = `
  <div class='confirm-booking-box'>
      <section class='room-information-box'>
        <p class='no-rooms-avalible'>Your booking is confirmed. We hope you have a nice stay.</p>
      </section>
  </div>`
}

const popUpMessage = (message) => {
  avalibleRoomsDisplay.innerHTML = `
  <div class='confirm-booking-box'>
      <section class='room-information-box'>
        <p class='no-rooms-avalible'>${message}</p>
      </section>
  </div>`
}

let totalCost = () => {
  totalCostDisplay.innerText = `Total Spent on Rooms: $${currentCustomer.totalCost.toFixed(2)}`
}

const displayCustomerName = () => {
  customerNameDisplay.innerText = `Welcome ${currentCustomer.name}`
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ scripts ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const instantiateHotel = () => {
  allFetchData.then(data => {
  hotel = new Hotel(data[0].customers, data[1].bookings, data[2].rooms)
  }).catch(error => {
  webSiteName.innerText = "Something went wrong please try again."
  console.log(error)
  })
}
const checkLoginInformation = () => {
  let userNumber = userNameInput.value.split('').splice(8, 2)

  hotel.customers.forEach(customer => {
    if(userNameInput.value.trim() === `customer${customer.id}` && passwordInput.value === 'overlook2021'){
      instantiateCustomer(userNumber.join(''))
      hide(loginPageDescriptor)
      hide(loginBox)
      show(searchForRoomDisplay)
      show(headingBox)
    } else if(userNameInput.value.trim() !== `customer${customer.id}` || passwordInput.value !== 'overlook2021') {
      errorMessage.innerHTML = '<section>Username/Password is not a match</section>'
    }
  })
}

const instantiateCustomer = (id) => {
  fetchUser(id).then(data => {
    currentCustomer = new Customer(data.id, data.name)
  }).then(info => displayCustomerName()).catch(error => console.log(error))
}

const logout = () => {
  userNameInput.value = ''
  passwordInput.value = ''
  errorMessage.innerHTML = ''
  show(loginPageDescriptor)
  show(loginBox)
  hide(searchForRoomDisplay)
  hide(headingBox)
  currentCustomer = undefined
}

const confirmBooking = (e) => {
  let confirmRoomNumber = e.target.classList[0]
  postBooking(currentCustomer.id, dateInput.value.split('-').join('/'), hotel.rooms[confirmRoomNumber - 1].number)
  .then(data => hotel.bookings.push(data.newBooking))
}

const setCurrentDate = (sp) => {
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (yyyy+sp+mm+sp+dd);
};


const showCustomerBookings = () => {
  currentCustomer.populateCustomerBookings(hotel.bookings)
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
