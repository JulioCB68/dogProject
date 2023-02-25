import { DogListI } from "../types/dogList";

export const sortDogs = (dogs: Array<DogListI>, ordenation: string) => {
	return ordenation === "ASC"
		? dogs.sort((a, b) => a.id - b.id)
		: dogs.sort((a, b) => b.id - a.id);
};
