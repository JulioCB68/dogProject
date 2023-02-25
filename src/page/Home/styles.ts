import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-height: 100%;
	min-height: 100vh;
	padding: 3rem 14rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.actions {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 3rem 14rem;

		input {
			width: 75%;
			padding: 1rem;
			outline: 0;
			border: 0;
			border-radius: 0.5rem;
		}

		button {
			cursor: pointer;
			padding: 1rem 2rem;
			border-radius: 0.5rem;
			border: 0;

			:first-of-type {
				margin: 0 1rem 0 0;
			}
		}
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 20rem);
	gap: 0.75rem;
`;
