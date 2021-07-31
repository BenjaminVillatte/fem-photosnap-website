<template>
  <section class="case-block" :class="{ inversed: inversed }">

    <div class="image">
      <picture>
        <source v-if="desktopImg" :srcset="desktopImg" 
          media="(min-width: 1110px)" />
        <source v-if="tabletImg" :srcset="tabletImg" 
          media="(min-width: 768px)" />
        <img :src="mobileImg" alt="">
      </picture>
    </div>

    <div class="text-block">
      <h2 v-if="title">{{ title }}</h2>
      <slot v-else name="title" />
      
      <p v-if="text">{{ text }}</p>
      <slot v-else name="text" />

      <NavLink :href="linkUrl" :text="linkText" />
    </div>

  </section>
</template>

<script>
import NavLink from '~/components/Navigation/NavLink'

export default {
  components: {
    NavLink
  },
  props: {
    mobileImg: {
      type: String,
      required: true
    },
    tabletImg: {
      type: String,
      default: null
    },
    desktopImg: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: null
    },
    linkUrl: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
    inversed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.case-block {

  .image {
    width: 100%;

    img {
      display: block;
    }
  }
  .text-block {
    padding: 40px 32px;

    p {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;

    &.inversed {
      flex-direction: row-reverse;
    }

    .image {
      flex-basis: 33%;
    }

    .text-block {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px 54px;
    }
  }

  @media screen and (min-width: 768px) {
    .text-block {
      padding: 40px 110px;
    }
  }
}
</style>