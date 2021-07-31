<template>
  <div class="stories-page">

    <HeroBlock 
      :desktop-img="require('~/assets/images/stories/desktop/moon-of-appalacia.jpg')"
      :tablet-img="require('~/assets/images/stories/tablet/moon-of-appalacia.jpg')"
      :mobile-img="require('~/assets/images/stories/mobile/moon-of-appalacia.jpg')"
      headline="Last month's featured story"
      title="Hazy full moon of Appalachia"
      linkUrl="#"
      linkText="Read the story"
      author="John Appleseed"
      date-text="March 2nd 2020"
      cover
    >
      <p slot="text">The dissected plateau area, while not actually made up of geological mountains, 
        is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
        and while the ridges are not high, the terrain is extremely rugged.</p>
    </HeroBlock>

    <CoverGrid>
    
      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/mountains.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/mountains.jpg')"
        title="The Mountains"
        author="John Appleseed"
        link-url="#"
        link-text="Read Story"
        date-text="April 16th 2020"
      />


      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/cityscapes.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/cityscapes.jpg')"
        title="Sunset Cityscapes"
        author="Benjamin Cruz"
        link-url="#"
        link-text="Read Story"
        date-text="April 14th 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/18-days-voyage.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/18-days-voyage.jpg')"
        title="18 Days Voyage"
        author="Alexei Borodin"
        link-url="#"
        link-text="Read Story"
        date-text="April 11th 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/architecturals.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/architecturals.jpg')"
        title="Architecturals"
        author="Samantha Brooke"
        link-url="#"
        link-text="Read Story"
        date-text="April 9th 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/world-tour.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/world-tour.jpg')"
        title="World Tour 2019"
        author="Timothy Wagner"
        link-url="#"
        link-text="Read Story"
        date-text="April 7th 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/unforeseen-corners.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/unforeseen-corners.jpg')"
        title="Unforeseen Corners"
        author="William Malcolm"
        link-url="#"
        link-text="Read Story"
        date-text="April 3th 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/king-on-africa.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/king-on-africa.jpg')"
        title="King on Africa: Part II"
        author="Tim Hillenburg"
        link-url="#"
        link-text="Read Story"
        date-text="March 29th 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/trip-to-nowhere.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/trip-to-nowhere.jpg')"
        title="The Trip to Nowhere"
        author="Felicia Rourke"
        link-url="#"
        link-text="Read Story"
        date-text="March 21st 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/rage-of-the-sea.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/rage-of-the-sea.jpg')"
        title="Rage of The Sea"
        author="Mohammed Abdul"
        link-url="#"
        link-text="Read Story"
        date-text="March 19th 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/running-free.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/running-free.jpg')"
        title="Running Free"
        author="Michelle"
        link-url="#"
        link-text="Read Story"
        date-text="March 16th 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/behind-the-waves.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/behind-the-waves.jpg')"
        title="Behind the Waves"
        author="Lamarr Wilson"
        link-url="#"
        link-text="Read Story"
        date-text="March 11st 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/calm-waters.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/calm-waters.jpg')"
        title="Calm Waters"
        author="Samantha Brooke"
        link-url="#"
        link-text="Read Story"
        date-text="March 9st 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/milky-way.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/milky-way.jpg')"
        title="The Milky Way"
        author="Benjamin Cruz"
        link-url="#"
        link-text="Read Story"
        date-text="March 5st 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/dark-forest.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/dark-forest.jpg')"
        title="Night at The Dark Forest"
        author="Mohammed Abdul"
        link-url="#"
        link-text="Read Story"
        date-text="March 4th 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/somwarpet.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/somwarpet.jpg')"
        title="Somwarpet’s Beauty"
        author="Michelle"
        link-url="#"
        link-text="Read Story"
        date-text="March 1st 2020"
      />

      <CoverBlock 
        :mobile-img="require('~/assets/images/stories/mobile/land-of-dreams.jpg')"
        :desktop-img="require('~/assets/images/stories/desktop/land-of-dreams.jpg')"
        title="Land of Dreams"
        author="William Malcolm"
        link-url="#"
        link-text="Read Story"
        date-text="February 25th 2020"
      />

    </CoverGrid>

  </div>
</template>

<script>
import HeroBlock from '~/components/Block/HeroBlock'
import CoverBlock from '~/components/Block/CoverBlock'
import CoverGrid from '~/components/Layout/CoverGrid'

export default {
  components: {
    HeroBlock,
    CoverBlock,
    CoverGrid
  },
  head: {
    title: 'Stories - Photosnap'
  }
}
</script>
