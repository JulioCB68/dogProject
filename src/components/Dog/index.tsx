import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteFavorite, getFavorites, addFavorite } from "../../api/dog";
import { DogListI } from "../../types/dogList";
import { Modal } from "../Modal";

import { Container } from "./styles";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface IDogProps {
	item: DogListI;
}

export const Dog = ({ item }: IDogProps) => {
	const queryClient = useQueryClient();
	const [openModal, setOpenModal] = useState(false);

	const { data: favorites } = useQuery("favorites", getFavorites, {
		refetchOnWindowFocus: false,
	});

	const favoriteDog = favorites?.find(
		(dog) => dog.image_id === item.reference_image_id
	);

	const { mutate } = useMutation(
		() => {
			if (favoriteDog) {
				return deleteFavorite(favoriteDog.id);
			}
			return addFavorite(item.reference_image_id, "my-user-1234");
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries("favorites");
			},
			onError: (error) => {
				console.log(error);
			},
		}
	);

	return (
		<>
			<Container>
				<img
					// src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
					src={item.image?.url}
					onClick={() => setOpenModal(true)}
				/>
				<h3>{item.name} </h3>
				<p>Temperament: {item.temperament}</p>
				<p className="teste" onClick={() => mutate()}>
					{favoriteDog && <AiFillStar color="gold" />}
					{!favoriteDog && <AiOutlineStar color="gold" />}
				</p>
			</Container>
			{openModal && <Modal item={item} handleModal={setOpenModal} />}
		</>
	);
};
