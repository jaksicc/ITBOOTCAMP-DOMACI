import axios from 'axios'

const QUOTES = '/quotes'
const USERS = '/users'

export const postUser = (username, email, password) => {
    return axios.post(`http://localhost:3005${USERS}`,{username, email, password})
}

export const getUsers = () => {
    return axios.get(`http://localhost:3005${USERS}`)
}

export const getQuotes = () => {
    return axios.get(`http://localhost:3005${QUOTES}`)
}

export const postQuotes = (quote) => {
    return axios.post(`http://localhost:3005${QUOTES}`,quote)
}