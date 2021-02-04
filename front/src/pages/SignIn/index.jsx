import { React } from "react";
import { Link } from "react-router-dom";
import { Container, FormContainer, SocialConnect } from "./style";

const SignIn = () => {
	return (
		<Container>
			<h1>Sophrodyn</h1>
			<FormContainer>
				<input
					className="email"
					type="email"
					name="emailaddress"
					required
				></input>
				<input
					className="password"
					type="password"
					name="password"
					minLength="8"
					required
				></input>
				<button type="submit">Se connecter</button>
				<button type="submit" className="signup">
					S'inscrire avec email
				</button>
				<span>Ou</span>
				<SocialConnect>
					<button type="submit" className="facebook">
						Facebook
					</button>
					<button type="submit" className="twitter">
						Twitter
					</button>
				</SocialConnect>
				<Link to="/">Mot de passe oublié ?</Link>
			</FormContainer>
		</Container>
	);
};
export default SignIn;
