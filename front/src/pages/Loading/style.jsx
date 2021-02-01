import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	font-family: "Open Sans Condensed", sans-serif;
	text-transform: uppercase;
	letter-spacing: 0.5rem;
	background: linear-gradient(#30bccd, #01596b);
	width: 100vw;
	height: 100vh;
	color: #fff;

	h1 {
		margin-bottom: 40vh;
		font-size: 3em;
		border: 1px solid #fff;
		padding: 0.75rem 2rem;
	}

	span {
		font-size: 1em;
		margin-top: 2vh;
		margin-bottom: 10vh;
	}
`;
