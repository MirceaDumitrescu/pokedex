import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "src/app/api/api.service";
import { addToFavorite } from "../models/actions/pokemons.actions";

const initialState: Array<Pokemon> = [
	{
		abilities: [],
		forms: [],
		game_indices: [],
		height: 0,
		held_items: [],
		id: 0,
		is_default: true,
		location_area_encounters: "",
		moves: [],
		name: "",
		order: 0,
		past_types: [],
		species: [],
		sprites: [],
		stats: [],
		types: [],
		weight: 0,
	},
];

export const counterReducer = createReducer(
	initialState,
	on(addToFavorite, (state: Pokemon[]) => [...state, state])
);
