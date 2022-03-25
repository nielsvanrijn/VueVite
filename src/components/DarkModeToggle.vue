<template>
    <button @click="toggle()" class="p-1 text-gray-400 transition hover:bg-gray-100 rounded-xl hover:text-gray-500 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200">
        <svg v-if="darkModeStore.darkMode" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    </button>
</template>

<script setup lang="ts">
import { useDarkModeStore } from '@/stores/darkMode';

const darkModeStore = useDarkModeStore();

function toggle() {
    if (document.querySelector('html')!.classList.contains('dark')) {
        document.querySelector('html')!.classList.remove('dark');
        darkModeStore.darkMode = false;
    } else {
        document.querySelector('html')!.classList.add('dark');
        darkModeStore.darkMode = true;
    }
}
</script>
