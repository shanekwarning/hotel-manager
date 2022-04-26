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
    this.rooms.forEach(room => this.avalibleRooms.push(room))

    takenRoomNumbers.forEach(number => {
    this.avalibleRooms.forEach((room, index) => {
        if(room.number === number)
        this.avalibleRooms.splice(index, 1)
      })
    })
  }

  filterByRoomType(room) {
    if(room === 'all'){
      return this.avalibleRooms
    } else if(room !== 'all'){
      this.avalibleRooms = this.avalibleRooms.filter(type => type.roomType === room)
    }
  }
}

export default Hotel;
