<template>
  <div>
    <v-app>
      <HeaderPegawai />
      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view />
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>
<script>
import HeaderPegawai from '../components/pegawai/HeaderPegawai.vue'

export default { components: { HeaderPegawai } }
</script>
