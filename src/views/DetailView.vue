<template>
    <div class="px-14 py-8 bg-white dark:bg-slate-900 h-full-nav">
        <div class="flex items-top" v-if="pokemonStore.lastRequestedPokemon">
            <div class="flex-auto">
                <img class="w-52" :src="pokemonStore.lastRequestedPokemon.sprites.other['official-artwork'].front_default" alt="">
                <div class="flex">
                    <div class="flex text-4xl py-6 font-semibold text-gray-900 dark:text-gray-100">
                        #{{ pokemonStore.lastRequestedPokemon.id }}
                        <span class="ml-2 first-letter:uppercase">{{ pokemonStore.lastRequestedPokemon.name }}</span>
                    </div>
                    <div class="py-7 ml-2">
                        <button
                            @click="fav()"
                            type="button"
                            class="inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto disabled:bg-gray-300 disabled:dark:bg-gray-600"
                        >Set as Favorite</button>
                    </div>
                </div>

                <div class="py-6 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                    <p>Base experience: <span class="text-gray-700 dark:text-gray-400">{{ pokemonStore.lastRequestedPokemon.base_experience }} xp</span></p>
                    <p>Height: <span class="text-gray-700 dark:text-gray-400">{{ pokemonStore.lastRequestedPokemon.height }} feet</span></p>
                    <p>Weight: <span class="text-gray-700 dark:text-gray-400">{{ pokemonStore.lastRequestedPokemon.weight }} lbs</span></p>
                    
                    <p>Types: <span v-for="(type, index) of pokemonStore.lastRequestedPokemon.types" :key="index" class="text-gray-700 dark:text-gray-400">{{ type.type.name }}, </span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemonStore } from '@/stores/pokemon';
const pokemonStore = usePokemonStore();

const route = useRoute();

pokemonStore.getPokemon(+route.params.id);

function fav() {
    pokemonStore.setFavPokemon(+route.params.id);
}
</script>
