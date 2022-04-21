class Customer {
  constructor(id, name) {
    this.id = id,
    this.name = name,
    this.bookings = [],
    this.totalCost = 0
  }
  populateCustomerBookings(hotel) {
    this.bookings = hotel.filter(booking => this.id === booking.userID)
  }
  calculateCost(hotel) {
    this.bookings.forEach(booking=> {
      hotel.forEach(room => {
        if(booking.roomNumber === room.number){
          this.totalCost += room.costPerNight
        }
      })
    })
  }
}

export default Customer;
