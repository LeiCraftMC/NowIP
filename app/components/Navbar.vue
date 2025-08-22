<script setup>
import { ref } from 'vue';
import Button from '@/components/ui/button/Button.vue';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

</script>
<template>
    <nav class="bg-white dark:bg-gray-900 shadow-md">
        <div class="container mx-auto  max-w-7xl px-4">
            <div class="flex justify-between h-16 items-center">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <a href="/" class="text-xl font-bold text-gray-900 dark:text-white">
                        MyApp
                    </a>
                </div>

                <!-- Links -->
                <div class="hidden md:flex space-x-4">
                    <Button as="a" href="/" variant="ghost">Home</Button>
                    <Button as="a" href="/about" variant="ghost">About</Button>
                    <Button as="a" href="/contact" variant="ghost">Contact</Button>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <Button @click="toggleMenu" variant="ghost">
                        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="menuOpen" class="md:hidden px-2 pt-2 pb-3 space-y-1">
            <Button as="a" href="/" variant="ghost" block>Home</Button>
            <Button as="a" href="/about" variant="ghost" block>About</Button>
            <Button as="a" href="/contact" variant="ghost" block>Contact</Button>
        </div>
    </nav>
</template>


<style scoped>
/* optional: add smooth mobile menu transition */
</style>
