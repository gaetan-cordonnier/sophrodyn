import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { api, cookies } from "../../conf";
import Loading from "../../pages/Loading/";
import { Container, FormContainer } from "./style";

const Login = () => {
	const [spinner, setSpinner] = useState(true);
	const [form, setForm] = useState({
		haveAccount: false,
		email: "",
		firstname: "",
		lastname: "",
		password: "",
		passwordBis: "",
	});
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => setSpinner(false), 1000);
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
		const { email, password, firstname, lastname } = form;
		let url, formData;
		if (form.haveAccount) {
			url = "/auth/signin";
			formData = { email, password };
		} else {
			url = "/auth/signup";
			formData = { email, password, firstname, lastname };
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
					<h1>Sophrodyn</h1>
					<FormContainer onSubmit={handleSubmit}>
						<input
							className="email"
							type="email"
							name="email"
							autocomplete="email"
							required
							onChange={handleChange}
						/>
						<input
							className="password"
							type="password"
							name="password"
							minLength="8"
							autocomplete="current-password"
							required
							onChange={handleChange}
						/>
						{!form.haveAccount && (
							<>
								<label htmlFor="passwordBis">Confirmation:</label>
								<input
									className="passwordBis"
									type="passwordBis"
									name="passwordBis"
									minLength="8"
									required
									onChange={handleChange}
								/>
								<label htmlFor="firstname">Prénom</label>
								<input
									type="text"
									id="firstname"
									name="firstname"
									autocomplete="given-name"
									onChange={handleChange}
								/>
								<label htmlFor="lastname">Nom</label>
								<input
									type="text"
									id="lastname"
									name="lastname"
									autocomplete="family-name"
									onChange={handleChange}
								/>
							</>
						)}
						<button type="submit" onChange={handleChange}>
							{form.haveAccount ? "Se Connecter" : "S'inscrire"}
						</button>
						<label htmlFor="haveAccount" className="haveAccount">
							{form.haveAccount ? "Créer un compte:" : "Déjà inscit ?"}
						</label>
						<input
							className="checkbox"
							type="checkbox"
							id="haveAccount"
							name="haveAccount"
							onChange={handleChange}
						/>
					</FormContainer>
				</Container>
			)}
		</>
	);
};
export default Login;
