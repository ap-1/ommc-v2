<template>
  <main>
    <client-only>
      <Particles
        id="particles"
        :options="{
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0.2,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'top-right',
              random: true,
              straight: true,
              out_mode: 'out',
              bounce: false,
            },
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 125,
                line_linked: {
                  opacity: 1,
                },
              },
              repulse: {
                distance: 225,
                duration: 0.4,
              },
            },
          },
          retina_detect: true,
        }"
      />
    </client-only>

    <section class="hero is-primary is-bold is-fullheight mb-6">
      <div class="hero-head">
        <navbar :id="id" :embed="true" />
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="brand is-uppercase has-text-weight-light" no-select>ommc</p>
          <p
            class="subtitle is-capitalized is-size-4 has-text-weight-light"
            no-select
          >
            online monmouth math competition
          </p>
        </div>
      </div>

      <div class="hero-foot is-flex is-justify-content-center">
        <div class="down-arrow">
          <a class="down-icon material-icons" href="#intro">expand_more</a>
        </div>
      </div>
    </section>

    <fade-in title="intro">
      <template #content>
        <div class="column is-half">
          <p class="title has-text-weight-light">Ready to join?</p>
          <p class="subtitle is-size-4 has-text-weight-light">
            Interact with the community and form teams on our discord.
          </p>
        </div>

        <div class="column is-half">
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
      </template>
    </fade-in>
  </main>
</template>

<script>
import Vue from 'vue'

import navbar from '../components/navbar.vue'
import fadeIn from '../components/fade-in.vue'

export default Vue.extend({
  name: 'Home',
  layout: 'landing',
  components: { navbar, fadeIn },

  data() {
    return {
      id: 'prelim-nav',
    }
  },
})
</script>

<style lang="scss" src="../assets/css/landing.scss" scoped></style>
