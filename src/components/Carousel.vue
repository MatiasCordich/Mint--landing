<template>
    <div class="carousel-container">
        <div class="carousel" ref="carousel" :style="{ transform: `translateX(-${carouselPosition}px)` }">
            <div v-for="(item, index) in duplicatedItems" :key="index" class="carousel-item">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {

        // Textos de cada item
        const texts = [
            "Bank manager",
            "Easy and fast",
            "New and smart",
            "Crypto wallet",
            "In your pocket",
            "Get better",
            "Manage wisely",
            "Always in touch",
            "Modern and fresh",
            "Support 24hs"
        ];
        // Nuemero de items del carousel
        const numItems = 10;

        // Posicion del carousel
        const carouselPosition = ref(0);

        // Función para crear elementos duplicados alrededor del carousel
        const duplicatedItems = computed(() => {
            const items = [];
            for (let i = 0; i < numItems * 10; i++) {
                const index = i % numItems;
                items.push(texts[index]);
            }
            return items;
        });

        // Función para mover el carousel de forma continua
        const moveCarousel = () => {
            carouselPosition.value += 1;
            requestAnimationFrame(moveCarousel);
        };

        // Iniciar el movimiento continuo del carousel cuando se monte el componente
        onMounted(() => {
            moveCarousel();
        });

        // Limpiar la animación cuando el componente se desmonta
        onBeforeUnmount(() => {
            cancelAnimationFrame(moveCarousel);
        });

        return {
            duplicatedItems,
            carouselPosition
        };
    }
};
</script>

<style scoped>
.carousel-container {
    max-width: 180rem;
    width: 95%;
    margin: 5rem auto;
    height: 5rem;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.carousel {
    display: flex;
    gap: 2rem;
}

.carousel-item {
    flex: 0 0 auto;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 6rem;
    border: 1px dotted var(--font-color);
}
</style>