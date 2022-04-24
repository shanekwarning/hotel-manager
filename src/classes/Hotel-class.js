class Hotel {
  constructor(customers, bookings, rooms) {
    this.customers = customers,
    this.bookings = bookings,
    this.rooms = rooms,
    this.avalibleRooms = []
  }

  filterAvalibleRooms(userDate) {
    this.avalibleRooms = []
    console.log('rooms', this.rooms)
    let takenRoomNumbers = this.bookings.filter(date => date.date === userDate).map(date => date.roomNumber)
    console.log(takenRoomNumbers)
    this.rooms.forEach(room => this.avalibleRooms.push(room))

    takenRoomNumbers.forEach(number => {
    this.avalibleRooms.forEach((room, index) => {
        if(room.number === number)
        this.avalibleRooms.splice(index, 1)
      })
    })
    console.log(takenRoomNumbers)
  }

  filterByRoomType(room) {
    if(room === 'all'){
      return this.avalibleRooms
    } else if(room !== 'all'){
      this.avalibleRooms = this.avalibleRooms.filter(type => type.roomType === room)
    }
    console.log(this.avalibleRooms)
  }

}

export default Hotel;
