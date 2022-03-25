import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore({
    id: 'darkMode',
    state: () => ({
        darkMode: false,
        age: 30
    }),
});
