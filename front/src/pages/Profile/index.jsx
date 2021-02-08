import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { api, cookies } from "../../conf";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../pages/Loading/";
import { Container, FormContainer, Case } from "./style";

const Profile = () => {
	const [spinner, setSpinner] = useState(true);
	const [profile, setProfile] = useState([]);
	const [form, setForm] = useState({
		haveAccount: false,
		email: "",
		password: "",
		passwordBis: "",
		firstname: "",
		lastname: "",
		birthday: "",
		genre: "",
		height: "",
		weight: "",
		avatar: "",
	});
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => setSpinner(false), 1000);
		axios
			.get("http://localhost:5050/user/:id")
			.then(function (response) {
				setProfile(response.data[0]);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		let newForm = { ...form };
		const newValue = type === "checkbox" ? checked : value;
		newForm[name] = newValue;
		setForm(newForm);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const {
			email,
			password,
			firstname,
			lastname,
			birthday,
			genre,
			height,
			weight,
			avatar,
		} = form;
		let url, formData;
		if (form.haveAccount) {
			url = "/auth/signin";
			formData = { email, password };
		} else {
			url = "/signup";
			formData = {
				email,
				password,
				firstname,
				lastname,
				birthday,
				genre,
				height,
				weight,
				avatar,
			};
		}
		api
			.post(url, formData)
			.then(({ data }) => {
				const { token, user } = data;
				cookies.set("token", token);
				api.defaults.headers.authorization = "Bearer " + token;
				dispatch({ type: "LOGIN", user });
				toast(`You're now logged in, ${user.firstname} <3`);
			})
			.catch((e) => {
				toast.error("Aï aïe aïe..." + e);
			});
	};

	return (
		<>
			{spinner ? (
				<Loading />
			) : (
				<Container>
					<FormContainer onSubmit={handleSubmit}>
						<img src={profile.avatar} className="avatar" alt="Avatar" />
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
							<p format="dd/mm/yyyy">{profile.birthday}</p>
						</Case>
						<label htmlFor="email">Email:</label>
						<input
							className="email"
							type="email"
							name="email"
							autocomplete="email"
							required
							placeholder={profile.email}
							onChange={handleChange}
						/>
						<label htmlFor="password">Mot de passe:</label>
						<input
							type="password"
							name="password"
							autocomplete="password"
							minLength="8"
							required
							placeholder="••••••••"
							onChange={handleChange}
						/>
						<label htmlFor="passwordBis">Confirmation:</label>
						<input
							className="passwordBis"
							type="password"
							name="passwordBis"
							minLength="8"
							required
							placeholder="••••••••"
							onChange={handleChange}
						/>
						<label>Taille (cm):</label>
						<input
							type="size"
							name="height"
							minLength="3"
							maxLength="3"
							pattern="[100-250]"
							required
							onChange={handleChange}
							placeholder={profile.height}
						/>
						<label htmlFor="weight">Poids (Kg):</label>
						<input
							type="size"
							name="weight"
							pattern="[50-500]"
							minLength="2"
							maxLength="3"
							required
							onChange={handleChange}
							placeholder={profile.weight}
						/>
						<button type="submit" onChange={handleChange}>
							Modifier
						</button>
					</FormContainer>
					<Link to="/home">
						<li>Accueil</li>
					</Link>
				</Container>
			)}
			;
		</>
	);
};
export default Profile;
