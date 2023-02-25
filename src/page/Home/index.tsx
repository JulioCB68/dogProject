import { useState } from "react";

import { useQuery } from "react-query";
import { getAllBreeds, getPerBreed } from "../../api/dog";

import useDebounce from "../../hooks/useDebounce";
import { sortDogs } from "../../utils/ordenation";

import { Dog } from "../../components/Dog";

import { Container, Content } from "./styles";

import { BiSortDown, BiSortUp } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

type OrdenationType = "ASC" | "DESC";

const Home = () => {
	const [name, setName] = useState("");
	const [page, setPage] = useState(0);
	const [ordenation, setOrdenation] = useState<OrdenationType>("ASC");

	const debounceChange = useDebounce(setName, 1000);

	const { data: dogs, isLoading } = useQuery(
		["dog-list", page],
		() => getAllBreeds(10, page),
		{
			enabled: !name,
			refetchOnWindowFocus: false,
		}
	);

	const { data: dogName } = useQuery(["dog", name], () => getPerBreed(name), {
		enabled: !!name,
		refetchOnWindowFocus: false,
		onError: (error) => {
			console.error(error);
		},
	});

	const handleOrder =
		dogs &&
		sortDogs(dogs, ordenation).map(({ ...item }) => (
			<Dog key={item.id} item={item} />
		));

	return (
		<>
			<Container>
				<div className="actions">
					<input
						type="text"
						placeholder="Search for Breed"
						onChange={(e) => debounceChange(e.target.value)}
					/>
					<div>
						<button onClick={() => setOrdenation("ASC")}>
							<BiSortUp size={20} />
						</button>
						<button onClick={() => setOrdenation("DESC")}>
							<BiSortDown size={20} />
						</button>
					</div>

					<div>
						<button onClick={() => setPage((old) => Math.max(old - 1, 0))}>
							<BsArrowLeft size={20} />
						</button>
						<button onClick={() => setPage((old) => old + 1)}>
							<BsArrowRight size={20} />
						</button>
					</div>
				</div>
				<Content>
					{isLoading && <h1>Carregando...</h1>}
					{dogName &&
						dogName?.map((item, index) => <Dog key={index} item={item} />)}
					{!dogName && handleOrder}
				</Content>
			</Container>
		</>
	);
};

export default Home;
