import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/api/api.service";
import { FetchResponse } from "../../reducers/fetchedData.reducer";

export enum ActionPokemonType {
  ADD_ITEM = "[POKEMON] Add Pokemon",
  REMOVE_ITEM = "[POKEMON] Remove Pokemon",
  FETCH_DATA = "[POKEMON] Fetch Data",
}

export const FavoritePokemonAction = createAction(ActionPokemonType.ADD_ITEM, props<{ payload: Pokemon }>());

export const FavoritePokemonActionRemove = createAction(ActionPokemonType.REMOVE_ITEM, props<{ payload: Pokemon }>());

export const FetchDataAction = createAction(ActionPokemonType.FETCH_DATA, props<{ payload: Partial<FetchResponse>, page: number }>());
