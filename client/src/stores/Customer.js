// store.js
import { defineStore } from 'pinia'
import { createCustomer, getCustomerList } from '../services'

export const useCustomerStore = defineStore('customers', {
    state: () => ({
        customerList: []
    }),

    actions: {
        async addCustomer(customer) {
            try {
                const newCustomer = await createCustomer(customer)
                this.customerList.push(newCustomer)
            } catch (error) {
                console.error(error)
                throw error
            }
        },
        async getAllCustomers() {
            try {
                this.customerList = await getCustomerList()
            } catch (error) {
                console.error(error)
            }
        }
    },
    getters: {
        getCustomerList() {
            return this.customerList
        }
    }
})
