<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>

          <v-list-item prepend-icon="mdi-account" title="Cadastrar novo Cliente" value="create-customer"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Cadastrar novo Produto" value="create-product"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Meus Clientes" value="list-customers"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Meus Produtos" value="list-products"></v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
      </v-main>
    </v-layout>
  </v-card>
</template>