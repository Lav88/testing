<template>
    <div class="">
        <header id="header" class="header header--site z-30 background-light">
            <div class="wrapper wrapper--hd">
                <div class="header__container">
                    <NuxtLink class="flex" to="/">
                        <img class="header__logo" src="../../assets/img/logo-02.png" alt="logo">

                        <div class="header__logo-text ">
                            <p>COASTAL <br> BIOTECH</p>
                        </div>
                    </NuxtLink>

                    <div class="header__nav">
                        <div class="header__menu">
                            <nav id="main-nav" class="main-navigation">
                                <ul id="menu-main-menu-1" class="menu menu--main-menu">
                                    <li
                                        class="js-mega-menu js-what-we-do menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
                                        <!-- <NuxtLink to="{name: 'solutions'}">Our Solutions</NuxtLink> -->
                                        <NuxtLink to="/solutions/biostimulants">Our Solutions</NuxtLink>
                                        <div class="menu-item__dropdown" aria-hidden="true">
                                            <NuxtLink class="menu-item__link" to="/solutions/biostimulants">
                                                Biostimulants</NuxtLink>
                                            <NuxtLink class="menu-item__link" to="/solutions/bio-materials">
                                                Bio Materials</NuxtLink>
                                        </div>

                                    </li>
                                    <!-- <li
                                        class="js-mega-menu js-what-we-do menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
                                        <NuxtLink :to="{ name: 'our-impact' }">Our Impact</NuxtLink>
                                    </li> -->
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
                                        <NuxtLink :to="{ name: 'projects-insights' }">Projects &amp; Insights</NuxtLink>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-92">
                                        <NuxtLink :to="{ name: 'partner' }">Partner With Us</NuxtLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="header__cta">
                        <NuxtLink to="https://www.linkedin.com/company/coastal-biotech-cbiio/jobs/?viewAsMember=true"
                            class="c-button c-button--secondary has-icon  has-icon ">
                            <span class="c-button__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
                                    <path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
                                        fill="#171717"></path>
                                    <path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
                                </svg>
                            </span>
                            <span>Careers</span>
                            <span class="c-button__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
                                    <path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
                                        fill="#171717"></path>
                                    <path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
                                </svg>
                            </span>
                        </NuxtLink>
                    </div>
                    <div class="resp-buttons">
                        <div class="menu-toggle menu-toggle--xbutterfly js-menu-toggle" aria-label="Toggle Menu">
                            <span>Menu</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="mega-menu background-light">
            <div class="mega-menu__container js-who-we-are">
                <div class="mega-menu__left">
                    <p>Who we are</p>
                </div>
                <div class="mega-menu__cards">
                    <a href="https://edfimc.eu/who-we-are/#mission-vision"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-1.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Mission &amp; vision</p>
                        <p class="opacity-05 mt-4 mega-menu__text">We empower entrepreneurship in frontier markets.</p>
                    </a>
                    <a href="https://edfimc.eu/who-we-are/#services"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-4.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Our services</p>
                        <p class="opacity-05 mt-4 mega-menu__text">We offer financial services which nourish
                            entrepreneurship in developing countries.</p>
                    </a>
                    <a href="https://edfimc.eu/who-we-are/#shareholders"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-5.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Shareholders</p>
                        <p class="opacity-05 mt-4 mega-menu__text">Our shareholders are 9 European DFIs and EDFI
                            association.</p>
                    </a>
                    <a href="https://edfimc.eu/who-we-are/#team"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-6.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Team</p>
                        <p class="opacity-05 mt-4 mega-menu__text">Our team </p>
                    </a>
                </div>
            </div>
            <div class="mega-menu__container js-what-we-do">
                <div class="mega-menu__left">
                    <p>What we do</p>
                    <p class="opacity-05">We offer financial services which nourish entrepreneurship in developing
                        countries:</p>
                </div>
                <div class="mega-menu__cards">
                    <a href="https://edfimc.eu/what-we-do/#investments"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-6.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Investments</p>
                        <p class="opacity-05 mt-4 mega-menu__text">We invest in private sector in renewable energy and
                            agriculture</p>
                    </a>
                    <a href="https://edfimc.eu/what-we-do/#guarantees"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-3.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Guarantees</p>
                        <p class="opacity-05 mt-4 mega-menu__text">We provide EFSD+ guarantees to European DFIs to
                            de-risk their investments in developing markets.</p>
                    </a>
                    <a href="https://edfimc.eu/what-we-do/#syndications"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-7.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Syndications</p>
                        <p class="opacity-05 mt-4 mega-menu__text">Together with EDFIs and the EIB we promote private
                            sector sustainable development </p>
                    </a>
                    <a href="https://edfimc.eu/what-we-do/#technical"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="40" height="40" src="https://edfimc.eu/wp-content/uploads/2023/12/Icons-5.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Technical Assistance</p>
                        <p class="opacity-05 mt-4 mega-menu__text">By offering grants we support our investees, and
                            their value chain.</p>
                    </a>
                </div>
            </div>
            <div class="mega-menu__container js-impact">
                <div class="mega-menu__left">
                    <p>Impact</p>
                </div>
                <div class="mega-menu__cards">
                    <a href="https://edfimc.eu/our-impact/#environmental-social-governance"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-7.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Environmental, Social and Governance</p>
                        <p class="opacity-05 mt-4 mega-menu__text">We invest with the aim of having a positive impact,
                            and we strive to ensure respect for human rights, and environmental and social
                            sustainability.</p>
                    </a>
                    <a href="https://edfimc.eu/our-impact/#impact-management"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-10.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Impact management</p>
                        <p class="opacity-05 mt-4 mega-menu__text">We measure and manage impact throughout the entire
                            investment lifecycle. </p>
                    </a>
                    <a href="https://edfimc.eu/our-impact/#key-numbers"
                        class="mega-menu__card background-white-100 color-primary p-small">
                        <img width="24" height="24" src="https://edfimc.eu/wp-content/uploads/2023/12/icon-9.svg"
                            alt="Icon for card" class="mega-menu__icon">
                        <p>Key numbers</p>
                        <p class="opacity-05 mt-4 mega-menu__text">EDFI MC focuses on sectors, such as renewable energy
                            or smallholder finance</p>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.menu-item__dropdown {
    background: #f7f7f7;
    border: 1px solid var(--color-border-gray);
    border-radius: 2px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    left: 0;
    margin-top: 8px;
    opacity: 0;
    position: absolute;
    top: 100%;
    transform: translateY(6px);
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
    visibility: hidden;
    z-index: 10001;
}

.menu-item__dropdown .menu-item__link {
    color: #171717;
    color: var(--color-primary);
    display: block;
    font-weight: 400;
    letter-spacing: -.4px;
    line-height: normal;
    padding: 8px 12px;
    text-decoration: none;
    white-space: nowrap;
}

.menu-item__dropdown .menu-item__link:hover {
    background: rgba(0, 0, 0, 0.04);
}

/* Remove the global main-menu arrow pseudo-element from dropdown items only */
.menu-item__dropdown .menu-item__link::after {
    content: none !important;
    background-image: none !important;
    display: none !important;
    height: 0 !important;
    width: 0 !important;
    margin-left: 0 !important;
}
</style>