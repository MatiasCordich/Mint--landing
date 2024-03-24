<template>
    <div :class="'card ' + cardClass">
        <img :src="imageUrl" :alt="altDescription" class="card-image">
        <div class="card_overlay">
            <div class="overlay_container">
                <h2>{{ title }}</h2>
                <p>{{ text }}</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        altDescription: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        cardClass: {
            type: String,
            default: 'g-1'
        }
    }
}
</script>

<style scoped>
.card {
    width: 100%;
    height: fit-content;
    border: 1px solid var(--font-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 3rem;
    position: relative;
}

.card_overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.877);
    bottom: 0;
    width: 100%;
    height: 0;
    border-radius: 3rem;
    color: var(--font-negative-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    overflow: hidden;
    transition: .6s ease;
}

.overlay_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 95%;
}

.overlay_container h2{
    font-weight: 900;
    font-size: 3.5rem;
}

.overlay_container p {
    text-align: center;
    line-height: 3rem;
    font-size: 1.6rem;
    font-weight: 400;
}

.card:hover .card_overlay{
    height: 100%;
}
</style>