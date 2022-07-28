<template>
  <div>
    <v-navigation-drawer app>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ data.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ data.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item :to="{ name: 'pegawai-dashboardPegawai' }">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'pegawai-absensi-absensiPegawai' }">
          <v-list-item-icon>
            <v-icon>mdi-clock</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Absensi</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>Human Resource Bispro</v-toolbar-title>

      <v-spacer />
      <JamOtomatis />

      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import JamOtomatis from '../jamOtomatis.vue'
export default {
  components: { JamOtomatis },
  // computed
  data () {
    return {}
  },
  computed: {
    data () {
      return this.$auth.user
    }
  },
  // method
  methods: {
    // method "logout"
    async logout () {
      // logout auth
      await this.$auth.logout()
      // redirect route pegawai login
      this.$router.push({
        name: 'pegawai-pegawaiLogin'
      })
    }
  }
}
</script>
