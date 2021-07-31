<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  props: {
    wide: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnStyle() {
      return {
        wide: this.wide,
        light: this.light
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  outline: none;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
  padding: 1em 1.5em;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #000000;
  border: 1px solid #000000;
  transition: background-color 0.2s, border 0.2s;

  &.light {
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }

  &:hover {
    color: #000000;
    background-color: #dfdfdf;
    border: 1px solid #dfdfdf;
  }

  &.wide {
    display: block;
    width: 100%;
  }
}
</style>