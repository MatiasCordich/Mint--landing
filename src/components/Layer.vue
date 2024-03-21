<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Container'
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:  0 auto;
    max-width: 180rem;
    width: 95%;
    margin-top: 5rem;
    gap: 2rem;
    position: relative;
}

@media (min-width: 900px) {
    .container{
        flex-direction: row;
        justify-content: center;
    }
}
</style>