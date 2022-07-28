<template>
  <v-container>
    <v-timeline
      dense
      clipped
    >
      <v-timeline-item
        class="mb-4"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            This order was archived.
          </v-col>
          <v-col
            class="text-right"
            cols="5"
          >
            15:26 EDT
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            A $15.00 USD payment was processed on PayPal Express Checkout
          </v-col>
          <v-col
            class="text-right"
            cols="5"
          >
            15:25 EDT
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            John Leider placed this order on Online Store (checkout #1937432132572).
          </v-col>
          <v-col
            class="text-right"
            cols="5"
          >
            15:25 EDT
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
