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
            ]" :items="getAllProductsComputed" :actions="acoesCliente" />
        </div>
    </main>
</template>

<script>
import ListTable from '@/components/ListTable.vue'
import { useProductStore } from '@/stores/Product'
import { mapGetters, mapActions } from 'pinia'

export default {
    components: {
        ListTable
    },
    data() {
        return {
            produtos: [],
            acoesCliente: [
                { label: 'Editar', action: 'editar' },
                { label: 'Excluir', action: 'excluir' },
            ]
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
        }
    },
    methods: {
        ...mapActions(useProductStore, ['getAllProducts'])
    }
}
</script>