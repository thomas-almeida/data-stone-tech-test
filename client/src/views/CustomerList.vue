<template>
    <main>
        <h1>Meus Clientes</h1>
        <p>
            Cadastre novos clientes aqui,
            você será capaz de associar produtos a ele depois.
        </p>

        <div>
            <ListTable :headers="[
                'Status',
                'Nome',
                'CPF',
                'RG',
                'Telefone',
                'Email',
            ]" :items="getAllCustomersComputed" :actions="acoesCliente" :edit="edit" :isEditing="isEditing" />
        </div>
    </main>
    <div v-if="isEditing" class="modal-background all-flex">
        <Icon name="close-outline" id="close-modal" @click="closeModal" />
        <EditModal :who="whoIsEditingComputed" :isEditing="isEditing" />
    </div>
</template>

<script>
import ListTable from '@/components/ListTable.vue';
import { useCustomerStore } from '@/stores/Customer';
import { mapGetters, mapActions } from 'pinia';
import EditModal from '@/components/EditModal.vue'
import Icon from '@/components/Icon.vue'
import { useProductStore } from '@/stores/Product';

export default {
    components: {
        ListTable,
        EditModal,
        Icon
    },
    data() {
        return {
            clientes: [],
            acoesCliente: [
                { label: 'Editar', action: this.editCustomer, type: 'customer' },
                { label: 'Excluir', action: this.delete, type: 'customer' },
            ],
            isEditing: false,
            edit: ''
        };
    },
    mounted() {
        this.getAllCustomers()
        this.getAllProducts()
    },
    computed: {
        ...mapGetters(useCustomerStore, ['getCustomerList']),
        getAllCustomersComputed() {
            this.clientes = this.getCustomerList
            return this.clientes
        },
        whoIsEditingComputed() {
            return this.edit
        }
    },
    methods: {
        ...mapActions(useCustomerStore, ['getAllCustomers']),
        ...mapActions(useProductStore, ['getAllProducts']),
        editCustomer() {
            this.edit = 'customer'
            this.isEditing = true
        },
        delete(){
            this.$emit('delete')
        },
        closeModal() {
            this.isEditing = false,
                this.edit = ''
        }
    }
};
</script>