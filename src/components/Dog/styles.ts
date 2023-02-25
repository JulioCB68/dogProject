import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	position: relative;
	height: 100%;
	padding: 1rem 1rem 0.5rem;
	background: #535c70;
	cursor: pointer;
	border-radius: 0.25rem;
	transition: all ease-in-out 300ms;

	:hover {
		transform: scale(0.95);
	}

	h3,
	p {
		padding: 0.5rem 1rem;
		color: #ffffff;
	}

	p {
		color: #e5e5e5;
		opacity: 0.7;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	button {
		background: transparent;
		border: none;
		outline: none;
		color: #ffffff;
		cursor: pointer;
	}

	img {
		/* min-width: 15rem;
		max-width: 15rem; */
		/* max-height: 10rem; */
		width: 100%;
		height: 15rem;
		object-fit: cover;
		cursor: pointer;
		border-radius: 0.25rem;
	}

	.teste {
		position: absolute;
		top: 0;
		right: 0;
		background: #444b5c;
		border-radius: 0.25rem;
		opacity: 1;
	}
`;
