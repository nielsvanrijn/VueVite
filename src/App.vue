<template>
    <nav class="transition bg-white shadow dark:bg-slate-800">
        <div class="px-8 mx-auto max-w-7xl">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="flex ml-6 space-x-8">
                        <!-- <RouterLink
                            to="/"
                            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 dark:text-gray-300"
                            activeClass="!text-gray-900 !border-emerald-500 dark:!text-gray-100"
                        >Home</RouterLink> -->
                        <RouterLink
                            to="/list"
                            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 dark:text-gray-300"
                            activeClass="!text-gray-900 !border-emerald-500 dark:!text-gray-100"
                        >List</RouterLink>
                        <!-- <RouterLink
                            to="/about"
                            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 dark:text-gray-300"
                            activeClass="!text-gray-900 !border-emerald-500 dark:!text-gray-100"
                        >About</RouterLink> -->
                    </div>
                </div>
                <div class="flex items-center ml-6">
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    </nav>

    <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
</script>

<style>
@import "@/assets/base.scss";
</style>
