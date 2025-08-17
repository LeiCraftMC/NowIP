<template>
	<div class="app bg-white text-black dark:text-white dark:bg-slate-950">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style scoped>

.app {
    font-family: "Rubik", sans-serif;
    min-height: 100vh;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
}

</style>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
	if (
		localStorage.getItem('color-theme') === 'dark' ||
		(!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
})
</script>