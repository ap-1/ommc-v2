<template>
  <header
    :class="top && 'is-transparent'"
    aria-label="main navigation"
    class="navbar is-fixed-top"
    role="navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item has-text-weight-bold"
        :data-content="top ? 'OMMC' : false"
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
        <a class="navbar-item" :data-content="top ? 'FAQs' : false"> FAQs </a>
      </div>

      <div class="navbar-end">
        <a v-if="top" class="navbar-item" data-content="Register"> Register </a>
        <a v-if="top" class="navbar-item" data-content="Login"> Login </a>

        <div v-else class="navbar-item">
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
  name: 'Navbar',
  props: {
    top: {
      type: Boolean,
      default() {
        return true
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
