import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/classes/Customer-class.js'
import Hotel from '../src/classes/Hotel-class.js'
import data from '../test/sample-data.js'

describe('Customer', () => {
  let customer;
  let customer2;
  let hotel;
  let bookings;
  beforeEach( () => {
    customer = new Customer(data.sampleUserOne.id, data.sampleUserOne.name)
    hotel = new Hotel(data.sampleCustomers, data.sampleBookings, data.sampleRooms)
  })
  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  })
  it('shold take an id and a name', () => {
    expect(customer.id).to.equal(1)
    expect(customer.name).to.equal("Leatha Ullrich")
  })
  it('should start with no bookings', () => {
    expect(customer.bookings).to.deep.equal([])
  })
  it('should be able to add bookings', () => {
    customer.populateCustomerBookings(hotel.bookings)
    expect(customer.bookings.length).to.equal(2)
  })
  it('should be able to total the cost of rooms booked', () => {
    customer.populateCustomerBookings(hotel.bookings)
    customer.calculateCost(hotel.rooms)
    expect(customer.totalCost).to.equal(431.85)
  })
})
