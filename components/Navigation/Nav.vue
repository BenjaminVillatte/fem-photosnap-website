<template>
  <nav :class="{opened: opened}">

    <NavMenu :items="navItems" />

    <div class="divider"/>

    <Button wide>Get an invite</Button>

  </nav>
</template>

<script>
import NavMenu from '~/components/Navigation/NavMenu'
import Button from '~/components/UI/Button'

export default {
  components: {
    NavMenu,
    Button
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navItems: [
        { to: '/stories', name: 'Stories' },
        { to: '/features', name: 'Features' },
        { to: '/pricing', name: 'Pricing' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: none;
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  background: #ffffff;
  padding: 16px 32px 32px 32px;
  text-align: center;

  &.opened {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: block;
    position: initial;
    padding: 0;
    background: none;
  }

  .divider {
    height: 1px;
    border: solid 1px #000000;
    opacity: .15;
    margin: 8px 0 20px;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .button {
    @media screen and (min-width: 768px) {
      display: none !important;
    }
  }
}
</style>