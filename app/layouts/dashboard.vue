<template>
    <div class="app bg-white text-black dark:text-white dark:bg-slate-950">
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
    </div>

</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>

.app {
    font-family: "Rubik", sans-serif;
    min-height: 100vh;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
}

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
