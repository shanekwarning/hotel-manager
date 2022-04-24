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

    this.avalibleRooms.forEach((room, index) => {
      console.log('room', room)
      takenRoomNumbers.forEach(num => {
        if (num === room.number) {
          this.avalibleRooms.splice(index, 1)
        }
      })
    })
    // this.rooms.forEach(room => {
    //   takenRoomNumbers.forEach(num => {
    //     console.log(num)
    //     console.log('room num', room.number)
    //     if(room.number === num && !this.avalibleRooms.includes(room)){
    //       this.avalibleRooms.push(room)
    //     }
    //   })
    // })
    console.log('after', this.avalibleRooms)
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
