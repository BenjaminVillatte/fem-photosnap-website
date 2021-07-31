<template>
  <ul class="nav-menu" :class="{ 'light': light, 'text-small': textSmall }">
    <li 
      v-for="(item, index) in items" 
      :key="index">
      <nuxt-link :to="item.to">{{ item.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false
    },
    textSmall: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {

  @media screen and (min-width: 768px) {
    li {
      display: inline-block;
      margin: 0 19px;
      &:first-child {
        margin-left: 0;
      }
    }
  }

  a {
    display: block;
    text-decoration: none;
    color: #000000;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 20px;
    font-weight: 700;
    padding: .75em 0;
    
    @media screen and (min-width: 1110px) {
      &:hover {
        opacity: .3;
      }
    }
  }

  &.text-small {
    a {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &.light {
    a {
      color: #ffffff;
    }
  }
}
</style>