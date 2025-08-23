<script setup lang="ts">



</script>


<template>
    <Navbar />
    <main class="content container">
        <slot />
    </main>
    <Footer />
</template>

<style scoped>

.content {
    margin-top: 6rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
}

</style>
