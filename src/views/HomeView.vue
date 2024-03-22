<template>
  <Container>
    <div class="hero_box-1">
      <header class="header_hero">
        <h4>MintPlus</h4>
        <p>Trusted!</p>
      </header>
      <h1 class="hero_title">
        <span>
          Make your Finance
        </span>
        <span>
          Move on with Mint!
        </span>
      </h1>
      <p class="hero_text">Easily open a bank account in minutes and make money management simple. Enjoy a bank account
        with the <span>flexibility</span> and <span>rewarding banking</span>.</p>
      <div class="btn_start">
        <button>
          Get Started
          <span class="line"></span>
          <img class="btn_start-icon" src="https://img.icons8.com/ios/50/expensive-2--v1.png" alt="expensive-2--v1" />
        </button>
      </div>
      <div class="newsletter_box">
        <p>For more information,
          <span>enter your email!</span>
        </p>
        <form>
          <input type="email" placeholder="Email">
          <button class="btn_form" type="submit">
            <img class="btn_form-icon" width="40" height="40"
              src="https://img.icons8.com/ios-filled/50/circled-left-2.png" alt="circled-left-2" />
          </button>
        </form>
      </div>
    </div>
    <div class="hero_box-2">
      <img :src="logo" alt="Logo">
    </div>
  </Container>
  <Carousel />
  <Container>
    <section class="section_plans">
      <h3>Start with 0$, it's so easy</h3>
      <h2>You can chose our plans</h2>
      <div class="plans_section">
        <Card v-for="card in cards" :key="card.id_card" :id="card.id_card" :titulo="card.titulo" :texto_1="card.texto1" :texto_2="card.texto2" :texto_3="card.texto3" :texto_4="card.texto4" />
      </div>
    </section>

  </Container>

</template>

<script>
import Container from '@/components/Layer.vue';
import Carousel from '@/components/Carousel.vue';
import Card from '@/components/Card.vue'
import logoSVG from '@/assets/img-2.png';
import jsonData from '@/data/card.json'
import { ref } from 'vue';


export default {
  components: {
    Container,
    Carousel,
    Card
  },
  setup() {
    const logo = ref(logoSVG);

    return { logo };
  },
  data(){
    return {
      cards: []
    }
  },
  created(){
    this.cards = jsonData
  }
}


</script>

<style scoped>
/* ------------- HERO BOXES -------------  */
.hero_box-1,
.hero_box-2 {
  width: 100%;
}

/* ------------- HERO BOX 1 -------------  */
.hero_box-1 {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* ------------- HERO HEADER -------------  */
.header_hero {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}

.header_hero h4 {
  background-color: var(--font-color);
  color: var(--font-negative-color);
  font-weight: 400;
  font-size: 1.8rem;
  padding: 1rem;
  border-radius: 2rem;
}

.header_hero p {
  font-size: 1.4rem;
  font-weight: 600;
}

/* ------------- HERO TITLE -------------  */
.hero_title {
  display: flex;
  flex-direction: column;
  gap: .8rem;
  font-size: 5rem;
  font-weight: 500;
}

/* ------------- HERO TEXT -------------  */
.hero_text {
  font-weight: 500;
  line-height: 3.5rem;
  width: 80%;
}

.hero_text span {
  font-weight: 700;
}

/* ------------- HERO START BUTTON -------------  */
.btn_start button {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--font-color);
  color: var(--font-negative-color);
  font-size: 1.8rem;
  padding: 1.3rem;
  border-radius: 8rem;
  cursor: pointer;
  position: relative;
}


.line {
  width: 2rem;
  height: 1.5rem;
  background-color: var(--font-color);
  position: absolute;
  right: -1rem;
}

.btn_start-icon {
  background-color: transparent;
  border: 3px solid var(--font-color);
  color: var(--font-color);
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 100%;
  position: absolute;
  right: -5.8rem;
}

/* ------------- HERO NEWSLETTER -------------  */
.newsletter_box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.newsletter_box p {
  font-weight: 500;
  line-height: 3.5rem;
}

.newsletter_box span {
  font-weight: 700;
}

.newsletter_box form {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 6rem;
}

.newsletter_box input {
  padding: 1.3rem;
  width: fit-content;
  border: 2px solid var(--font-color);
  border-radius: 6rem;
  font-size: 1.4rem;
}

.newsletter_box input::placeholder {
  color: var(--font-color);
  font-weight: 600;
}

.btn_form {
  cursor: pointer;
}

.btn_form-icon {
  transform: rotate(140deg);
}

/* ------------- HERO BOX 2 -------------  */
.hero_box-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid var(--font-color);
  border-radius: 6rem;
  padding: 2rem;
}

.hero_box-2 img {
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.404));
}

/* ------------- SECTION PLANS -------------  */
.section_plans{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}

.section_plans h3{
  font-weight: 600;
  font-size: 1.5rem;
}

.section_plans h2{
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
}

.plans_section{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}


/* ------------- MEDIA QUERIES -------------  */

@media (min-width: 900px) {
  .hero_box-2 {
    justify-content: flex-start;
    width: fit-content;
  }

  .hero_box-1 {
    width: 50%;
  }

  .plans_section{
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }

}
</style>
