import { Pokemon } from "src/app/api/api.service";
import { FetchResponse } from "../reducers/fetchedData.reducer";

export interface State {
  readonly favorites: Array<Pokemon>;
  readonly fetchedData: FetchResponse
}
