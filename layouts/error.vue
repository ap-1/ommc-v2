<template>
  <div class="container">
    <div class="block">
      <p class="title has-text-white">{{ statusCode }}</p>
      <p class="subtitle has-text-white">{{ message }}</p>
    </div>

    <NuxtLink class="button is-light" to="/"> Home </NuxtLink>
    <a class="button is-light" @click="back"> Go Back </a>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },

    message() {
      return this.error.message || `<%= messages.client_error %>`
    },
  },
  methods: {
    back() {
      window.history.go(-1)
    },
  },

  head() {
    return {
      title: `OMMC - ${this.statusCode}`,
    }
  },
})
</script>
