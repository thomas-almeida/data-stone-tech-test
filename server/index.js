const express = require('express')
const fs = require('fs')
const cors = require('cors')

const api = express()
const PORT = 3001

api.use(express.json())
api.use(cors())

api.post('/create-customer', (req, res) => {
    const newCustomer = req.body
    const customers = JSON.parse(fs.readFileSync('customers.json'))
    customers.push(newCustomer)
    fs.writeFileSync('customers.json', JSON.stringify(customers))
    res.json(req.body)
})

api.post('/create-product', (req, res) => {
    const newProduct = req.body
    const products = JSON.parse(fs.readFileSync('products.json'))
    products.push(newProduct)
    fs.writeFileSync('products.json', JSON.stringify(products))
    res.json(req.body)
})

api.delete('/delete-customer/:id', (req, res) => {
    const id = req.params.id
    let customers = JSON.parse(fs.readFileSync('customers.json'))
    const index = customers.findIndex(customer => customer.id === id)
    if (index !== -1) {
        customers.splice(index, 1)
        fs.writeFileSync('customers.json', JSON.stringify(customers))
        res.json({ message: 'Cliente excluído com sucesso!' })
    } else {
        res.status(404).json({ error: 'Cliente não encontrado.' })
    }
})

api.delete('/delete-product/:id', (req, res) => {
    const id = req.params.id
    let products = JSON.parse(fs.readFileSync('products.json'))
    const index = products.findIndex(product => product.id === id)
    if (index !== -1) {
        products.splice(index, 1)
        fs.writeFileSync('products.json', JSON.stringify(products))
        res.json({ message: 'Produto excluído com sucesso!' })
    } else {
        res.status(404).json({ error: 'Produto não encontrado.' })
    }
})

api.get('/customers/:id', (req, res) => {
    const customerId = req.params.id
    const customers = JSON.parse(fs.readFileSync('customers.json'))
    const customer = customers.find(customer => customer.id === customerId)
    if (customer) {
        res.json(customer)
    } else {
        res.status(404).json({ message: 'Produto não encontrado' })
    }
})

api.get('/products/:id', (req, res) => {
    const productId = req.params.id
    const products = JSON.parse(fs.readFileSync('products.json'))
    const product = products.find(product => product.id === productId)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Produto não encontrado' })
    }
})

api.put('/edit-products/:id', (req, res) => {
    const productId = req.params.id
    const updatedProduct = req.body
    const products = JSON.parse(fs.readFileSync('products.json'))
    const index = products.findIndex(product => product.id === productId)
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct }
        fs.writeFileSync('products.json', JSON.stringify(products))
        res.json({ message: 'Produto atualizado com sucesso!', product: products[index] })
    } else {
        res.status(404).json({ message: 'Produto não encontrado' })
    }
})

api.put('/edit-customers/:id', (req, res) => {
    const customerId = req.params.id
    const updatedCustomer = req.body
    const customers = JSON.parse(fs.readFileSync('customers.json'))
    const index = customers.findIndex(customer => customer.id === customerId)
    if (index !== -1) {
        customers[index] = { ...customers[index], ...updatedCustomer }
        fs.writeFileSync('customers.json', JSON.stringify(customers))
        res.json({ message: 'Cliente atualizado com sucesso!', customer: customers[index] })
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' })
    }
})

api.get('/customers', (req, res) => {
    const customers = JSON.parse(fs.readFileSync('customers.json'))
    res.json(customers)
})

api.get('/products', (req, res) => {
    const products = JSON.parse(fs.readFileSync('products.json'))
    res.json(products)
})

api.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})



