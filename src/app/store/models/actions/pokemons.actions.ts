import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/api/api.service";

export enum ActionPokemonType {
	ADD_ITEM = "[POKEMON] Add Pokemon",
	REMOVE_ITEM = "[POKEMON] Remove Pokemon",
}

export const FavoritePokemonAction = createAction(ActionPokemonType.ADD_ITEM, props<{ payload: Pokemon }>());

export const FavoritePokemonActionRemove = createAction(ActionPokemonType.REMOVE_ITEM, props<{ payload: Pokemon }>());
