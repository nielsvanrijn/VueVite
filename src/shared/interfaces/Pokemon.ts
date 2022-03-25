export interface ListPokemon {
    name: string
    url: string
}
export interface Pokemon {
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    name: string;
    order: number;
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    };
    types: [
        {
            slot: number,
            type: {
                name: string;
                url: string;
            }
        }
    ];
    weight: number;
}