<template>
  <Container>
    <header class="hero_pricing">
      <h2>We have what you need</h2>
      <p>You can start using our services for <span>$0</span> and without any kind of cost, then you can opt for our
        plans to get new and better <span>benefits</span>.</p>
      <button @click="scrollToSection">Ir a la seccion</button>
    </header>
  </Container>

  <Container>
    <section class="section_pricing" ref="section">
      <div class="pricing_free-section">
        <h3>Start with $0</h3>
        <div class="container_p-free"></div>
      </div>
      <div class="pricing_free-section">
        <h3>Step up to the next level</h3>
      </div>
    </section>
  </Container>



</template>

<script>
import Container from '@/components/Layer.vue';
import { ref, onMounted } from 'vue';

export default {
  components: {
    Container
  },
  setup() {
    const section = ref(null)

    const scrollToSection = () => {
      section.value.scrollIntoView({ behavior: 'smooth' });
    }

    onMounted(() => {
      const button = document.querySelector('button')
      button.addEventListener('click', scrollToSection);
    })

    return {
      section,
      scrollToSection
    }
  }
}
</script>

<style scoped>
.hero_pricing {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;
  height: 100vh;
}

.hero_pricing h2 {
  font-size: 6rem;
  font-weight: 900;
  width: 100%;
  text-align: center;
}

.hero_pricing p {
  text-align: center;
  line-height: 3.5rem;
  max-width: 80rem;
  width: 100%;
  font-size: 2rem;
}

span {
  font-weight: 800;
}

.section_pricing {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.pricing_free-section{
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.pricing_free-section h3{
  font-size: 4rem;
  font-weight: 900;
}

.container_p-free{
  width: 100%;
  height: 80rem;
  border: 2px dotted var(--font-color);
  clip-path: polygon(100% 0, 100% 79%, 79% 100%, 0% 100%, 0 47%, 0% 0%);
}

@media (min-width: 900px) {
  .hero_pricing h2 {
    font-size: 9rem;
  }

  .pricing_free-section h3{
  font-size: 7rem;
}
}
</style>
