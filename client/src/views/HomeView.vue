<template>
  <main>
    <h1>Visão Geral</h1>

    <div class="dash-container all-flex gap-15">
      <div class="dash-box all-flex">
        <span>
          <h2>Clientes na Carteira do Sistema</h2>
          <h2>{{ getTotalCustomersComputed }}</h2>
        </span>
      </div>
      <div class="dash-box all-flex">
        <span>
          <h2>Produtos Cadastrados</h2>
          <h2> {{ getTotalProductsComputed }} </h2>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
import { useCustomerStore } from '@/stores/Customer';
import { useProductStore } from '@/stores/Product';
import { mapGetters, mapActions } from 'pinia';

export default {
  mounted() {
    this.getAllCustomers()
    this.getAllProducts()
  },
  computed: {
    ...mapGetters(useCustomerStore, ['getCustomerList']),
    ...mapGetters(useProductStore, ['getProductList']),

    getTotalCustomersComputed() {
      return this.getCustomerList.length
    },
    getTotalProductsComputed() {
      return this.getProductList.length
    }
  },
  methods: {
    ...mapActions(useCustomerStore, ['getAllCustomers']),
    ...mapActions(useProductStore, ['getAllProducts'])
  }
}

</script>