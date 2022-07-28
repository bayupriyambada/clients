<template>
  <span id="clock" onload="currentTime()" />
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.currentTime()
  },
  methods: {
    currentTime () {
      const date = new Date()
      this.hh = date.getHours()
      this.mm = date.getMinutes()
      this.ss = date.getSeconds()
      this.session = 'AM'
      if (this.hh === 0) {
        this.hh = 12
      }
      if (this.hh > 12) {
        this.session = 'PM'
      }
      this.hh = this.hh < 10 ? '0' + this.hh : this.hh
      this.mm = this.mm < 10 ? '0' + this.mm : this.mm
      this.ss = this.ss < 10 ? '0' + this.ss : this.ss

      this.time = this.hh + ':' + this.mm + ':' + this.ss + ' ' + this.session
      document.getElementById('clock').innerText = this.time
      setTimeout(() => {
        this.currentTime()
      }, 1000)
    }
  }
}
</script>
