<template>
  <footer>

    <div class="container">
    
      <div class="logo">
        <img src="~/assets/images/shared/desktop/logo-white.svg" alt="logo" />
      </div>

      <SocialLinks class="social-links"/>

      <NavMenu :items="navItems" light text-small class="menu" />

      <NavLink text="Get an invite" light center class="link" />

      <p class="copyright">Copyright {{ new Date().getFullYear() }}. All Rights Reserved</p>

    </div>
  </footer>
</template>

<script>
import NavMenu from '~/components/Navigation/NavMenu'
import SocialLinks from '~/components/SocialLinks'
import NavLink from '~/components/Navigation/NavLink'

export default {
  components: {
    NavMenu,
    SocialLinks,
    NavLink
  },
  data() {
    return {
      navItems: [
        { to: '/', name: 'Home' },
        { to: '/stories', name: 'Stories' },
        { to: '/features', name: 'Features' },
        { to: '/pricing', name: 'Pricing' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: #000000;
  color: #ffffff;
}
footer .container {
  padding: 56px 32px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media screen and (min-width: 768px) {
    padding: 64px 40px;
    grid-template-areas: "logo link"
                         "menu menu"
                         "links copy";

    .logo {
      grid-area: logo;
      justify-self: self-start;
    } 
    .link {
      grid-area: link;
      justify-self: self-end;
    }
    .social-links {
      grid-area: links;
      justify-self: self-start;
    }
    .menu {
      grid-area: menu;
      justify-self: self-start;
    }
    .copyright {
      grid-area: copy;
      justify-self: self-end;
    }
  }

  @media screen and (min-width: 1100px) {
    padding: 64px 0;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "logo menu link"
                         "links menu copy";

    .logo {
      grid-area: logo;
      justify-self: self-start;
    } 
    .link {
      grid-area: link;
      justify-self: self-end;
    }
    .social-links {
      grid-area: links;
      justify-self: self-start;
    }
    .menu {
      grid-area: menu;
      justify-self: self-start;
      align-self: flex-start;
      padding: 0 68px;
    }
    .copyright {
      grid-area: copy;
      justify-self: self-end;
    }
  }

  .menu {
    margin-top: 16px;
    margin-bottom: 90px;
    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: 48px;
    }
     @media screen and (min-width: 1110px) {
      margin-bottom: 0;
    }
  }

  .copyright {
    color: #ffffff;
  }
}
</style>

<style lang="scss">
@media screen and (min-width: 1110px) {
  footer .nav-menu li {
    display: block !important;
    margin: 0 !important;
    text-align: left;

    &:first-child a {
      padding-top: 0;
    }
  }
}

</style>