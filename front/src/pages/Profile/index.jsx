import { React } from "react";
import { Container, Header, FormContainer } from "./style";

const Profile = () => {
	return (
		<Container>
			<Header>
				<img src="/images/avatar.svg" className="avatar" alt="Avatar" />
				<div className="person">
					<p>Prénom</p>
					<p>Nom</p>
					<p>XX ans</p>
				</div>
			</Header>
			<FormContainer>
				<label>Email:</label>
				<input type="email" name="emailaddress" placeholder="" required></input>
				<label>Mot de passe:</label>
				<input type="password" name="password" minLength="8" required></input>
				<label>Taille (cm):</label>
				<input
					type="number"
					name="height"
					placeholder=""
					minLength="3"
					maxLength="3"
					required
				></input>
				<label>Poids (Kg):</label>
				<input
					type="number"
					name="size"
					minLength="2"
					maxLength="2"
					required
				></input>
				<button type="submit">Modifier</button>
			</FormContainer>
		</Container>
	);
};
export default Profile;
