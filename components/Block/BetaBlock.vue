<template>
  <div class="beta">
    <p>We're in Beta. Get your invite today!</p>
    
    <NavLink 
      href="#"
      text="Get an Invite"
      light
    />
  </div>
</template>

<script>
import NavLink from '~/components/Navigation/NavLink'

export default {
  components: {
    NavLink
  }
}
</script>

<style lang="scss" scoped>
.beta {
  position: relative;
  background: url('~assets/images/shared/mobile/bg-beta.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  padding: 62px 32px;

  @media screen and (min-width: 768px) {
    background: url('~assets/images/shared/tablet/bg-beta.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 68px 40px;
  }

  @media screen and (min-width: 1110px) {
    background: url('~assets/images/shared/desktop/bg-beta.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 68px 165px;
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
      top: 0;
      bottom: 0;
      width: 6px;
      height: auto;
      background: linear-gradient(10deg, #FFC593 0%, #BC7198 20%, #5A77FF 60%, #5A77FF 100%);
    }
  }

  p {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    margin: 14px 0;
    text-transform: uppercase;
    color: inherit;
    opacity: 1;
    max-width: 290px;
  }
}
</style>