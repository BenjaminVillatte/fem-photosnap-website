<template>
  <section class="hero-block" :class="{ cover: cover }">

    <div class="image">
        <picture>
          <source v-if="desktopImg" :srcset="desktopImg" 
            media="(min-width: 1110px)" />
          <source v-if="tabletImg" :srcset="tabletImg" 
            media="(min-width: 768px)" />
          <img :src="mobileImg" alt="">
        </picture>
      </div>

    <div class="hero-text" :class="{ 'dashed': dashed }">
      <p v-if="headline" class="headline text-xsmall">{{ headline }}</p>
      <h1 v-if="title">{{ title }}</h1>
      <slot v-else name="title" />

      <p v-if="author || dateText" class="meta text-small">
        <span v-if="dateText" class="date">{{ dateText }}</span>
        <span v-if="author" class="author">by {{ author }}</span>
      </p>

      <p v-if="text">{{ text }}</p>
      <slot v-else name="text" />

      <NavLink v-if="linkText" :href="linkUrl" :text="linkText" light />
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
    headline: {
      type: String,
      default: null
    },
    author: {
      type: String,
      default: null
    },
    dateText: {
      type: String,
      default: null
    },
    linkUrl: {
      type: String,
      default: null
    },
    linkText: {
      type: String,
     default: null
    },
    dashed: {
      type: Boolean,
      default: false
    },
    cover: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-block {
  
  .image {
    width: 100%;

    img {
      display: block;
      width: 100%;

      @media screen and (min-width: 768px) {
        width: auto;
      }
    }
  }

  .hero-text {
    background-color: #000000;
    color: #ffffff;
    padding: 48px 32px;

    @media screen and (min-width: 768px) {
      padding: 0 0 0 48px;
    }

    @media screen and (min-width: 1110px) {
      padding: 0 0 0 110px;
    }

    &.dashed {
      position: relative;
      padding: 72px 32px;

      @media screen and (min-width: 768px) {
        padding: 0 48px;
      }

      @media screen and (min-width: 1110px) {
        padding: 0 110px;
      }

      &:before {
        position: absolute;
        content: "";
        top:0;
        left: 32px;
        height: 6px;
        width: 128px;
        background: linear-gradient(60deg, #FFC593 0%, #BC7198 20%, #5A77FF 60%, #5A77FF 100%);
      
        @media screen and (min-width: 768px) {
          left: 0;
          top: 25%;
          bottom: 25%;
          height: 50%;
          width: 6px;
          height: auto;
          background: linear-gradient(10deg, #FFC593 0%, #BC7198 20%, #5A77FF 60%, #5A77FF 100%);
        }

      }
    }

    p {
      color: #ffffff;
      opacity: .6;
      margin-bottom: 30px;

      &.headline {
        margin-bottom: 0;
        opacity: 1;
        text-transform: uppercase;
        font-weight: bold;
      }

      &.author span {
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;

    .image {
      flex-basis: 33%;
    }

    .hero-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    &.cover {
      display: block;
      position: relative;

      .hero-text {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 33%;
        background-color: unset;
      }
    }
  }

  @media screen and (min-width: 1110px) {
    
    &.cover {
      .hero-text {
        right: 66%;
      }
    }
  }
}
</style>