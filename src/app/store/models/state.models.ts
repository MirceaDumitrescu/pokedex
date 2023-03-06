import { Pokemon } from "src/app/api/api.service";

export interface State {
	readonly favorites: Array<Pokemon>;
}
