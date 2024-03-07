// store.js
import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customers', {
    state: () => ({
        customerList: []
    }),
    addCustomer(customer) {
        this.customerList.push(customer)
    },
    actions: {
        addCustomer(customer) {
            this.customerList.push(customer)
        }
    },
    getters: {
        getCustomerList() {
            return this.customerList
        }
    }
})
