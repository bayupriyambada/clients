<template>
  <div>
    <v-row class="my-4 ml-2">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template #activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Tambah </v-btn>
        </template>
        <form @submit.prevent="simpanData">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="DataForm.name" label="Name*" />
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="DataForm.unit_kerja_id"
                      label="Unit Kerja"
                      item-text="name"
                      item-value="unit_kerja_id"
                      :items="UnitKerja"
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
              <v-btn color="blue darken-1" text type="submit"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-dialog>
    </v-row>
    <v-simple-table>
      <template #default>
        <thead>
          <tr>
            <th class="text-left">No</th>
            <th class="text-left">Name</th>
            <th class="text-left">Unit Kerja</th>
            <th class="text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in Departemen" :key="item.departemen_id">
            <td>{{ item.nomor }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.get_unit_kerja.name }}</td>
            <td>
              <v-btn elevation="2" @click="setDataForm(item.departemen_id)">
                <v-icon class="mr-2" />
                Edit
              </v-btn>
              <v-btn elevation="2" @click="setDelete(item.departemen_id)">
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
  layout: "templateAdmin",
  middleware: "isAdmin",

  data() {
    return {
      Departemen: [],
      UnitKerja: [],
      DataForm: {
        name: "",
        unit_kerja_id: "",
      },
      dialog: false,
    };
  },

  head() {
    return { title: "List Jenis Cuti - Administrator" };
  },
  mounted() {
    this.getDepartemen();
    this.getUnitKerja();
  },
  methods: {
    getDepartemen() {
      this.$axios.get("/api/admin/departemen").then((response) => {
        this.Departemen = response.data.data;
      });
    },
    getUnitKerja() {
      this.$axios.get("/api/admin/unit-kerja").then((response) => {
        this.UnitKerja = response.data.data;
      });
    },
    closeModal() {
      this.dialog = false;
      this.DataForm = {
        name: "",
        unit_kerja_id: "",
      };
    },
    setDataForm(item) {
      this.dialog = true;
      this.DataForm.departemen_id = item;
      this.DataForm.name = this.Departemen.find(
        (x) => x.departemen_id === item
      ).name;
      this.DataForm.unit_kerja_id = this.Departemen.find(
        (x) => x.departemen_id === item
      ).unit_kerja_id;
    },
    setDelete(id) {
      this.$axios
        .delete("/api/admin/departemen/" + id + "/hapus")
        .then((response) => {
          this.getDepartemen();
        });
    },
    simpanData() {
      this.$axios
        .post("/api/admin/departemen/simpan", this.DataForm)
        .then((response) => {
          this.getDepartemen();
          this.dialog = false;
          this.DataForm = {
            name: "",
            unit_kerja_id: "",
          };
        });
    },
  },
};
</script>
