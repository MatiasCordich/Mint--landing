<template>
    <nav class="navbar">
        <div class="navbar_box-1">
            <div class="navbar_logo">
                <img width="40" height="40" src="https://img.icons8.com/fluency-systems-regular/48/mint.png"
                    alt="mint" />
                <h2>Mint!</h2>
            </div>
            <button @click="toggleMenu" class="btn_menu">
                <span v-if="!isMenuOpen">
                    <img class="btn_icon" width="40" height="40"
                        src="https://img.icons8.com/ios-filled/50/fafafa/menu--v6.png" alt="menu--v6" /></span>
                <span v-else>
                    <img class="btn_icon" width="40" height="40"
                        src="https://img.icons8.com/ios-filled/50/fafafa/delete-sign--v1.png" alt="delete-sign--v1" />
                </span>
            </button>
        </div>


        <ul class="menu-overlay" :class="{ 'menu-open': isMenuOpen }">
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/pricing">Pricing</RouterLink>
            </li>
            <li>
                <RouterLink to="/services">Services</RouterLink>
            </li>
            <li>
                <RouterLink to="/solutions">Solutions</RouterLink>
            </li>
            <li>
                <RouterLink to="/questions">FAQ</RouterLink>
            </li>
            <div class="btn_themes-container">
                <h4>Themes</h4>
                <div class="btn_themes">
                    <button style='background-color: #FDF7E4;' @click="changeTheme('#FDF7E4')"></button>
                    <button style='background-color: #DCBFFF;' @click="changeTheme('#DCBFFF')"></button>
                    <button style='background-color: #C4DFDF;' @click="changeTheme('#C4DFDF')"></button>
                    <button style='background-color: #BCEAD5;' @click="changeTheme('#BCEAD5')"></button>
                </div>

            </div>

        </ul>




    </nav>
</template>

<script>
import { useThemeStore } from '@/store/themeStore';
import { ref, onMounted } from 'vue';
import { RouterView, RouterLink } from 'vue-router';


export default {
    setup() {

        const isMenuOpen = ref(false)
        const themeStore = useThemeStore();


        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };


        const changeTheme = (color) => {
            themeStore.setTheme(color);
        };

        const handleResize = () => {
            isMenuOpen.value = window.innerWidth > 768;
        };

        onMounted(() => {
            handleResize();
        });

        window.addEventListener('resize', handleResize);

        return {
            isMenuOpen,
            toggleMenu,
            changeTheme

        };
    }
}
</script>

<style scoped>
.navbar {
    width: 95%;
    margin: 0 auto;
    padding: 1.5rem;
}


.navbar_box-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

}

.navbar_logo {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.btn_menu {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    z-index: 999999999;
}

.btn_icon {
    padding: 1rem;
    background-color: var(--font-color);
    border-radius: 50%;
}

.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100svw;
    height: 100svh;
    z-index: 4;
    opacity: 0;
    visibility: hidden;
    background-color: #000000b9;
    transition: opacity 0.3s ease, visibility 0s ease 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.menu-overlay li a {
    font-size: 6rem;
    font-weight: 800;
    color: #fafafa;
}

.menu-open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, visibility 0s ease;
}

.btn_themes-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
}

.btn_themes-container h4 {
    color: #fafafa;
    font-weight: 400;
}


.btn_themes {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.btn_themes button {
    border: none;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
}

@media (min-width: 900px) {

    .navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 10rem;
        width: 100%;
    }

    .btn_menu {
        display: none
    }

    .menu-overlay {
        position: initial;
        background-color: transparent;
        transition: none;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        width: 50%;
        height: 100%;

    }

    .menu-overlay li a {
        color: var(--font-color);
        font-weight: 500;
        font-size: 1.7rem;
    }

    .btn_themes-container h4{
        display: none;
    }

    .btn_themes button{
        border: 2px solid var(--font-color)
    }
}
</style>