<template>
  <div>
    <p v-if="tag == 'p'" class="nav-link" :class="{ 'wide': wide, 'center': center, 'light': light }">
      <span>{{ text }}</span>
      <img v-if="!light" src="~/assets/images/shared/desktop/arrow.svg" alt="">
      <img v-if="light" src="~/assets/images/shared/desktop/arrow-white.svg" alt="">
    </p>
    <a v-else :href="href" class="nav-link" :class="{ 'wide': wide, 'center': center, 'light': light }">
      <span>{{ text }}</span>
      <img v-if="!light" src="~/assets/images/shared/desktop/arrow.svg" alt="">
      <img v-if="light" src="~/assets/images/shared/desktop/arrow-white.svg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    wide: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      required: true
    },
    light: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'a'
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  a.nav-link:hover{
    text-decoration: underline;
  }
}

.nav-link {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #000000;

  span {
    margin-right: 16px;
  }

  &.light {
    color: #ffffff;
  }

  &.wide {
    display: flex;
    justify-content: space-between;
  }

  &.center {
    justify-content: center;
  }
}
</style>