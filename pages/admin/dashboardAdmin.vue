<template>
  <div class="my-2">
    <v-container>
      <v-card class="my-5 px-5 py-5">
        <h3>Selamat Datang {{ user.name }} - {{ user.email }}</h3>
      </v-card>

      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ Cuti }}</h2>
              Total Cuti
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ JenisCuti }}</h2>
              Total Jenis Cuti
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ Lembur }}</h2>
              Total Lembur
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ UnitKerja }}</h2>
              Total Unit Kerja
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ Departemen }}</h2>
              Total Departemen
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ Perizinan }}</h2>
              Total Perizinan
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ Sdm }}</h2>
              Total Sdm
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ Pegawai }}</h2>
              Total Pegawai
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ Absensi }}</h2>
              Total Absensi
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-2" outlined tile>
            <v-col>
              <h2>{{ Gaji }}</h2>
              Total Gaji
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <v-card class="my-4">
        <v-card-title>Todo Log</v-card-title>
        <LogActivity />
      </v-card>
    </v-container>
  </div>
</template>
<script>
import LogActivity from '~/components/admin/LogActivity.vue'
export default {
  components: { LogActivity },
  layout: 'templateAdmin',
  middleware: 'isAdmin',
  data () {
    return {
      UnitKerja: [],
      JenisCuti: [],
      Cuti: [],
      Lembur: [],
      Departemen: [],
      Perizinan: [],
      Absensi: [],
      Sdm: [],
      Pegawai: [],
      Gaji: []
    }
  },
  head () {
    return {
      title: 'Dashboard - Administrator'
    }
  },
  computed: {
    user () {
      return this.$auth.user
    }
  },
  mounted () {
    this.getUnitKerja()
    this.getUnitCuti()
    this.getCuti()
    this.getLembur()
    this.getDepartemen()
    this.getPerizinan()
    this.getAbsensi()
    this.getSdm()
    this.getPegawai()
    this.getGaji()
  },
  methods: {
    getUnitKerja () {
      this.$axios
        .get('/api/admin/dashboard/count-unit-kerja')
        .then((response) => {
          this.UnitKerja = response.data.data
        })
    },
    getUnitCuti () {
      this.$axios
        .get('/api/admin/dashboard/count-jenis-cuti')
        .then((response) => {
          this.JenisCuti = response.data.data
        })
    },
    getCuti () {
      this.$axios.get('/api/admin/dashboard/count-cuti').then((response) => {
        this.Cuti = response.data.data
      })
    },
    getLembur () {
      this.$axios.get('/api/admin/dashboard/count-lembur').then((response) => {
        this.Lembur = response.data.data
      })
    },
    getDepartemen () {
      this.$axios
        .get('/api/admin/dashboard/count-departemen')
        .then((response) => {
          this.Departemen = response.data.data
        })
    },
    getPerizinan () {
      this.$axios.get('/api/admin/dashboard/count-perizinan').then((response) => {
        this.Perizinan = response.data.data
      })
    },
    getSdm () {
      this.$axios.get('/api/admin/dashboard/count-sdm').then((response) => {
        this.Sdm = response.data.data
      })
    },
    getAbsensi () {
      this.$axios.get('/api/admin/dashboard/count-absensi').then((response) => {
        this.Absensi = response.data.data
      })
    },
    getPegawai () {
      this.$axios.get('/api/admin/dashboard/count-pegawai').then((response) => {
        this.Pegawai = response.data.data
      })
    },
    getGaji () {
      this.$axios.get('/api/admin/dashboard/count-gaji').then((response) => {
        this.Gaji = response.data.data
      })
    }
  }
}
</script>
