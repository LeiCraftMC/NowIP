<template>
    <Sidebar class="sidebar">
        <main class="sm:ml-64 content">
            <div class="p-4 grow-1">
                <div class="mt-14">
                    <slot />
                </div>
            </div>
            <Footer :withMargin="true" />
        </main>
    </Sidebar>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.sidebar {
    flex-grow: 1;
}

.content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex-grow: 1;
}
</style>
