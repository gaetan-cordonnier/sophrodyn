import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	font-family: "Open Sans Condensed", sans-serif;
	background: linear-gradient(#30bccd, #01596b);
	width: 100vw;
	height: 100vh;
	color: #fff;

	li {
		font-size: 1.5em;
		text-transform: uppercase;
		letter-spacing: 0.5rem;
		list-style: none;
		text-decoration: none;
		color: #fff;
	}

	h2 {
		margin-top: 3vh;
		margin-bottom: 6vh;
		font-size: 1em;
		text-transform: uppercase;
		letter-spacing: 0.5rem;
		border: 1px solid #fff;
		padding: 0.5rem 1.5rem;
	}

	figure {
		width: 70%;
		min-height: 30%;
		background: #ffeea3;
		padding: 2em;
		margin-bottom: 2vh;
	}

	p {
		text-align: justify;
		line-height: 120%;
		font-size: 1.2em;
		font-family: "Lato", sans-serif;
		color: #8a8a8a;
	}
`;
