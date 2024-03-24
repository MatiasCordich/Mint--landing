<template>
    <footer class="footer">
        <div class="logo">
            <img width="40" height="40" src="https://img.icons8.com/fluency-systems-regular/48/0f0f0f/mint.png"
                alt="mint" />
            <h2>Mint!</h2>
        </div>
        <div class="footer_menues">
            <ul class="menu_footer">
                <h2>Resources</h2>
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
            </ul>
            <ul class="footer_links">
                <li>
                    <img src="https://img.icons8.com/ios-filled/40/0f0f0f/twitterx--v1.png" alt="twitterx--v1" />
                </li>
                <li>
                    <img src="https://img.icons8.com/ios-filled/40/0f0f0f/instagram-new--v1.png"
                        alt="instagram-new--v1" />
                </li>
                <li>
                    <img src="https://img.icons8.com/ios-filled/40/0f0f0f/linkedin.png" alt="linkedin" />
                </li>

            </ul>
            <ul class="footer_links-aparts">
                <li>
                    Mint! Inc. All rights Reserved
                </li>
                <li>
                    Terms and Conditions
                </li>
                <li>
                    Privacy Policy
                </li>
            </ul>
        </div>

    </footer>
</template>

<script>
import { RouterLink } from 'vue-router';

</script>

<style>
.footer {
    width: 100%;
    height: 100%;
    margin-top: 5rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    width: 100%;
}

.footer_menues{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
}

.menu_footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    font-weight: 600;
}

.menu_footer h2 {
    font-weight: 900;
}

.footer_links {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.footer_links-aparts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
}

.footer_links-aparts li {
    text-decoration: underline var(--font-color);
}

@media (min-width: 900px) {

    .footer{
        width: 80%;
        margin: 0 auto;
        margin-top: 8rem;
    }
    .logo{
        justify-content: flex-start;
    }

    .footer_menues{
        flex-direction: row;
        justify-content: space-around;
        gap: 9rem;
    }

    .menu_footer{
        width: fit-content;
        gap: 2rem;
    }

    .menu_footer > * {
        width: 100%;
        text-align: left;
    }

    .footer_links-aparts li{
        width: 100%;
        text-align: left;
    }

    


}
</style>