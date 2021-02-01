import { React } from "react";
import { Link } from "react-router-dom";
import { Container, FormContainer } from "./style";

const SignUp = () => {
  return (
    <Container>
      <img src="/images/avatar.svg" className="avatar" alt="Avatar" />
      <h2>- Inscription -</h2>
      <FormContainer>
        <label>Email:</label>
        <input type="email" name="emailaddress" placeholder="" required></input>
        <label>Mot de passe:</label>
        <input type="password" name="password" minLength="8" required></input>
        <label>Prénom</label>
        <input type="text" name="firstname" minLength="2" required></input>
        <label>Nom:</label>
        <input type="text" name="lastname" minLength="2" required></input>
        <label>Date de naissance:</label>
        <input type="date" name="birthday" value="2000-01-01" required></input>
        <label>Genre:</label>
        <select name="genre" required>
          <option value="">Selectionner</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>
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
        <button type="submit">S'inscrire</button>
        <Link to="/signin">J'ai déjà un compte</Link>
      </FormContainer>
    </Container>
  );
};
export default SignUp;
