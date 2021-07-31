<template>
  <div class="home-page">

    <HeroBlock 
      :desktop-img="require('~/assets/images/home/desktop/create-and-share.jpg')"
      :tablet-img="require('~/assets/images/home/tablet/create-and-share.jpg')"
      :mobile-img="require('~/assets/images/home/mobile/create-and-share.jpg')"
      title="Create and share your photo Stories"
      linkUrl="#"
      linkText="Get started for free"
      dashed
    >
      <p slot="text">Photosnap is a platform for photographers and visual storytellers. We make it 
        easy to share photos, tell stories and connect with others.</p>
    </HeroBlock>

    <CaseBlock 
      :desktop-img="require('~/assets/images/home/desktop/beautiful-stories.jpg')"
      :tablet-img="require('~/assets/images/home/tablet/beautiful-stories.jpg')"
      :mobile-img="require('~/assets/images/home/mobile/beautiful-stories.jpg')"
      title="Beautiful stories every time"
      linkUrl="#"
      linkText="View the stories"
    >
      <p slot="text">We provide design templates to ensure your stories look terrific. Easily add 
        photos, text, embed maps and media from other networks. Then share your story 
        with everyone.</p>
    </CaseBlock>

    <CaseBlock 
      :desktop-img="require('~/assets/images/home/desktop/designed-for-everyone.jpg')"
      :tablet-img="require('~/assets/images/home/tablet/designed-for-everyone.jpg')"
      :mobile-img="require('~/assets/images/home/mobile/designed-for-everyone.jpg')"
      title="Designed for everyone"
      linkUrl="#"
      linkText="View the stories"
      inversed
    >
      <p slot="text">Photosnap can help you create stories that resonate with your audience.  Our 
        tool is designed for photographers of all levels, brands, businesses you name it.</p>
    </CaseBlock>
    
    <CoverGrid>
    
      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/mountains.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/mountains.jpg')"
        title="The Mountains"
        author="John Appleseed"
        link-url="#"
        link-text="Read Story"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/cityscapes.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/cityscapes.jpg')"
        title="Sunset Cityscapes"
        author="Benjamin Cruz"
        link-url="#"
        link-text="Read Story"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/18-days-voyage.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/18-days-voyage.jpg')"
        title="18 Days Voyage"
        author="Alexei Borodin"
        link-url="#"
        link-text="Read Story"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/architecturals.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/architecturals.jpg')"
        title="Architecturals"
        author="Samantha Brooke"
        link-url="#"
        link-text="Read Story"
      />

    </CoverGrid>

    <section class="features">

      <FeaturesGrid asLine>

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

      </FeaturesGrid>

    </section>
    
  </div>
</template>

<script>
import HeroBlock from '~/components/Block/HeroBlock'
import CaseBlock from '~/components/Block/CaseBlock'
import CoverBlock from '~/components/Block/CoverBlock'
import FeatureBlock from '~/components/Block/FeatureBlock'
import CoverGrid from '~/components/Layout/CoverGrid'
import FeaturesGrid from '~/components/Layout/FeaturesGrid'

export default {
  components: {
    HeroBlock,
    CaseBlock,
    CoverBlock,
    FeatureBlock,
    CoverGrid,
    FeaturesGrid
  },
  head: {
    title: 'Welcome on Photosnap website'
  }
}
</script>

<style lang="scss" scoped>
.features {
  margin: 50px 0;
}
</style>