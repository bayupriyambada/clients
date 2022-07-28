<template>
  <div>
    <v-row class="my-4 ml-2">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template #activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Tambah
          </v-btn>
        </template>
        <form @submit.prevent="simpanData">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="DataForm.name"
                      label="Nama Jenis Cuti*"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="blue darken-1" text @click="closeModal()">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text type="submit">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-dialog>
    </v-row>
    <v-simple-table>
      <template #default>
        <thead>
          <tr>
            <th class="text-left">
              No
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Total Cuti
            </th>
            <th class="text-left">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in JenisCuti" :key="item.jenis_cuti_id">
            <td>{{ item.nomor }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.cuti_count }}</td>
            <td>
              <v-btn elevation="2" @click="setDataForm(item.jenis_cuti_id)">
                <v-icon class="mr-2" />
                Edit
              </v-btn>
              <v-btn elevation="2" @click="setDelete(item.jenis_cuti_id)">
                <v-icon class="mr-2" />
                Hapus
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  layout: 'templateAdmin',
  middleware: 'isAdmin',

  data () {
    return {
      JenisCuti: [],
      DataForm: {
        name: ''
      },
      dialog: false
    }
  },

  head () {
    return { title: 'List Jenis Cuti - Administrator' }
  },
  mounted () {
    this.getJenisCuti()
  },
  methods: {
    getJenisCuti () {
      this.$axios.get('/api/admin/jenis-cuti').then((response) => {
        this.JenisCuti = response.data.data
      })
    },
    closeModal () {
      this.dialog = false
      this.DataForm = {
        name: ''
      }
    },
    setDataForm (item) {
      this.dialog = true
      this.DataForm.jenis_cuti_id = item
      this.DataForm.name = this.JenisCuti.find(
        x => x.jenis_cuti_id === item
      ).name
    },
    setDelete (id) {
      this.$axios
        .delete('/api/admin/jenis-cuti/' + id + '/hapus')
        .then((response) => {
          this.getJenisCuti()
        })
    },
    simpanData () {
      this.$axios
        .post('/api/admin/jenis-cuti/simpan', this.DataForm)
        .then((response) => {
          this.getJenisCuti()
          this.dialog = false
          this.DataForm = {
            name: ''
          }
        })
    }
  }
}
</script>
