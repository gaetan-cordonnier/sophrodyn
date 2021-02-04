import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, FormContainer, Case } from "./style";

const Profile = () => {
	const [profile, setProfile] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5050/user/3")
			.then(function (response) {
				setProfile(response.data[0]);
				console.log(profile);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<Container>
			<FormContainer>
				<img src={profile.picture} className="avatar" alt="Avatar" />
				<label>Prénom:</label>
				<Case>
					<p>{profile.firstname}</p>
				</Case>
				<label>Nom:</label>
				<Case>
					<p>{profile.lastname}</p>
				</Case>
				<label>Date de naissance:</label>
				<Case>
					<p>{profile.birthday}</p>
				</Case>
				<label>Email:</label>
				<input
					type="email"
					name="emailaddress"
					placeholder=""
					required
					value={profile.email}
				></input>
				<label>Mot de passe:</label>
				<input
					type="password"
					name="password"
					minLength="8"
					required
					value="••••••••"
				></input>
				<label>Taille (cm):</label>
				<Case>
					<p>{profile.height}</p>
				</Case>
				<label>Poids (Kg):</label>
				<input
					type="number"
					name="size"
					minLength="2"
					maxLength="2"
					required
					value={profile.weight}
				></input>
				<button type="submit">Modifier</button>
			</FormContainer>
			<Link to="/home">
				<li>Accueil</li>
			</Link>
		</Container>
	);
};
export default Profile;
