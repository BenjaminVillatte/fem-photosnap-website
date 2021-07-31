<template>
  <section class="features-compare">
    <h2>Compare</h2>

    <div class="features">
      
      <div class="head feature-item">
        <p class="title">The Features</p>
        <p class="plan plan-basic">Basic</p>
        <p class="plan plan-pro">Pro</p>
        <p class="plan plan-business">Business</p>
      </div>
    
      <div class="feature-item" v-for="(feature, index) in features" :key="'feature_'+index">
        <p class="title">{{ feature.name }}</p>
        <p class="plan plan-basic"><span class="plan-name">Basic</span><img v-if="feature.basic" src="~/assets/images/pricing/desktop/check.svg" alt="included"></p>
        <p class="plan plan-pro"><span class="plan-name">Pro</span><img v-if="feature.pro" src="~/assets/images/pricing/desktop/check.svg" alt="included"></p>
        <p class="plan plan-business"><span class="plan-name">Business</span><img v-if="feature.business" src="~/assets/images/pricing/desktop/check.svg" alt="included"></p>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        { name: 'Unlimited Story Posting', basic: true, pro: true, business: true },
        { name: 'Unlimited Photo Upload', basic: true, pro: true, business: true },
        { name: 'Embedding Custom Content', basic: false, pro: true, business: true },
        { name: 'Customize Metadata', basic: false, pro: true, business: true },
        { name: 'Advanced Metrics', basic: false, pro: false, business: true },
        { name: 'Photo Downloads', basic: false, pro: false, business: true },
        { name: 'Search Engine Indexing', basic: false, pro: false, business: true },
        { name: 'Custom Analytics', basic: false, pro: false, business: true }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.features-compare {
  margin-top: 64px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-top: 110px;
  }

  @media screen and (min-width: 1110px) {
    margin-top: 160px;
  }
  
  h2 {
    display: none;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .title,
  .feature-name {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    opacity: 1;
    letter-spacing: 1px;
  }

  .plan {
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;

    > * {
      display: block;
    }
  }

  .features {

    @media screen and (min-width: 730px) {
      max-width: 730px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .feature-item {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-bottom: solid 1px #dfdfdf;
      gap: 16px;
      padding: 25px 0;

      &.head {
        border-bottom: solid 1px #000000;

        .plan {
          display: none;
        }
      }

      .title {
        grid-column: 1 / span 3;
      }

      img {
        margin-top: 7px;
      }

      @media screen and (min-width: 768px) {
        grid-template-columns: 45% repeat(3, 1fr);

        &.head .plan {
          display: block;
          font-size: 12px;
          line-height: 16px;
          font-weight: 700;
          opacity: 1;
        }
        .title {
          grid-column: 1;
        }
        .plan {
          justify-self: center;
        }
        .plan-name {
          display: none;
        }
        img {
          margin-top: 0;
        }
      }
    }
  }
}
</style>