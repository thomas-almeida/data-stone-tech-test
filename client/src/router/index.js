import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerForm from '@/views/CustomerForm.vue'
import ProductForm from '@/views/ProductForm.vue'
import CustomerList from '@/views/CustomerList.vue'
import ProductList from '@/views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro-cliente',
      name: 'customer',
      component: CustomerForm
    },
    {
      path: '/cadastro-produto',
      name: 'product',
      component: ProductForm
    },
    {
      path: '/meus-clientes',
      name: 'customer-list',
      component: CustomerList
    },
    {
      path: '/meus-produtos',
      name: 'product-list',
      component: ProductList
    },
  ]
})

export default router
