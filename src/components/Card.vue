<template>
    <div class="card">
        <div class="card_number">
            <p>{{ id }}.</p>
        </div>
        <div class="card_container">
            <h2>{{ titulo }}</h2>
            <ul>
                <li>
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/0F0F0F/ok--v1.png"
                        alt="ok--v1" />
                    {{ texto_1 }}

                </li>
                <li>
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/0F0F0F/ok--v1.png"
                        alt="ok--v1" />
                    {{ texto_2 }}

                </li>
                <li>
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/0F0F0F/ok--v1.png"
                        alt="ok--v1" />
                    {{ texto_3 }}

                </li>
                <li>
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/0F0F0F/ok--v1.png"
                        alt="ok--v1" />
                    {{ texto_4 }}
                </li>
                <a class="btn_see-more" href="#">
                    See more
                </a>
            </ul>
        </div>
    </div>

</template>

<script>
import {defineComponent } from 'vue';

export default defineComponent({
    props: {
        id: { type: Number, required: true},
        titulo: { type: String, required: true},
        texto_1: { type: String, required: true},
        texto_2: { type: String, required: true},
        texto_3: { type: String, required: true},
        texto_4: { type: String, required: true},
    }
})
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    max-width: 35rem;
    width: 100%;
    gap: 3rem;
}

.card_number {
    font-size: 4rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
}

.card_number::after{
    content: "";
    width: 9rem;
    height: .1rem;
    background-color: var(--font-color);
    position: absolute;
    left: 3rem;
    bottom: 1.8rem;
}


.card_container {
    width: 100%;
    height: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    padding: 1.5rem;
    border: 1px dotted var(--font-color);
    border-radius:1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}

.card_container h2{
    font-size: 6rem;
    font-weight: 800;
}

.card_container ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
}

.card_container li {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
}

.btn_see-more {
    background-color: var(--font-color);
    color: var(--font-negative-color);
    padding: 1rem 2rem;
    border-radius: 5rem;
    ;
}

</style>