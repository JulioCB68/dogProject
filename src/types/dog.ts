export interface DogI {
	bred_for: string;
	breed_group: string;
	height: {
		imperial: string;
		metric: string;
	};
	id: number;
	life_span: string;
	name: string;
	origin: string;
	reference_image_id: string;
	temperament: string;
	weight: {
		imperial: string;
		metric: string;
	};
}
