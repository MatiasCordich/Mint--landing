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
            <img class="btn_form-icon" width="50" height="50"
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
        <Card v-for="card in cards" :key="card.id_card" :id="card.id_card" :titulo="card.titulo" :texto_1="card.texto1"
          :texto_2="card.texto2" :texto_3="card.texto3" :texto_4="card.texto4" />
      </div>
    </section>
  </Container>
  <Container>
    <section class="benefits">
      <h3 class="benefits-title-mini">Your wallet, your world</h3>
      <h2 class="benefits-title">
        Infinite possibilities
      </h2>
      <section class="benefits_container">
        <section class="benefits_description">
          <h2>Be part of us.</h2>
          <div class="line-2"></div>
          <p>
            To be part of Mint! opens up a world full of possibilities, complete financial freedom, and most
            importantly, being your own bank. Because our customers are our trust quota.
          </p>
          <h2>What benefits will you obtain?</h2>
          <div class="line-2"></div>
          <p>
            Being part of Mint! will provide you with benefits in the following areas:
          </p>
          <ul class="benefits-list">
            <li>
              <img src="https://img.icons8.com/ios-glyphs/15/0f0f0f/checkmark--v1.png" alt="checkmark--v1" />
              Customer
              service
            </li>
            <li>
              <img src="https://img.icons8.com/ios-glyphs/15/0f0f0f/checkmark--v1.png" alt="checkmark--v1" />
              Security
            </li>
            <li>
              <img src="https://img.icons8.com/ios-glyphs/15/0f0f0f/checkmark--v1.png" alt="checkmark--v1" />
              Financial Services
            </li>
            <li>
              <img src="https://img.icons8.com/ios-glyphs/15/0f0f0f/checkmark--v1.png" alt="checkmark--v1" />
              Cryptocurrencies
            </li>
          </ul>

          <h2>
            Your account, your world.
          </h2>
          <div class="line-2"></div>
          <p>
            Opening a bank account at Mint! is entirely personal, so your account is your world, and we will provide you with personalized customer service.
          </p>
          <h2>Start with $0</h2>
          <div class="line-2"></div>
          <p class="benefit_text">
            When you create an account with Mint!, the cost will be $0 dollars. You can continue with the same or access our plans.
            <span>
              <RouterLink to="/prices">
                Our plans
              </RouterLink>
            </span>
          </p>
        </section>
        <section class="benefits_grid">
          <CardIcon v-for="(card, index) in cardsIcon" :key="index" :imageUrl="card.imageUrl" :title="card.title"
            :text="card.text" :cardClass="card.cardClass" :altDescription="card.altDescription" />
        </section>
      </section>

    </section>


  </Container>

</template>

<script>
import Container from '@/components/Layer.vue';
import Carousel from '@/components/Carousel.vue';
import Card from '@/components/Card.vue'
import CardIcon from '@/components/CardIcon.vue'
import cardData from '@/data/card.json'
import cardDataIcon from "@/data/icons.json"
import imgHeader from '@/assets/img-0.png'
import { ref } from 'vue';


export default {
  components: {
    Container,
    Carousel,
    Card,
    CardIcon
  },
  setup() {
    const logo = ref(imgHeader);

    return { logo };
  },
  data() {
    return {
      cards: [],
      cardsIcon: []
    }
  },
  created() {
    this.cards = cardData
  },
  mounted() {
    this.cardsIcon = cardDataIcon
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
  border-radius: 6rem;
  padding: 2rem;
}

.hero_box-2 img {
  width: 60rem;
  max-width: 100%;
}

/* ------------- SECTION PLANS -------------  */
.section_plans {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}

.section_plans h3 {
  font-weight: 600;
  font-size: 1.5rem;
}

.section_plans h2 {
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
}

.plans_section {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
}

/* ------------- BENEFITS -------------  */

.benefits {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2.5rem;
}

.benefits-title-mini,
.benefits-title {
  width: 100%;
  text-align: left;
}

.benefits-title-mini {
  font-weight: 400;
  font-size: 1.8rem;
}

.benefits-title {
  font-size: 5rem;
  font-weight: 800;
}

.benefits_container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.benefits_description {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.benefits_description h2 {
  font-size: 4rem;
  font-weight: 900;
}

.line-2 {
  width: 95%;
  height: .1rem;
  background-color: var(--font-color);
}

.benefits_description p {
  line-height: 4rem;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.benefit_text{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.benefit_text span{
  width: fit-content;
  background-color: var(--font-color);
  border-radius: 3rem;
}

.benefit_text a{
  padding: 1rem 2rem;
  color: var(--font-negative-color);
}


.benefits_grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  gap: 2rem;
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

  .plans_section {
    flex-direction: row;
    justify-content: center;
  }

  .benefits_grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 2rem;
  }

  .g-1,
  .g-2,
  .g-3,
  .g-4,
  .g-5,
  .g-6 {
    height: 100%;
  }

  .g-1 {
    grid-area: 1/3/3/5;
  }

  .g-2 {
    grid-area: 3/ 3 / 4 / 5;
  }

  .g-3 {
    grid-area: 4 / 3 / 4 / 5;
  }

  .g-4 {
    grid-area: 1/1/2/3;
  }

  .g-5 {
    grid-area: 2 / 2 / 5;
  }

  .g-6 {
    grid-area: 2 / 1 / 5;
  }

}

@media (min-width: 1440px) {
  .benefits_container {
    flex-direction: row;
  }



  .benefits_grid,
  .benefits_description {
    width: 50%;
  }
}
</style>
