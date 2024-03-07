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
                        <button v-for="action in actions" :key="action.label" @click="handleAction(action, item)">
                            {{ action.label }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        headers: Array, // Array de cabeçalhos da tabela
        items: Array, // Array de itens para exibir na tabela
        actions: Array // Array de ações disponíveis para cada item
    },
    methods: {
        handleAction(action, item) {
            // Lógica para lidar com a ação clicada
            // Você pode emitir um evento ou chamar um método no componente pai
            console.log(`Ação "${action.label}" clicada para o item`, item);
        }
    }
};
</script>