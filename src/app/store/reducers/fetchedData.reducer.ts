import { Action, createReducer, on } from "@ngrx/store";
import { FetchDataAction } from "../models/actions/pokemons.actions";


export type FetchResponse = {
  [key: string | number]: any
}

const fetchResponse: FetchResponse = {};

const reducer = createReducer(
  fetchResponse,
  on(FetchDataAction, (state: FetchResponse, action) => {
    return { ...state, [action.page]: action.payload }
  }
  ));


export function FetchDataReducer(state: FetchResponse | undefined, action: Action) {
  return reducer(state, action);
}
