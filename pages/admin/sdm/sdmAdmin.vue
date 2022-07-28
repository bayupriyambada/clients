<template>
  <div>
    <v-row class="my-4 ml-2">
      <v-dialog v-model="detail" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Detail Sdm
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider />
        </v-card>
      </v-dialog>

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
                      label="Name*"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="DataForm.email"
                      label="Email*"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="DataForm.password"
                      label="Password*"
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
              Email
            </th>
            <th class="text-left">
              Phone
            </th>
            <th class="text-left">
              Active
            </th>
            <th class="text-left">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in Sdm" :key="item.sdm_iid">
            <td>{{ item.nomor }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.active_account }}</td>
            <td>
              <v-btn elevation="2" @click="setDetailForm(item.sdm_iid)">
                <v-icon class="mr-2" />
                Detail
              </v-btn>
              <!-- <v-btn elevation="2" @click="setDataForm(item.sdm_iid)">
                <v-icon class="mr-2" />
                Edit
              </v-btn> -->
              <v-btn elevation="2" @click="setDelete(item.sdm_iid)">
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
import { throws } from 'assert'

export default {
  layout: 'templateAdmin',
  middleware: 'isAdmin',

  data () {
    return {
      Sdm: [],
      DataForm: {
        name: ''
      },
      dialog: false,
      detail: false
    }
  },

  head () {
    return { title: 'Account Sdm - Administrator' }
  },
  mounted () {
    this.getSdm()
  },
  methods: {
    getSdm () {
      this.$axios.get('/api/admin/sdm').then((response) => {
        this.Sdm = response.data.data
      })
    },
    closeModal () {
      this.dialog = false
      this.DataForm = {
        name: ''
      }
    },
    setDetailForm (item) {
      this.detail = true
    },
    setDataForm (item) {
      this.dialog = true
      this.DataForm.jenis_cuti_id = item
      this.DataForm.name = this.Sdm.find(x => x.jenis_cuti_id === item).name
    },
    setDelete (id) {
      this.$axios
        .delete('/api/admin/jenis-cuti/' + id + '/hapus')
        .then((response) => {
          this.getSdm()
        })
    },
    simpanData () {
      this.$axios
        .post('/api/admin/jenis-cuti/simpan', this.DataForm)
        .then((response) => {
          this.getSdm()
          this.dialog = false
          this.DataForm = {
            name: ''
          }
        })
    }
  }
}
</script>
