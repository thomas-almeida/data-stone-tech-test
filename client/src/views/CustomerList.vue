<template>
    <main>
        <h1>Meus Produtos</h1>
        <p>
            Cadastre novos clientes aqui,
            você será capaz de associar produtos a ele depois.
        </p>

        <div>
            <ListTable 
                :headers="
                [
                    'Nome',
                    'CPF',
                    'Telefone',
                    'Email',
                    'Status'
                ]" 
                :items="clientes"
                :actions="acoesCliente" 
            />
        </div>
    </main>
</template>

<script>
import ListTable from '@/components/ListTable.vue';

export default {
    components: {
        ListTable
    },
    data() {
        return {
            clientes: [
                { 
                    id: 1,
                    nome: 'João',
                    cpf: '123.456.789-10',
                    telefone: '(11) 98765-4321',
                    email: 'email@email.com',
                    status: 'Ativo'
                 },
                 { 
                    id: 2,
                    nome: 'João',
                    cpf: '123.456.789-10',
                    telefone: '(11) 98765-4321',
                    email: 'email@email.com',
                    status: 'Ativo'
                 },                { 
                    id: 3,
                    nome: 'João',
                    cpf: '123.456.789-10',
                    telefone: '(11) 98765-4321',
                    email: 'email@email.com',
                    status: 'Ativo'
                 },
                // Adicione mais itens conforme necessário
            ],
            acoesCliente: [
                { label: 'Editar', action: 'editar' },
                { label: 'Excluir', action: 'excluir' },
                { label: 'Associar', action: 'associar' },
                // Adicione mais ações conforme necessário
            ]
        };
    }
};
</script>