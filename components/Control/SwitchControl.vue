<template>
  <div class="switch-control" v-bind="$attrs">
    <div class="text off" :class="{ current: !checked }">{{ off }}</div>
      <label class="switch">
        <input type="checkbox" 
          value="1" 
          v-model="checked" 
          @change="onChange" />
        <span class="slider"></span>
      </label>
      <div class="text on" :class="{ current: checked }">{{ on }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  },
  props: {
    off: {
      type: String,
      required: true
    },
    on: {
      type: String,
      required: true
    },
    alignment: {
      type: String,
      default: 'flex-start'
    }
  },
  methods: {
    onChange() {
      this.$emit('change', this.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-control {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  &.flex-end {
    justify-content: flex-end;
  }

  &.space-around {
    justify-content: space-around;
  }

  &.space-evenly {
    justify-content: space-evenly;
  }
  
  &.center {
    justify-content: center;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 3.5em;
    min-width: 3.5em;
    height: 2em;
    margin: 0 0.4em;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      display: inline-block;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #DFDFDF;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 34px;
    }
    .slider:hover {
      background-color: #DFDFDF;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 1.4em;
      width: 1.4em;
      left: 4px;
      bottom: 4px;
      background-color: #000000;
      -webkit-transition: .2s;
      transition: .2s;
      border-radius: 50%;
    }
    input:checked + .slider {
      background-color: #DFDFDF;
    }
    input:focus + .slider {
      box-shadow: 0 0 1px #DFDFDF;
    }
    input:checked + .slider:before {
      -webkit-transform: translateX(calc(3.5em - 1.4em - 8px));
      -ms-transform: translateX(calc(3.5em - 1.4em - 8px));
      transform: translateX(calc(3.5em - 1.4em - 8px));
      background-color: #000000;
    }
  }
  .text {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    opacity: .6;
    transition: opacity ease-in-out .2s;
    &.off {
      margin-right: 1.5em;
    }
    &.on {
      margin-left: 1.5em;
    }
    &.current {
      opacity: 1;
    }
  }
}

</style>