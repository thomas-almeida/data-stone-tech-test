// store.js
import { defineStore } from 'pinia'
import { createCustomer, getCustomerList, getCustomerById, updateCustomer, deleteCustomer } from '../services'

export const useCustomerStore = defineStore('customers', {
    state: () => ({
        customerList: [],
        currentCustomer: null
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
        },
        async getCustomerById(customerId) {
            try {
                this.currentCustomer = await getCustomerById(customerId)
            } catch (error) {
                console.error(error)
            }
        },
        async updateCustomer(customerId, customerData) {
            try {
                this.currentCustomer = await updateCustomer(customerId, customerData)
            } catch (error) {
                console.error(error)
            }
        },
        async deleteCustomer(customerId) {
            try {
                await deleteCustomer(customerId)
            } catch (error) {
                console.error(error)
            }
        }
    },
    getters: {
        getCustomerList() {
            return this.customerList
        },
        getCurrentCustomer() {
            return this.currentCustomer
        }
    }
})
