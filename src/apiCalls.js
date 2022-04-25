const fetchDataSets = (dataSet) => {
  return fetch(`http://localhost:3001/api/v1/${dataSet}`).then(response => response.json())
    .catch(error => console.log(`Error: ${dataSet} fetch failed`))
}

const fetchUser = (userData) => {
  return fetch(`http://localhost:3001/api/v1/customers/${userData}`).then(response => response.json())
}


let allFetchData = Promise.all([fetchDataSets('customers'), fetchDataSets('bookings'), fetchDataSets('rooms')])

const postBooking = (userID, date, number) => {

  return fetch('http://localhost:3001/api/v1/bookings', {
          method: 'POST',
          body: JSON.stringify({
             "userID": userID,
              "date": date,
              "roomNumber": number
          }),
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(response => response.json())
lFetchData = Promise.all([fetchDataSets('customers'), fetchDataSets('bookings'), fetchDataSets('rooms')])

}
export { fetchUser, allFetchData, postBooking }
