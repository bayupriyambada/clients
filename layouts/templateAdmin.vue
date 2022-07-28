<template>
  <div>
    <v-app>
      <!-- <HeaderAdmin /> -->
      <HeaderAdmin2 />
      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <Nuxt />
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>
<script>
import HeaderAdmin2 from '~/components/admin/HeaderAdmin.vue'
// import HeaderAdmin from '~/components/admin/HeaderAdmin.vue'
export default { components: { HeaderAdmin2 } }
</script>
