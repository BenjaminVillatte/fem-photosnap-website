<template>
  <div class="pricing-page">
    <HeroBlock 
      :desktop-img="require('~/assets/images/pricing/desktop/hero.jpg')"
      :tablet-img="require('~/assets/images/pricing/tablet/hero.jpg')"
      :mobile-img="require('~/assets/images/pricing/mobile/hero.jpg')"
      title="Pricing"
      dashed
    >
      <p slot="text">Create a your stories, Photosnap is a platform for photographers and visual storytellers. 
        It’s the simple way to create and share your photos.</p>
    </HeroBlock>

    <div class="prices">
      
      <PricePlans />

      <FeaturesCompare />

    </div>

    <BetaBlock />

  </div>
</template>

<script>
import HeroBlock from '~/components/Block/HeroBlock'
import BetaBlock from '~/components/Block/BetaBlock'
import FeaturesCompare from '~/components/Pricing/FeaturesCompare'
import PricePlans from '~/components/Pricing/PricePlans'

export default {
  components: {
    HeroBlock,
    BetaBlock,
    FeaturesCompare,
    PricePlans
  },
  head: {
    title: 'Pricing - Photosnap'
  }
}
</script>

<style lang="scss" scoped>
.prices {
  padding: 64px 32px;
}
</style>