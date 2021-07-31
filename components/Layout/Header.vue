<template>
  <header>
    <div class="container">
    
      <div class="logo">
        <nuxt-link to="/">
          <img src="~/assets/images/shared/desktop/logo.svg" alt="photosnap logo">
        </nuxt-link>
      </div>

      <div class="toggle" @click="toggleMenu">
        <img v-if="!opened" class="open" src="~/assets/images/shared/mobile/menu.svg" alt="open-menu">
        <img v-else class="close" src="~/assets/images/shared/mobile/close.svg" alt="close-menu">
      </div>

      <Nav :opened="opened" />

      <Button>Get an invite</Button>

    </div>
    
  </header>
</template>

<script>
import Nav from '~/components/Navigation/Nav'
import Button from '~/components/UI/Button'
import { mapGetters } from 'vuex'

export default {
  components: {
    Nav,
    Button
  },
  computed: {
    ...mapGetters({
      opened : 'navigation/isMenuOpened'
    })
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('navigation/toggle')
      document.body.classList.toggle('menu-opened')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: #ffffff;
  width: 100%;
  opacity: 1;
}

header .container {
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .toggle {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: inherit;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  button {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

}
</style>
