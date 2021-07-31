<template>
  <div class="features-grid" :class="{ 'as-line': asLine}">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    asLine: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.features-grid {
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    max-width: 690px;
    margin-left: auto;
    margin-right: auto;
    &:not(.as-line) {
      grid-template-columns: repeat(2, 1fr);
    }
    &.as-line {
      grid-template-columns: 1fr;
    }
    
  }
  @media screen and (min-width: 1110px) {
    gap: 110px 30px;
    max-width: 1100px;

    &:not(.as-line),
    &.as-line {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>