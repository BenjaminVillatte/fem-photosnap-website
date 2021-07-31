<template>
  <article class="plan-card" :class="{ recommended: recommended }">

    <div class="infos">
      <h2 class="name">{{ plan.name }}</h2>
      <p class="desc">{{ plan.desc}}</p>
    </div>

    <div class="pricing">
      <p class="price" v-if="billing === 'monthly'">{{ plan.monthlyPrice }}</p>
      <p class="price" v-else>{{ plan.yearlyPrice }}</p>

      <p class="billing">{{ billingText }}</p>
    </div>

    <div class="action">
      <Button @click="$emit('choose', plan)" wide :light="recommended">Pick Plan</Button>
    </div>

  </article>
</template>

<script>
import Button from '~/components/UI/Button'

export default {
  components: {
    Button
  },
  props: {
    plan: {
      type: Object,
      required: true
    },
    recommended: {
      type: Boolean,
      default: false
    },
    billing: {
      type: String,
      required: true
    }
  },
  computed: {
    billingText() {
      return 'per ' + (this.billing === 'yearly' ? 'year' : 'month')
    }
  }
}
</script>

<style lang="scss" scoped>
.plan-card {
  padding: 48px 22px;
  text-align: center;
  background-color: #F5F5F5;
  display: grid;
  grid-template-columns: 1fr;
  gap: 45px;

  @media screen and (min-width: 768px) and (max-width: 1110px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    padding: 40px;
    h2 {
      margin-top: 0;
    }
    .infos {
      text-align: left;
    }
    .pricing {
      justify-self: flex-end;
      text-align: right;
    }
    
  }

  @media screen and (min-width: 1110px) {
    width: 350px;
  }

  &.recommended {
    position: relative;
    background-color: #000000;
    color: #ffffff;

    @media screen and (min-width: 1110px) {
      padding-top: 75px;
      padding-bottom: 75px;
    }

    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(60deg, #FFC593 0%, #BC7198 20%, #5A77FF 60%, #5A77FF 100%);

      @media screen and (min-width: 768px) and (max-width: 1110px) {
        top: 0;
        left: 0;
        bottom: 0;
        width: 6px;
        height: auto;
        right: unset;
        background: linear-gradient(10deg, #FFC593 0%, #BC7198 20%, #5A77FF 60%, #5A77FF 100%);
      }
    }
  }
  p {
    color: inherit;
  }
  h2 {
    font-size: 24px;
    line-height: 25px;
    font-weight: 700;
    text-transform: unset;
  }

  .price {
    font-size: 40px; 
    line-height: 40px;
    font-weight: 700;
    letter-spacing: 3px;
    opacity: 1;
  }
}
</style>