import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Open Sans Condensed", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  background: linear-gradient(#30bccd, #01596b);
  width: 100vw;
  min-height: 100vh;
  color: #fff;
  padding-bottom: 3vh;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    margin-top: 2vh;
    margin-bottom: 5vh;
    font-size: 1em;
    border: 1px solid #fff;
    padding: 0.5rem 1.5rem;
  }

  h3 {
    font-size: 0.75em;
    padding-top: 3vh;
  }

  audio {
    margin-top: 3vh;
    margin-bottom: 2vh;
  }

  li {
    font-size: 1.5em;
    list-style: none;
    text-decoration: none;
    color: #fff;
  }
`;
