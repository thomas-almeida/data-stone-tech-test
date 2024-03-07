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

export async function getProductById(productId) {
    try {
        const response = await api.get(`/products/${productId}`)
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function getCustomerById(customerId) {
    try {
        const response = await api.get(`/customers/${customerId}`)
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function updateProduct(productId, productData) {
    try {
        const response = await api.put(`/edit-products/${productId}`, productData)
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function updateCustomer(customerId, customerData) {
    try {
        const response = await api.put(`/edit-customers/${customerId}`, customerData)
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function deleteProduct(productId) {
    try {
        const response = await api.delete(`/delete-product/${productId}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function deleteCustomer(customerId) {
    try {
        const response = await api.delete(`/delete-customer/${customerId}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}