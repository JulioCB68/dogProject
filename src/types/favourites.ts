export interface FavouritesI {
	id: number;
	user_id: string;
	image_id: string;
	sub_id: string;
	created_at: string;
	image: {
		id: number;
		url: string;
	};
}
