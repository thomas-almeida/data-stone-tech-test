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
            ]" :items="getAllCustomersComputed" :actions="acoesCliente" />
        </div>
    </main>
</template>

<script>
import ListTable from '@/components/ListTable.vue';
import { useCustomerStore } from '@/stores/Customer';
import { mapGetters, mapActions } from 'pinia';

export default {
    components: {
        ListTable
    },
    data() {
        return {
            clientes: [],
            acoesCliente: [
                { label: 'Editar', action: 'editar' },
                { label: 'Excluir', action: 'excluir' },
                { label: 'Associar', action: 'associar' },
            ]
        };
    },
    mounted() {
        this.getAllCustomers()
    },
    computed: {
        ...mapGetters(useCustomerStore, ['getCustomerList']),
        getAllCustomersComputed() {
            this.clientes = this.getCustomerList
            return this.clientes
        }
    },
    methods: {
        ...mapActions(useCustomerStore, ['getAllCustomers'])
    }
};
</script>