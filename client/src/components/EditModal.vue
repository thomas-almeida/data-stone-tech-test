<template>

    <div v-if="isEditing">
        <div class="modal-container">
            <h1>Editar</h1>

            <div v-if="whoIsEditingComputed === 'product'">
                <form>
                    <span>
                        <label for="">Nome do Produto</label>
                        <input type="text" v-model="productForm.nome" placeholder="Pacote de Leads I">
                    </span>
                    <span>
                        <label for="">Valor Mensal</label>
                        <input type="tel" v-model="productForm.valor" placeholder="R$ 0.000,00" v-maska
                            data-maska="0.99" data-maska-tokens="0:\d:multiple|9:\d:optional">
                    </span>
                    <span>
                        <label for="">Desconto</label>
                        <input type="tel" v-model="productForm.desconto" placeholder="%" v-maska data-maska="!%###"
                            data-maska-tokens="H:[0-9a-fA-F]">
                    </span>
                    <span class="select-field">
                        <label for="">Status do Produto</label>
                        <select name="" id="" v-model="productForm.status">
                            <option value="">Selecione</option>
                            <option value="ATIVO">Ativo</option>
                            <option value="INATIVO">Inativo</option>
                        </select>
                    </span>
                </form>
                <button class="btn-submit" @click="editProduct">
                    Editar Produto
                </button>
            </div>
            <div v-if="whoIsEditingComputed === 'customer'">
                <form>

                    <span>
                        <label for="">Nome</label>
                        <input type="text" v-model="customerForm.nome" placeholder="João da Silva">
                    </span>
                    <span>
                        <label for="">CPF</label>
                        <input type="tel" v-model="customerForm.cpf" placeholder="123.456.789-10" v-maska
                            data-maska="###.###.###-##">
                    </span>
                    <span>
                        <label for="">RG</label>
                        <input type="tel" v-model="customerForm.rg" placeholder="12.345.678-X" v-maska
                            data-maska="**.***.***-*">
                    </span>
                    <span>
                        <label for="">Telefone</label>
                        <input type="text" v-model="customerForm.telefone" placeholder="(11) 98765-4321" v-maska
                            data-maska="(##) #####-####">
                    </span>
                    <span>
                        <label for="">Email</label>
                        <input type="email" v-model="customerForm.email" placeholder="joao.silva@email.com">
                    </span>
                    <span class="select-field">
                        <label for="">Status do Cliente</label>
                        <select name="" id="" v-model="customerForm.status">
                            <option value="">Selecione</option>
                            <option value="ATIVO">Ativo</option>
                            <option value="INATIVO">Inativo</option>
                        </select>
                    </span>

                    <span class="select-field">
                        <label for="">Produto Associado</label>
                        <select v-model="customerForm.produto" :disabled="!availableProducts.length">
                            <option value="">Selecione um produto</option>
                            <option v-for="product in availableProducts" :key="product.id" :value="product.nome">
                                {{ product.nome }}
                            </option>
                        </select>
                    </span>


                </form>

                <button class="btn-submit" @click="editCustomer" :class="{ 'btn-disabled': !isValid() }"
                    :disabled="!isValid()">
                    Cadastrar Cliente
                </button>
            </div>
        </div>
    </div>

</template>

<script>

import { useProductStore } from '@/stores/Product'
import { useCustomerStore } from '@/stores/Customer'
import { mapActions, mapGetters } from 'pinia'
import { vMaska } from 'maska'

export default {
    directives: { maska: vMaska },
    props: {
        isEditing: Boolean,
        who: String
    },
    data() {
        return {
            productForm: {
                id: '1',
                nome: '',
                valor: '',
                desconto: '',
                status: ''
            },
            customerForm: {
                id: '1',
                nome: '',
                cpf: '',
                rg: '',
                telefone: '',
                email: '',
                status: '',
                produto: ''
            },
            selectedProductId: ''
        }
    },
    mounted() {
        setTimeout(() => {
            if (this.whoIsEditingComputed === 'product') {
                this.productForm = this.getCurrentProduct
            }

            if (this.whoIsEditingComputed === 'customer') {
                this.customerForm = this.getCurrentCustomer
            }
        }, 200)
    },
    computed: {
        ...mapGetters(useProductStore, ['getProductList']),
        ...mapGetters(useProductStore, ['getCurrentProduct']),
        ...mapGetters(useCustomerStore, ['getCurrentCustomer']),
        whoIsEditingComputed() {
            if (this.who === 'product') {
                return 'product'
            }

            if (this.who === 'customer') {
                return 'customer'
            }

            return ''
        },
        availableProducts() {
            return this.getProductList
        },
    },
    methods: {
        ...mapActions(useProductStore, ['updateProduct']),
        ...mapActions(useCustomerStore, ['updateCustomer']),
        generateUniqueId() {
            const timestamp = Date.now().toString(36)
            const randomString = Math.random().toString(36).substring(2, 8)
            return timestamp + '-' + randomString
        },
        editProduct() {
            event.preventDefault()
            this.updateProduct(this.productForm.id, this.productForm)
            this.resetForm()
            window.location.reload()
        },
        editCustomer() {
            event.preventDefault()
            this.updateCustomer(this.customerForm.id, this.customerForm)
            this.resetForm()
            window.location.reload()
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