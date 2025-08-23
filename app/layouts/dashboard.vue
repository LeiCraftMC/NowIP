<script setup lang="ts">

import Sidebar from '~/components/Sidebar.vue';

</script>


<template>
    <Sidebar class="sidebar">
        <main class="content">
            <div class="flex-grow-1">
                <slot />
            </div>
            <Footer :withMargin="true" />
        </main>
    </Sidebar>
</template>

<style scoped>
.sidebar {
    /* margin-top: 6rem; */
    flex-grow: 1;

}

.content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}
</style>

<style>
.box-container {
    width: 100%;
    padding: 30px;
    background-color: #1a1b2e;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
}
</style>