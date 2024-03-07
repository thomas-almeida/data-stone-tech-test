<template>
  <main>
    <h1>Cadastrar Novo Cliente</h1>
    <p>
      Cadastre novos clientes aqui,
      você será capaz de associar produtos a ele depois.
    </p>

    <form>

      <span>
        <label for="">Nome</label>
        <input type="text" v-model="formData.nome" placeholder="João da Silva">
      </span>
      <span>
        <label for="">CPF</label>
        <input type="tel" v-model="formData.cpf" placeholder="123.456.789-10">
      </span>
      <span>
        <label for="">RG</label>
        <input type="tel" v-model="formData.rg" placeholder="12.345.678-X">
      </span>
      <span>
        <label for="">Telefone</label>
        <input type="text" v-model="formData.telefone" placeholder="(11) 98765-4321">
      </span>
      <span>
        <label for="">Email</label>
        <input type="email" v-model="formData.email" placeholder="joao.silva@email.com">
      </span>
      <span class="select-field">
        <label for="">Status do Cliente</label>
        <select name="" id="" v-model="formData.status">
          <option value="">Selecione</option>
          <option value="ATIVO">Ativo</option>
          <option value="INATIVO">Inativo</option>
        </select>
      </span>
    </form>

    <button class="btn-submit" @click="submitForm" :class="{ 'btn-disabled': !isValid() }" :disabled="!isValid()">
      Cadastrar Cliente
    </button>

  </main>
</template>

<script>

import { useCustomerStore } from '@/stores/Customer';
import { mapActions } from 'pinia';

export default {
  data() {
    return {
      formData: {
        nome: '',
        cpf: '',
        rg: '',
        telefone: '',
        email: '',
        status: ''
      },
      statusOptions: ['Ativo', 'Inativo']
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ['addCustomer']),
    submitForm() {
      event.preventDefault()
      const customer = { ...this.formData }
      this.addCustomer(customer)
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        nome: '',
        cpf: '',
        rg: '',
        telefone: '',
        email: '',
        status: ''
      };
    },
    isValid() {
      for (let key in this.formData) {
        if (!this.formData[key]) {
          return false;
        }
      }
      return true;
    }
  }
};
</script>
