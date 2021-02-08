import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api, cookies } from "../../conf";

import Loading from "../../pages/Loading/";
import { Container, FormContainer } from "./style";

const Login = () => {
  const [spinner, setSpinner] = useState(true);
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
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newForm = { ...form };
    const newValue = type === "checkbox" ? checked : value;
    newForm[name] = newValue;
    setForm(newForm);
    console.log(form);
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
      console.log(form);
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
        toast(`Connecté en tant que ${user.firstname}!`);
        history.push("/home");
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
                  type="password"
                  name="passwordBis"
                  minLength="8"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="firstname">Prénom</label>
                <input
                  type="text"
                  name="firstname"
                  autocomplete="given-name"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="lastname">Nom</label>
                <input
                  type="text"
                  name="lastname"
                  autocomplete="family-name"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="birthday">Date de naissance:</label>
                <input
                  type="date"
                  name="birthday"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="genre">Genre:</label>
                <select
                  name="genre"
                  autocomplete="sex"
                  required
                  onChange={handleChange}
                >
                  <option value="">Selectionner</option>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
                <label htmlFor="height">Taille (cm):</label>
                <input
                  type="size"
                  name="height"
                  minLength="3"
                  maxLength="3"
                  pattern="[1-2][0-9][0-9]"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="weight">Poids (Kg):</label>
                <input
                  type="size"
                  name="weight"
                  pattern="[0-9][0-9]"
                  minLength="2"
                  maxLength="3"
                  required
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
