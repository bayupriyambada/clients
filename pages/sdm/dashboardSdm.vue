<template>
  <div class="my-10">
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
  layout: 'templateSdm',
  middleware: 'isSdm',
  data () {
    return {}
  },

  head () {
    return {
      title: 'Dashboard - Sdm'
    }
  },

  computed: {
    user () {
      return this.$auth.user
    }
  }
}
</script>
