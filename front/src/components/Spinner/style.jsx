import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8vh;

  .spinner {
    width: 120px;
    height: 120px;
    position: absolute;
    z-index: 0;
  }

  .logo {
    width: 90px;
    height: 90px;
    position: absolute;
    z-index: 1;
  }
`;
