<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import navbar from '../components/navbar.vue'

export default {
  components: { navbar },
}
</script>
