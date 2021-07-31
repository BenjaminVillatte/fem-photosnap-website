<template>
  <article class="feature-block">
    <div class="icon">
      <img :src="imgSrc" alt="">
    </div>

    <div class="content">
      <p class="title">{{ title }}</p>

      <p v-if="text" class="text">{{ text }}</p>
      <slot v-else />

    </div>

  </article>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-block {
  padding: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    margin-bottom: 65px;
  }

  .title {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1110px) {
    padding: 0;
  }
}
</style>