<script lang="ts">
import Navbar from '~/components/Navbar.vue';


</script>



<template>

    <Navbar></Navbar>

    <div class="container mx-auto flex h-full max-w-7xl flex-col gap-4 px-4 py-8">

        <slot />

    </div>

</template>
