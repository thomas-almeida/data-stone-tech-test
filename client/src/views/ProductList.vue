<template>
    <main>
        <h1>Meus Produtos</h1>
        <p>
            Cadastre novos produtos aqui,
            você será capaz de associar clientes a ele depois.
        </p>
        <div>
            <ListTable :headers="[
                'Status',
                'Nome',
                'Valor',
                'Desconto'
            ]" :items="getAllProductsComputed" :actions="acoesCliente" :edit="edit" :isEditing="isEditing" />
        </div>
    </main>
    <div v-if="isEditing" class="modal-background all-flex">
        <Icon name="close-outline" @click="closeModal" />
        <EditModal :who="whoIsEditingComputed" :isEditing="isEditing" />
    </div>
</template>

<script>
import ListTable from '@/components/ListTable.vue'
import { useProductStore } from '@/stores/Product'
import { mapGetters, mapActions } from 'pinia'
import EditModal from '@/components/EditModal.vue'
import Icon from '@/components/Icon.vue'

export default {
    components: {
        ListTable,
        EditModal,
        Icon
    },
    data() {
        return {
            produtos: [],
            acoesCliente: [
                { label: 'Editar', action: this.editProduct, type: "product" },
                { label: 'Excluir', action: this.delete, type: "product" },
            ],
            isEditing: false,
            edit: ''

        }
    },
    mounted() {
        this.getAllProducts()
    },
    computed: {
        ...mapGetters(useProductStore, ['getProductList']),
        getAllProductsComputed() {
            this.produtos = this.getProductList
            return this.produtos
        },
        whoIsEditingComputed() {
            return this.edit
        }
    },
    methods: {
        ...mapActions(useProductStore, ['getAllProducts']),
        editProduct() {
            this.edit = 'product'
            this.isEditing = true
        },
        delete() {
            this.$emit('delete')
        },
        closeModal() {
            this.isEditing = false,
                this.edit = ''
        }
    }
}
</script>