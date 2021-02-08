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

	h1 {
		margin-bottom: 2vh;
		font-size: 3em;
		border: 1px solid #fff;
		padding: 0.75rem 2rem;
	}

	h2 {
		font-size: 1.5em;
	}

	span {
		font-size: 1em;
		margin-bottom: 30vh;
	}

	a {
		font-size: 1.5em;
		list-style: none;
		text-decoration: none;
		color: #fff;
	}
`;
