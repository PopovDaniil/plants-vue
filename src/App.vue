<template>
  <site-header/>
</template>

<script>
import "./assets/styles/w3-theme-green.css"
import "./assets/styles/w3.css"

import SiteHeader from './components/SiteHeader.vue'

export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>

<style>
img {
    min-width: 40px;
}
img.small {
    max-width: 150px;
}
</style>
