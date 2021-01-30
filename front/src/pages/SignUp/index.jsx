import React from "react";
import { Container, FormContainer, SocialConnect } from "./style";

const SignUp = () => {
	return (
		<Container>
			<h1>Sophrodyn</h1>
			<form>
				<FormContainer>
					<input
						className="email"
						type="email"
						name="emailaddress"
						placeholder=""
						required
					></input>
					<br></br>
					<input
						className="password"
						type="password"
						name="password"
						placeholder=""
						minLength="8"
						required
					></input>
					<br></br>
					<button>S'inscrire</button>
					<span>Or</span>
					<SocialConnect>
						<button>Facebook</button>
						<button>Twitter</button>
					</SocialConnect>
					<a href="/">Mot de passe oublié ?</a>
				</FormContainer>
			</form>
		</Container>
	);
};
export default SignUp;
