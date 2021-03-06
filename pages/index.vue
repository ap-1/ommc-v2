<template>
  <main>
    <section class="hero is-dark is-bold is-fullheight mb-6">
      <div class="hero-head">
        <Navbar />
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <!--
            <p class="brand is-uppercase has-text-weight-light" no-select>ommc</p>
            <p
              class="subtitle is-capitalized is-size-4 has-text-weight-light"
              no-select
            >
              online monmouth math competition
            </p>
          -->
          <img src="~/assets/icon.png" alt="OMMC" />
        </div>
      </div>

      <div class="hero-foot is-flex is-justify-content-center">
        <div class="down-arrow">
          <a class="down-icon material-icons" href="#intro">expand_more</a>
        </div>
      </div>
    </section>

    <FadeIn title="intro">
      <template #content>
        <div class="columns is-centered">
          <div class="column">
            <p class="title has-text-white has-text-weight-light">
              Ready to join?
            </p>
            <p class="subtitle has-text-white is-size-4 has-text-weight-light">
              Interact with the community and form teams on our discord.
            </p>
          </div>

          <div class="column">
            <iframe
              width="350"
              height="500"
              frameborder="0"
              class="is-pulled-right"
              allowtransparency="true"
              src="//discord.com/widget?id=796756256022200350&amp;theme=dark"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            >
            </iframe>
          </div>
        </div>
      </template>
    </FadeIn>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import Navbar from '~/components/Navbar.vue'
import FadeIn from '~/components/FadeIn.vue'

export default Vue.extend({
  name: 'Home',
  layout: 'landing',
  components: { Navbar, FadeIn },
})
</script>

<style lang="scss" src="../assets/css/landing.scss" scoped></style>
