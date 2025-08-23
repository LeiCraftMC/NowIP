<template>
        <!-- <Header /> -->
        <main class="content">
            <slot />
        </main>
        <Footer />
</template>

<script setup lang="ts">


</script>


<style scoped>

.content {
    /* margin-top: 6rem; */
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
}

</style>