<script setup lang="ts">

defineProps({
    withMargin: {
        type: Boolean,
        default: true,
    }
});

</script>

<template>
    <footer class="mb-0 bg-white border-t border-gray-200 dark:bg-black dark:border-gray-400" :style="{ marginTop: withMargin ? '50px' : '0px' }">
        <div class="px-4 text-center">
            <p class="legal-paragraph">     
                <span class="copyright-text">&copy;  {{ new Date().getFullYear() }} LeiCraft_MC. Alle Rechte vorbehalten</span><br>
            </p>        
        </div>
    </footer>
</template>

<style scoped>

.legal-paragraph {
	padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 0;
}

.copyright-text {
    background-color: #1a1b2e;
}

</style>