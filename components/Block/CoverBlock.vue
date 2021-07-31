<template>
  <article class="cover-block">
    <a href="#">
      <div class="image">
        <picture>
          <source v-if="desktopImg" :srcset="desktopImg" 
            media="(min-width: 1110px)" />
          <source v-if="tabletImg || desktopImg" :srcset="tabletImg || desktopImg" 
            media="(min-width: 768px)" />
          <img :src="mobileImg" alt="">
        </picture>
      </div>
      <div class="content">
        <p v-if="dateText" class="text-small">{{ dateText }}</p>
        <h3>{{ title }}</h3>
        <p v-if="author" class="text-small">by {{ author }}</p>
        <div class="bottom">
          <NavLink 
            v-if="linkText && linkUrl" 
            :href="linkUrl"
            :text="linkText"
            wide
            light
            tag="p"
          />
        </div>
      </div>
    </a>
  </article>
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
      required: true
    },
    linkText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-block {
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0%) 0%, rgba(0, 0, 0, 66%) 100%);
  background-repeat: no-repeat;
  color: #ffffff;

  a {
    display: block;

    @media screen and (min-width: 768px) {
      &:hover {
        
        .content:after {
          content: '';
          position: absolute;
          bottom: -40px;
          left: -42px;
          right: -42px;
          height: 6px;
          background: linear-gradient(60deg, #FFC593 0%, #BC7198 20%, #5A77FF 60%, #5A77FF 100%);
        }
      }
    }
  }

  
  
  .image {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      display: block;
      mix-blend-mode: multiply;
    }
  }

  .content {
    position: absolute;
    left: 32px;
    right: 32px;
    bottom: 40px;

    @media screen and (min-width: 768px) {  
      left: 42px;
      right: 42px;
    }

    .bottom {
      margin-top: 16px;
      padding-top: 16px;
      border-top: solid 1px rgba(255, 255, 255, 25%);
    }
  }
}
</style>

<style lang="scss">
.cover-block {
  p {
    color: inherit;
    opacity: 1;
  }
}
</style>