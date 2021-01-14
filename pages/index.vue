<template>
  <main>
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

    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-head">
        <navbar :embed="true" />
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="brand is-uppercase has-text-weight-light">ommc</p>
          <p class="subtitle is-capitalized is-size-4 has-text-weight-light">
            online monmouth math competition
          </p>
        </div>
      </div>

      <div class="hero-foot is-flex is-justify-content-center">
        <div class="down-arrow">
          <a class="down-icon material-icons">expand_more</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import navbar from '../components/navbar.vue'

export default Vue.extend({
  name: 'Home',
  layout: 'landing',
  components: { navbar },
})
</script>

<style lang="scss" scoped>
$brand-spacing: 3rem;

#particles {
  width: 100vw;
  height: 100vh;
  position: fixed;
}

canvas {
  display: block;
}

.container {
  margin-top: -3.25rem !important;
}

.brand {
  margin: 0;
  margin-left: calc(#{$brand-spacing} / 2);
  margin-right: calc(#{$brand-spacing} / -2);

  font-size: 8rem;
  text-shadow: 0 5px 10px #212121;
  letter-spacing: $brand-spacing;
}

.down-arrow {
  width: 40px;
  height: 40px;
  margin-top: -6rem;
  border-radius: 12px;
  background-color: white;
  transform: rotate(45deg);
}

.down-icon {
  margin-top: 0.5rem;
  margin-left: 0.5rem;

  color: black;
  transform: rotate(-45deg);
  animation: up-down 1s infinite alternate;
}

@keyframes up-down {
  from {
    transform: rotate(-45deg) translateY(-2px);
  }
  to {
    transform: rotate(-45deg) translateY(6px);
  }
}
</style>
