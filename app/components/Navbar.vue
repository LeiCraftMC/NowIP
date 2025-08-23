<script setup lang="ts">

import { NuxtLink } from '#components';
import { usePocketBase } from '~/composables/usePocketBase';
// import Logo from '@/components/img/logo-white.vue';

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top netignite-nav" data-bs-theme="dark">
        <div class="container">
            <NuxtLink class="navbar-brand" to="/">
                <!-- <Logo class="logo" style="height: 50px;" /> -->
                <span class="h3">NowIP</span>
            </NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- <li class="nav-item">
                        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/features">Features</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about">About</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link external-link" href="https://github.com/NetIgnite-project/"
                            target="_blank">Github</a>
                    </li> -->
                </ul>
                <div class="dropdown text-end">
                    <a href="#"
                        class="d-block link-body-emphasis text-decoration-none dropdown-toggle fw-normal"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        myusername
                    </a>
                    <ul class="dropdown-menu text-small">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </nav>
</template>

<style scoped>
.netignite-nav {
    background-color: #1a1b2e !important;
    font-weight: 500;
}

a.external-link::after {
    content: "↗";
    font-size: 0.8em;
    margin-left: 0.3em;
    display: inline-block;
    color: inherit;
    text-decoration: none;
}

.nav-link {
    font-size: calc(1.275rem + .1vw);
}

.router-link-active {
    color: #5f61eb !important;
}

.dropdown-menu {
    background-color: #1a1b2e;
    border: 1px solid rgba(255, 255, 255, 0.25);
}

.dropdown-divider {
    border-color: rgba(255, 255, 255, 0.25);
}

</style>