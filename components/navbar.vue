<template>
  <nav
    role="navigation"
    aria-label="main navigation"
    class="navbar is-transparent"
  >
    <div class="navbar-brand">
      <a class="navbar-item has-text-weight-bold" href="/" data-content="OMMC">
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
        <a class="navbar-item" data-content="FAQs"> FAQs </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary has-text-weight-bold"> Register </a>
            <a class="button is-light"> Login </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

interface IState {
  isActive: boolean
}

export default Vue.extend({
  name: 'Navbar',

  data(): IState {
    return {
      isActive: false,
    }
  },
})
</script>
