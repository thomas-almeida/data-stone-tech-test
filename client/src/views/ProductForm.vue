<template>
  <main>
    <h1>Cadastrar Novo Produto</h1>
    <p>
      Cadastre novos produtos aqui,
      você será capaz de associar clientes a ele depois.
    </p>

    <form>

      <span>
        <label for="">Nome do Produto</label>
        <input type="text" v-model="formData.nome" placeholder="Pacote de Leads I">
      </span>
      <span>
        <label for="">Valor Mensal</label>
        <input type="tel" v-model="formData.valor" placeholder="R$ 0.000,00" v-maska data-maska="0.99" data-maska-tokens="0:\d:multiple|9:\d:optional">
      </span>
      <span>
        <label for="">Desconto</label>
        <input type="tel" v-model="formData.desconto" placeholder="%" v-maska data-maska="!%###" data-maska-tokens="H:[0-9a-fA-F]">
      </span>
      <span class="select-field">
        <label for="">Status do Produto</label>
        <select name="" id="" v-model="formData.status">
          <option value="">Selecione</option>
          <option value="ATIVO">Ativo</option>
          <option value="INATIVO">Inativo</option>
        </select>
      </span>
    </form>

    <button class="btn-submit" @click="submitForm" :class="{ 'btn-disabled': !isValid() }" :disabled="!isValid()">
      Cadastrar Produto
    </button>

  </main>
</template>

<script>

import { useProductStore } from '@/stores/Product'
import { mapActions } from 'pinia'
import { vMaska } from 'maska'

export default {
  directives: { maska: vMaska },
  data() {
    return {
      formData: {
        id: '1',
        nome: '',
        valor: '',
        desconto: '',
        status: ''
      },
      statusOptions: ['Ativo', 'Inativo']
    }
  },
  methods: {
    ...mapActions(useProductStore, ['addProduct']),
    generateUniqueId() {
      const timestamp = Date.now().toString(36)
      const randomString = Math.random().toString(36).substring(2, 8)
      return timestamp + '-' + randomString
    },
    submitForm() {
      event.preventDefault()
      this.formData.id = this.generateUniqueId()
      this.addProduct(this.formData)
      this.resetForm()
    },
    resetForm() {
      this.formData = {
        nome: '',
        valor: '',
        desconto: '',
        status: ''
      }
    },
    isValid() {
      for (let key in this.formData) {
        if (!this.formData[key]) {
          return false
        }
      }
      return true
    }
  }
}
</script>
