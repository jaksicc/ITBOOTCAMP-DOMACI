import axios from 'axios'

export const getPastLaunches = () => axios.get('https://api.spacexdata.com/v4/launches/past')