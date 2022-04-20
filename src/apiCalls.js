const fetchDataSets = (dataSet) => {
  return fetch(`http://localhost:3001/api/v1/${dataSet}`).then(response => response.json())
    .catch(error => console.log(`Error: ${dataSet} fetch failed`))
}

let allFetchData = Promise.all([fetchDataSets('customers'), fetchDataSets('bookings'), fetchDataSets('rooms')])

export { allFetchData }
