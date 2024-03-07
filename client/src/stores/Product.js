// store.js
import { defineStore } from 'pinia'
import { createProduct, getProductList, getProductById, updateProduct, deleteProduct } from '../services'

export const useProductStore = defineStore('products', {
    state: () => ({
        productList: [],
        currentProduct: null
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
        },
        async getProductById(productId) {
            try {
                this.currentProduct = await getProductById(productId)
            } catch (error) {
                console.error(error)
            }
        },
        async updateProduct(productId, productData) {
            try {
                this.currentProduct = await updateProduct(productId, productData)
            } catch (error) {
                console.error(error)
            }
        },
        async deleteProduct(productId) {
            try {
                await deleteProduct(productId)
            } catch (error) {
                console.error(error)
            }
        }
    },
    getters: {
        getProductList() {
            return this.productList
        },
        getCurrentProduct() {
            return this.currentProduct
        }
    }
})
