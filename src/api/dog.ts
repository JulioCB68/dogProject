import { DogI } from "../types/dog";
import { DogListI } from "../types/dogList";
import { FavouritesI } from "../types/favourites";
import { api } from "./api";

export const getAllBreeds = async (
	limit: number,
	page: number
): Promise<DogListI[]> => {
	const response = await api.get(`/breeds?limit=${limit}&page=${page}`);
	return response.data;
};

export const getPerBreed = async (name: string): Promise<DogI[]> => {
	const response = await api.get(`/breeds/search?q=${name}`);
	return response.data;
};

export const getFavorites = async (): Promise<FavouritesI[]> => {
	const response = await api.get("/favourites");
	return response.data;
};

export const addFavorite = async (
	image_id: string,
	sub_id: string
): Promise<FavouritesI[]> => {
	const response = await api.post("/favourites", {
		image_id: image_id,
		sub_id: sub_id,
	});
	return response.data;
};

export const deleteFavorite = async (id: number) => {
	const response = await api.delete(`/favourites/${id}`);
	return response.data;
};
