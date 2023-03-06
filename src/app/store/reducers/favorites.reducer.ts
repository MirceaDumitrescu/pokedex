import { Action, createReducer, on } from "@ngrx/store";
import { Pokemon } from "src/app/api/api.service";
import { FavoritePokemonAction, FavoritePokemonActionRemove } from "../models/actions/pokemons.actions";

const initialState: Array<Pokemon> = [];

const reducer = createReducer(
	initialState,
	on(FavoritePokemonAction, (state, action) => {
		if (checkIfPokemonIsFavorite(state, action)) {
			return state;
		}
		return [...state, action.payload];
	}),
	on(FavoritePokemonActionRemove, (state, action) => {
		return state.filter((pokemon: Pokemon) => pokemon.id !== action.payload.id);
	})
);

const checkIfPokemonIsFavorite = (state: Array<Pokemon>, action: any): boolean => {
	return state.some((pokemon: Pokemon) => pokemon.id === action.payload.id);
};

export function PokemonReducer(state: Array<Pokemon> | undefined, action: Action) {
	return reducer(state, action);
}
