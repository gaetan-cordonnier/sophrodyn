import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-family: "Open Sans Condensed", sans-serif;
	text-transform: uppercase;
	letter-spacing: 0.5rem;
	background: linear-gradient(#30bccd, #01596b);
	width: 100vw;
	height: 100vh;
	color: #fff;

	h2 {
		margin-top: 2vh;
		margin-bottom: 5vh;
		font-size: 1em;
		border: 1px solid #fff;
		padding: 0.5rem 1.5rem;
	}

	h3 {
		font-size: 0.75em;
		padding-top: 3vh;
	}

	span {
		font-size: 1em;
		margin-bottom: 30vh;
	}
`;
