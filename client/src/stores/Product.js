// store.js
import { defineStore } from 'pinia'
import { createProduct, getProductList } from '../services'

export const useProductStore = defineStore('products', {
    state: () => ({
        productList: []
    }),
    actions: {
        async addProduct(product) {
            try {
                const newProduct = await createProduct(product)
                this.productList.push(newProduct)
            } catch (error) {
                console.error(error)
                throw error
            }
        },
        async getAllProducts() {
            try {
                this.productList = await getProductList()
            } catch (error) {
                console.error(error)
            }
        }
    },
    getters: {
        getProductList() {
            return this.productList
        }
    }
})
