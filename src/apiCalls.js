const fetchDataSets = (dataSet) => {
  return fetch(`http://localhost:3001/api/v1/${dataSet}`).then(response => response.json())
    .catch(error => console.log(`Error: ${dataSet} fetch failed`))
}

let allFetchData = Promise.all([fetchDataSets('customers'), fetchDataSets('bookings'), fetchDataSets('rooms')])

const postBooking = (userID, date, number) => {

  fetch('http://localhost:3001/api/v1/bookings', {
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
.then(response => {
  fetchDataSets('bookings')
  console.log('post response', response)
})

allFetchData = Promise.all([fetchDataSets('customers'), fetchDataSets('bookings'), fetchDataSets('rooms')])

}
export { allFetchData, postBooking }
