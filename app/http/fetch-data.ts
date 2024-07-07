const axios = require('axios')
const BASE_URL = 'http://127.0.0.1:5000/api'

const fetchData = async (path: string) => {
    try {
        const response = await axios.get(BASE_URL + path)
        console.log(response.data);
        
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

const fetchStations = async () =>{
    await fetchData('/stations')
}

fetchStations()