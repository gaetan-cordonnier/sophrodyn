import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	font-family: "Open Sans Condensed", sans-serif;
	text-transform: uppercase;
	background: linear-gradient(#30bccd, #01596b);
	width: 100vw;
	height: 100vh;
	color: #fff;

	h1 {
		text-transform: uppercase;
		letter-spacing: 0.5rem;
		margin-top: 10vh;
		margin-bottom: 10vh;
		font-size: 2.5em;
		border: 1px solid #fff;
		padding: 0.75rem 2rem;
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 90vw;
	height: 55vh;
	font-size: 1.2em;
	color: #fff;

	input {
		height: 15%;
		width: 80%;
		font-size: 1.2em;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid #fff;
		color: #fff;
		padding-left: 35px;
		box-sizing: border-box;
		outline: none;
		background-size: 1.2em;
		background-position: 0px 12px;
		background-repeat: no-repeat;
		margin-bottom: 3vh;

		&.email {
			background-image: url("/images/arobase.svg");
		}

		&.password {
			background-image: url("/images/lock.svg");
			margin-bottom: 2vh;
		}
	}

	button {
		font-size: 1.1em;
		height: 15%;
		width: 80%;
		border: none;
		color: #fff;
		background: linear-gradient(#86d87b, #42ce30);
		margin-bottom: 1.5vh;
		border-radius: 3px;

		&.signup {
			margin-top: 3vh;
			background: linear-gradient(#977bd8, #7850d6);
		}

		&.facebook {
			background: #395498;
		}

		&.twitter {
			background: #52a8e7;
		}
	}

	span {
		font-size: 1em;
		color: #fff;
	}

	a {
		font-size: 1em;
		text-transform: none;
		color: #fff;
	}
`;

export const SocialConnect = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 8vh;
	width: 72vw;
	margin-top: 1.5vh;
	margin-bottom: 1.5vh;

	button {
		height: 100%;
		width: 45%;
	}
`;
