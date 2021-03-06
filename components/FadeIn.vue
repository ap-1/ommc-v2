<template>
  <section class="hero is-fullheight mt-6">
    <div :id="title" class="hero-body">
      <div class="container">
        <div
          class="columns is-centered is-flex fade-in"
          :class="inViewport && 'activated'"
        >
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'FadeIn',
  props: {
    title: {
      type: String,
      default() {
        return ''
      },
    },
  },

  data() {
    return {
      inViewport: false,
    }
  },

  mounted() {
    new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        this.inViewport = entry.isIntersecting
      })
    ).observe(this.$el)
  },
})
</script>

<style lang="scss" scoped>
// REVIEW: https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/
.fade-in {
  opacity: 0;
  visibility: hidden;
  transform: translateY(4vh);

  &.activated {
    animation: fade-in 0.75s ease-out 0.5s 1 normal forwards;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(4vh);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
}
</style>
