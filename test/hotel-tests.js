import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/classes/Hotel-class.js'
import data from '../test/sample-data.js'

describe('Hotel', () => {
  let hotel;
  beforeEach( () => {
    hotel = new Hotel(data.sampleCustomers, data.sampleBookings, data.sampleRooms)
  })
  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  })
  it('should have an array of customers, bookings, and rooms', () => {
    expect(hotel.customers.length).to.equal(10)
    expect(hotel.bookings.length).to.equal(19)
    expect(hotel.rooms.length).to.equal(10)
  })
  it('should start with no avalible rooms', () => {
    expect(hotel.avalibleRooms).to.deep.equal([])
  })
  it('should be able to create a list of avalible rooms', () => {
    hotel.filterAvalibleRooms("2022/01/16")
    expect(hotel.avalibleRooms.length).to.equal(9)
  })
  it('should be able to filter rooms by roomtype once avalible rooms has been established', () => {
    hotel.filterAvalibleRooms("2022/01/16")
    hotel.filterByRoomType("junior suite")
    expect(hotel.avalibleRooms.length).to.equal(2)
  } )
})
