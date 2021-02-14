import axios from 'axios'

export const getAllProducts = () => {
    return axios.get('http://localhost:3005/products')
}