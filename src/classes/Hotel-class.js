class Hotel {
  constructor(customers, bookings, rooms) {
    this.customers = customers,
    this.bookings = bookings,
    this.rooms = rooms,
    this.avalibleRooms = []
  }

  filterAvalibleRooms(userDate) {
    this.avalibleRooms = []
    let takenRoomNumbers = this.bookings.filter(date => date.date === userDate).map(date => date.roomNumber)
    this.rooms.forEach(room => {
      takenRoomNumbers.forEach(num => {
        if(num === room.number){
          this.avalibleRooms.push(room)
          console.log('open rooms', this.avalibleRooms)
        }
      })
    })
  }

}

export default Hotel;
