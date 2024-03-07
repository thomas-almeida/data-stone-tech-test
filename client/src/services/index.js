import axios from "axios"

const BASE_URL = 'http://localhost:3001'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export async function createCustomer(customerData) {
    try {
        const response = await api.post('/create-customer', customerData)
        return response.data
    } catch (error) {
        console.error('Erro ao cadastrar cliente', error)
        throw error
    }
}

export async function createProduct(productData) {
    try {
        const response = await api.post('/create-product', productData)
        return response.data
    } catch (error) {
        console.error('Erro ao cadastrar cliente', error)
        throw error
    }
}

export async function getCustomerList() {
    try {
        const response = await api.get('/customers')
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function getProductList() {
    try {
        const response = await api.get('/products')
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}