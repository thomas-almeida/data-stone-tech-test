<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header">{{ header }}</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td v-for="header in headers" :key="header">{{ item[header.toLowerCase()] }}</td>
                    <td class="all-flex gap-5">
                        <!-- Renderização dinâmica dos botões de ação -->
                        <span v-for="action in actions" :key="action.label" @click="handleAction(action, item)">
                            {{ action.label }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>

import { useProductStore } from '@/stores/Product'
import { useCustomerStore } from '@/stores/Customer'
import { mapActions } from 'pinia'

export default {
    props: {
        headers: Array,
        items: Array,
        actions: Array,
        edit: String,
        isEditing: Boolean
    },

    methods: {
        ...mapActions(useProductStore, ['getProductById']),
        ...mapActions(useCustomerStore, ['getCustomerById']),
        ...mapActions(useProductStore, ['deleteProduct']),
        ...mapActions(useCustomerStore, ['deleteCustomer']),
        handleAction(action, item) {

            if (typeof action.action === 'function') {

                if (action.label === 'Editar' && action.type === 'product') {
                    action.action(item)
                    this.getProductById(item.id)
                }

                if (action.label === 'Editar' && action.type === 'customer') {
                    action.action(item)
                    this.getCustomerById(item.id)
                }

                if (action.label === 'Excluir' && action.type === 'product') {
                    this.deleteProduct(item.id)
                    window.location.reload()
                }

                if (action.label === 'Excluir' && action.type === 'customer') {
                    this.deleteCustomer(item.id)
                    window.location.reload()
                }

            } else {
                console.error('Ação inválida:', action)
            }
        },
        closeModal() {
            alert('aa')
        }
    },
}
</script>