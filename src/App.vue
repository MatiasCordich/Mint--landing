<template>
  <div :style="{ '--background-color': theme }" class="wrapper">
    <NavbarComponent />
    <RouterView />
    <FooterComponent/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import { useThemeStore } from './store/themeStore';
import { computed } from 'vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent, 
    FooterComponent
  },
  setup() {
    const themeStore = useThemeStore();
    const theme = computed(() => themeStore.theme);

    return {
      theme
    };
  }
}




</script>

<style>
.wrapper {
  transition: background-color 0.5s ease;
  --background-color: var(--cream);
  background-color: var(--background-color);
  height: auto;
}
</style>
