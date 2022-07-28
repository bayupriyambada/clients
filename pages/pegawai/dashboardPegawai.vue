<template>
  <div class="my-2">
    <v-container class="">
      <v-card class="px-4 py-4">
        Selamat Datang,
        <span class="font-weight-bold">{{ user.name }}</span>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: 'templatePegawai',
  middleware: 'isPegawai',
  data () {
    return {}
  },

  head () {
    return {
      title: 'Dashboard - Pegawai'
    }
  },

  computed: {
    user () {
      return this.$auth.user
    }
  }
}
</script>
