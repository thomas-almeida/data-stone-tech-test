// store.js
import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
    state: () => ({
        productList: []
    }),
    addProduct(product) {
        this.productList.push(product)
    },
    actions: {
        addProduct(product) {
            this.productList.push(product)
        }
    },
    getters: {
        getProductList() {
            return this.productList
        }
    }
})
