<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          Generate Gaji
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Generate Gaji</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <form @submit.prevent="simpanData">
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-select
                    v-model="form.users_id"
                    :items="Users"
                    label="User Pegawai"
                    item-text="name"
                    item-value="pegawai_id"
                  />
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="dialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  type="submit"
                >
                  Generate Gaji
                </v-btn>
              </v-card-actions>
            </form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-simple-table>
      <template #default>
        <thead>
          <tr>
            <th class="text-left">
              Date Work
            </th>
            <th class="text-left">
              User
            </th>
            <th class="text-left">
              Lembur
            </th>
            <th class="text-left">
              Perizinan
            </th>
            <th class="text-left">
              Cuti
            </th>
            <th class="text-left">
              Absensi
            </th>
            <th class="text-left">
              Itenship Cuti
            </th>
            <th class="text-left">
              Gaji Pokok
            </th>
            <th class="text-left">
              Total Gaji Pokok
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in DataGaji"
            :key="item.penggajian_id"
          >
            <td>{{ item.date_in_work }} - {{ item.date_out_work }}</td>
            <td>{{ item.users_id }}</td>
            <td>{{ item.lembur_work }}</td>
            <td>{{ item.perizinan_work }}</td>
            <td>{{ item.cuti_work }}</td>
            <td>{{ item.absensi_work }}</td>
            <td>{{ item.intenship_cuti_work }}</td>
            <td>{{ item.gaji_pokok }}</td>
            <td>{{ item.total_gaji_pokok }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  layout: 'templateSdm',
  middleware: 'isSdm',
  data () {
    return {
      Users: [],
      DataGaji: [],
      form: {
        users_id: ''
      },
      dialog: false
    }
  },

  head () {
    return {
      title: 'Penggajian - Sdm'
    }
  },

  mounted () {
    this.getUser()
    this.getDataPenggajian()
  },

  methods: {
    getUser () {
      this.$axios.get('/api/sdm/penggajian/user').then((response) => {
        this.Users = response.data.data
      })
    },
    getDataPenggajian () {
      this.$axios.get('/api/sdm/penggajian').then((response) => {
        this.DataGaji = response.data.data
      })
    },
    closeModal () {
      this.dialog = false
      this.form = {
        users_id: ''
      }
    },
    simpanData () {
      this.$axios
        .post('/api/sdm/penggajian/generate', this.form)
        .then((response) => {
          this.dialog = false
          this.form = {
            users_id: ''
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
