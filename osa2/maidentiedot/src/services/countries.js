import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
  return axios.get(`${baseUrl}/all`)
}

const getFiltered = (filter) => {
  console.log('searching details for:', filter);
  return axios.get(`${baseUrl}/name/${filter}`)
}

export default { 
  getAll: getAll, 
  getFiltered: getFiltered,
}