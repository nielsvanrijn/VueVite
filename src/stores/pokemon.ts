import type { ListPokemon, Pokemon } from '@/shared/interfaces/Pokemon';
import { defineStore } from 'pinia';

export const usePokemonStore = defineStore({
    id: 'pokemon',
    state: () => ({
        allPokemon: [] as Pokemon[],
        allPokemonList: [] as ListPokemon[],
        allPokemonNextURI: '',
        allPokemonPrevURI: '',

        lastRequestedPokemon: null as null | Pokemon,
        favPokemon: null as null | Pokemon,
        totalNrOfPokemon: NaN
    }),
    getters: {
        // doubleCount: (state) => state.counter * 2
        ids: (state) => { return state.allPokemonList.map(p => +p.url.match(/\/(\d+)\//)![1]); }
    },
    actions: {
        getAllPokemon() {
            return fetch('https://pokeapi.co/api/v2/pokemon?limit=5').then((response) => response.json().then((res) => {
                this.allPokemonList = res.results;
                this.allPokemonNextURI = res.next;
                this.allPokemonPrevURI = res.previous;
                this.totalNrOfPokemon = res.count;
                console.log(this.allPokemon);
            }));
        },
        getAllPokemonNext() {
            fetch(this.allPokemonNextURI).then((response) => response.json().then((res) => {
                this.allPokemonList = res.results;
                this.allPokemonNextURI = res.next;
                this.allPokemonPrevURI = res.previous;
            }));
        },
        getAllPokemonPrev() {
            fetch(this.allPokemonPrevURI).then((response) => response.json().then((res) => {
                this.allPokemonList = res.results;
                this.allPokemonNextURI = res.next;
                this.allPokemonPrevURI = res.previous;
            }));
        },
        async getPokemon(index: number): Promise<Pokemon> {
            console.log(this.allPokemonList, index);
            if (this.allPokemonList.length < 1) await this.getAllPokemon();
            return fetch(this.allPokemonList[index].url).then(res => res.json().then(res => {
                console.log(res);
                this.lastRequestedPokemon = res;
                return res;
            }));
        },

        async setFavPokemon(index: number) {
            this.favPokemon = await this.getPokemon(index);
        }
    }
});
