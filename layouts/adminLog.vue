<template>
  <div>
    <HeaderAdminVue />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import HeaderAdminVue from '~/components/admin/HeaderAdmin.vue'
export default {
  name: 'AdminLog',
  components: {
    HeaderAdminVue
  }
}
</script>
