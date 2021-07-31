<template>
  <div class="features-page">

    <HeroBlock 
      :desktop-img="require('~/assets/images/features/desktop/hero.jpg')"
      :tablet-img="require('~/assets/images/features/tablet/hero.jpg')"
      :mobile-img="require('~/assets/images/features/mobile/hero.jpg')"
      title="Features"
      dashed
    >
      <p slot="text">We make sure all of our features are designed to be loved by every aspiring and even 
        professional photograpers who wanted to share their stories.</p>
    </HeroBlock>
    
    <section class="features">

      <FeaturesGrid>
      
        <FeatureBlock 
          :img-src="require('~/assets/images/features/desktop/responsive.svg')"
          title="100% Responsive"
        >
          <p>No matter which the device you’re on, our site is fully responsive and stories 
            look beautiful on any screen.</p>
        </FeatureBlock>

        <FeatureBlock 
          :img-src="require('~/assets/images/features/desktop/no-limit.svg')"
          title="No Photo Upload Limit"
        >
          <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and 
            share all of your stories in one go.</p>
        </FeatureBlock>
        
        <FeatureBlock 
          :img-src="require('~/assets/images/features/desktop/embed.svg')"
          title="Available to Embed"
        >
          <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
            Google Maps, and more.</p>
        </FeatureBlock>

        <FeatureBlock 
          :img-src="require('~/assets/images/features/desktop/custom-domain.svg')"
          title="Custom Domain"
        >
          <p>With Photosnap subscriptions you can host your stories on your own domain. You can 
            also remove our branding!</p>
        </FeatureBlock>

        <FeatureBlock 
          :img-src="require('~/assets/images/features/desktop/boost-exposure.svg')"
          title="Boost Your Exposure"
        >
          <p>Users that viewed your story or gallery can easily get notifed of new and featured 
            stories with our built in mailing list.</p>
        </FeatureBlock>   

        <FeatureBlock 
          :img-src="require('~/assets/images/features/desktop/drag-drop.svg')"
          title="Drag & Drop Image"
        >
          <p>Easily drag and drop your image and get beautiful shots everytime. No over the top 
            tooling to add friction to creating stories.</p>
        </FeatureBlock>

      </FeaturesGrid>

    </section>

    <BetaBlock />

  </div>
</template>

<script>
import HeroBlock from '~/components/Block/HeroBlock'
import FeatureBlock from '~/components/Block/FeatureBlock'
import BetaBlock from '~/components/Block/BetaBlock'
import FeaturesGrid from '~/components/Layout/FeaturesGrid'

export default {
  components: {
    HeroBlock,
    FeatureBlock,
    BetaBlock,
    FeaturesGrid
  },
  head: {
    title: 'Features - Photosnap'
  }
}
</script>

<style lang="scss" scoped>
.features {
  margin: 64px 0 96px 0;
}
</style>