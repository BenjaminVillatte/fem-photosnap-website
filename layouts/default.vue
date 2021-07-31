<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Layout/Header'
import Footer from '~/components/Layout/Footer'

export default {
  components: {
    Header,
    Footer
  },
  middleware: 'navigation'
}
</script>