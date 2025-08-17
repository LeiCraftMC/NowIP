<template>
    <main class="content">
        <div></div>
        <slot />
    </main>
    <Footer :withMargin="true" />
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
</script>

<style scoped>

.content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex-grow: 1;
}

</style>
