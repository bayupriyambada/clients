<template>
  <div>
    <v-row justify="center" align="center" class="mt-5">
      <v-card class="px-5 py-4">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email" />
              </v-col>

              <v-col cols="12">
                <v-text-field label="password" />
              </v-col>
              <v-btn>Masuk</v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
