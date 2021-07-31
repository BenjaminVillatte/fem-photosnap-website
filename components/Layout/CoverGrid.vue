<template>
  <section class="cover-grid">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.cover-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1110px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>