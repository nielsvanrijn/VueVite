<template>
    <div class="px-14 py-8 bg-white dark:bg-slate-900 h-full-nav">
        <div class="flex items-center">
            <div class="flex-auto">
                <h1 class="text-xl font-semibold text-slate-900 dark:text-gray-100">Pokemon</h1>
                <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">A list of all the Pokemon</p>
            </div>
            <div class="mt-4 ml-16 flex-none">
                <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:dark:bg-gray-600"
                    disabled
                >Add Pokemon</button>
            </div>
        </div>
        <div class="mt-8 flex flex-col">
            <div class="-my-2 -mx-4 overflow-x-auto">
                <div class="inline-block min-w-full py-2 align-middle px-4">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-slate-800">
                                <tr>
                                    <th
                                        scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-gray-100"
                                    >Index</th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-gray-100"
                                    >Name</th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-gray-100"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody
                                class="divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-slate-700"
                            >
                                <tr v-for="(pokemon, index) in pokemonStore.allPokemonList" :key="index">
                                    <td
                                        class="whitespace-nowrap px-8 py-4 text-sm text-gray-500 dark:text-gray-300"
                                    >{{ pokemonStore.ids[index] }}</td>
                                    <td
                                        class="whitespace-nowrap px-3 py-4 text-sm font-medium text-slate-900 dark:text-gray-100 first-letter:uppercase"
                                    >{{ pokemon.name }} <span v-if="pokemonStore.favPokemon && pokemonStore.favPokemon.name === pokemon.name">⭐️</span></td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium"
                                    >
                                        <RouterLink
                                            :to="'/detail/' + index"
                                            class="text-emerald-600 hover:text-emerald-900"
                                        >View</RouterLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <nav
                            class="bg-gray-50 w-full dark:bg-slate-800 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-600 sm:px-6"
                            aria-label="Pagination"
                        >
                            <button 
                                @click="pokemonStore.getAllPokemonPrev"
                                :disabled="pokemonStore.allPokemonPrevURI === null"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:!bg-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-500"
                            >
                                Previous
                            </button>

                            <p class="text-sm text-gray-700 dark:text-gray-300">
                                Showing <span class="font-medium">{{ pokemonStore.ids[0] }}</span> to <span class="font-medium">{{pokemonStore.ids[pokemonStore.ids.length - 1]}}</span> of <span class="font-medium">{{ Math.floor(pokemonStore.totalNrOfPokemon / 5) }}</span> results
                            </p>
                            <button 
                                @click="pokemonStore.getAllPokemonNext"
                                :disabled="pokemonStore.allPokemonNextURI === null"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:!bg-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-500"
                            >
                                Next
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { usePokemonStore } from '@/stores/pokemon';
const pokemonStore = usePokemonStore();

pokemonStore.getAllPokemon();
</script>