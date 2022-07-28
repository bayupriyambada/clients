<template>
  <div>
    <v-row class="flex justify-lg-center align-items-center">
      <v-col class="container-col">
        <v-card class="my-4 py-2 px-4">
          <h4>Welcome Pegawai</h4>
        </v-card>
        <v-card class="px-5 py-4">
          <v-form @submit.prevent="login">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    type="email"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="user.password"
                    label="password"
                    type="password"
                  />
                </v-col>
                <v-btn type="submit">
                  Masuk
                </v-btn>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'authenticationLog',
  middleware: 'authenticated',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      validation: []
    }
  },
  head () {
    return {
      title: 'Login - pegawai'
    }
  },

  methods: {
    async login () {
      await this.$auth
        .loginWith('pegawai', {
          data: {
            email: this.user.email,
            password: this.user.password
          }
        })
        .then(() => {
          this.$router.push({
            name: 'pegawai-dashboardPegawai'
          })
        })
    }
  }
}
</script>
<style>
.container-col {
  justify-content: center;
  align-items: center;
  max-width: 500px;
}
</style>
