import React from "react";
import { SpContainer } from "./style";
import Spinner from "../../components/Spinner/";

const Loading = () => {
  return (
    <SpContainer>
      <h1>Sophrodyn</h1>
      <Spinner />
      <span>Chargement</span>
    </SpContainer>
  );
};
export default Loading;
