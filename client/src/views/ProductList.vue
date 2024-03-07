<template>
    <main>
        <h1>Meus Clientes</h1>
        <p>
            Cadastre novos clientes aqui,
            você será capaz de associar produtos a ele depois.
        </p>
        <div>
            <ListTable 
                :headers="
                [
                    'Nome',
                    'Valor',
                    'Desconto', 
                    'Status'
                ]" 
                :items="produtos"
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
            produtos: [
                {
                    id: 1,
                    nome: 'PACOTE LEADS I',
                    valor: 'R$ 2000',
                    desconto: '10%',
                    status: 'Ativo'
                },
                {
                    id: 2,
                    nome: 'PACOTE LEADS II',
                    valor: 'R$ 2000',
                    desconto: '10%',
                    status: 'Ativo'
                },
                {
                    id: 3,
                    nome: 'PACOTE LEADS III',
                    valor: 'R$ 2000',
                    desconto: '10%',
                    status: 'Ativo'
                },
                // Adicione mais itens conforme necessário
            ],
            acoesCliente: [
                { label: 'Editar', action: 'editar' },
                { label: 'Excluir', action: 'excluir' },
                // Adicione mais ações conforme necessário
            ]
        };
    }
};
</script>