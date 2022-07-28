<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="collapse = !collapse" />
      <v-toolbar-title>Human Resource Bispro</v-toolbar-title>

      <v-spacer />
      <JamOtomatis />

      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="collapse" app temporary>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ user.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item :to="{ name: 'admin-dashboardAdmin' }">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'admin-sdm-sdmAdmin' }">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Sdm</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'admin-departemen-departemenAdmin' }">
          <v-list-item-icon>
            <v-icon>mdi-folder-pound</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Departemen</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'admin-unitKerja-unitKerjaAdmin' }">
          <v-list-item-icon>
            <v-icon> mdi-clipboard-text-search-outline </v-icon>
          </v-list-item-icon>

          <v-list-item-title>Unit Kerja</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'admin-jenisCuti-listJenisCuti' }">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Jenis Cuti</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'admin-penggajian-penggajianAdmin' }">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Penggajian Data</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Rekap Data</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import JamOtomatis from "../jamOtomatis.vue";
export default {
  components: { JamOtomatis },
  // computed
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          name: "dashboardAdmin",
        },
        { title: "Sdm", icon: "mdi-view-dashboard", name: "sdmAdmin" },
        {
          title: "Departemen",
          icon: "mdi-view-dashboard",
          name: "departemen-departemenAdmin",
        },
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          name: "admin-dashboardAdmin",
        },
      ],
      collapse: false,
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  // method
  methods: {
    // method "logout"
    async logout() {
      // logout auth
      await this.$auth.logout();
      // redirect route admin login
      this.$router.push({
        name: "admin-adminLogin",
      });
    },
  },
};
</script>
