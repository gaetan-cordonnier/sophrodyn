import React from "react";
import { Container } from "./style";
import Spinner from "../../components/Spinner/";

const Loading = () => {
  return (
    <Container>
      <h1>Sophrodyn</h1>
      <Spinner />
      <span>Chargement</span>
    </Container>
  );
};
export default Loading;
