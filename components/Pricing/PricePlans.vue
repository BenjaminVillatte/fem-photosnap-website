<template>
  <section class="price-plans">
    
    <SwitchControl off="Monthly" on="Yearly" class="center" @change="onChange" />

    <div class="plans">

      <PlanCard 
        v-for="plan in plans" 
        :key="plan.name" 
        :plan="plan"
        :billing="billing" 
        @choose="onChoose"
        :recommended="plan.recommended" />

    </div>
  </section>
</template>

<script>
import SwitchControl from '~/components/Control/SwitchControl'
import PlanCard from '~/components/Pricing/PlanCard'

export default {
  components: {
    SwitchControl,
    PlanCard
  },
  data() {
    return {
      billing: 'monthly',
      plans: [
        {
          name: 'Basic',
          desc: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
          monthlyPrice: '$19.00',
          yearlyPrice: '$190.00',
          recommended: false
        },
        {
          name: 'Pro',
          desc: 'More advanced features available. Recommended for photography veterans and professionals.',
          monthlyPrice: '$39.00',
          yearlyPrice: '$390.00',
          recommended: true
        },
        {
          name: 'Business',
          desc: 'Additional features available such as more detailed metrics. Recommended for business owners.',
          monthlyPrice: '$99.00',
          yearlyPrice: '$990.00',
          recommended: false
        }
      ]
    }
  },
  methods: {
    onChange(checked) {
      this.billing = checked ? 'yearly' : 'monthly'
    },
    onChoose(plan) {
      console.log(plan)
    }
  }
}
</script>

<style lang="scss" scoped>
.plans {
  margin-top: 40px;
  display: grid;
  gap: 24px;

  @media screen and (min-width: 1110px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>