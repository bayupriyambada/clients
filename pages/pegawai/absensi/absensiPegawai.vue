<template>
  <div class="my-2">
    <v-container class="" />
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
      title: 'Absensi - Pegawai'
    }
  },

  computed: {
    user () {
      return this.$auth.user
    }
  }
}
</script>
