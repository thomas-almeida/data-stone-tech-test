<template>
  <div class="container">
    <div class="container-content">
      <div class="sidebar-container">
        <SideBar :options="optionsWithLinks" />
      </div>
      <div class="responsive bottom-options">
        <BottomBar :options="optionsWithLinks"/>
      </div>
      <div class="screens-container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import BottomBar from './components/BottomBar.vue';

const options = [
  { name: 'home-outline', option: 'Dashboard', link: '/' },
  { name: 'person-add-outline', option: 'Cadastrar novo Cliente', link: '/cadastro-cliente' },
  { name: 'cube-outline', option: 'Cadastrar novo Produto', link: '/cadastro-produto' },
  { name: 'person-outline', option: 'Meus Clientes', link: '/meus-clientes' },
  { name: 'cube-outline', option: 'Meus Produtos', link: '/meus-produtos' }
]

const optionsWithLinks = options.map(option => ({
  name: option.name,
  option: option.option,
  link: option.link
}))
</script>
