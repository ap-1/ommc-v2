<template>
  <header
    class="navbar is-transparent"
    aria-label="main navigation"
    role="navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item has-text-weight-bold"
        :data-content="embed ? 'OMMC' : false"
        href="/"
      >
        OMMC
      </a>
      <a
        role="button"
        data-target="nav"
        aria-label="menu"
        aria-expanded="false"
        class="navbar-burger"
        :class="isActive && 'is-active'"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="nav" class="navbar-menu" :class="isActive && 'is-active'">
      <div class="navbar-start">
        <a class="navbar-item" :data-content="embed ? 'FAQs' : false"> FAQs </a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" data-content="Register" v-if="embed">
          Register
        </a>
        <a class="navbar-item" data-content="Login" v-if="embed"> Login </a>

        <div class="navbar-item" v-else>
          <div class="buttons">
            <a class="button is-primary has-text-weight-bold"> Register </a>
            <a class="button is-light"> Login </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

interface IState {
  isActive: boolean
}

export default Vue.extend({
  name: 'navbar',
  props: {
    embed: {
      type: Boolean,
      default() {
        return false
      },
    },
  },

  data(): IState {
    return {
      isActive: false,
    }
  },
})
</script>
