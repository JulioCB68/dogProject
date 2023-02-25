import {
	Container,
	Content,
	Header,
	SubContainer,
	Info,
	ImageContainer,
} from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { GiSittingDog } from "react-icons/gi";
import { DogListI } from "../../types/dogList";

interface IModalProps {
	item: DogListI;
	handleModal: (arg: boolean) => void;
}

export const Modal = ({ item, handleModal }: IModalProps) => {
	return (
		<>
			<Container key={item.id}>
				<Content>
					<Header>
						<button onClick={() => handleModal(false)}>
							<FiArrowLeft size={24} />
						</button>
						<button onClick={() => handleModal(false)}>
							<GiSittingDog size={40} />
						</button>
					</Header>
					<SubContainer>
						<Info>
							<div>
								<h4> Name: </h4>
								<p> {item.name} </p>
							</div>
							<div>
								<h4> Temperament: </h4>
								<p> {item.temperament} </p>
							</div>
							<div>
								<h4> Bred For: </h4>
								<p> {item.bred_for} </p>
								<h4> Breed Group: </h4>
								<p> {item.breed_group} </p>
							</div>
							<div>
								<h4> Life Time: </h4>
								<p> {item.life_span} </p>
							</div>
							<div>
								<h4> Height: </h4>
								<p> {item.height.metric} cms </p>
								<h4> Weight: </h4>
								<p> {item.weight.metric} kgs </p>
							</div>
						</Info>
						<ImageContainer>
							<img src={item.image?.url} alt="Dog Image" />
						</ImageContainer>
					</SubContainer>
				</Content>
			</Container>
		</>
	);
};
