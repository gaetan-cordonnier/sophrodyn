import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Open Sans Condensed", sans-serif;
  text-transform: uppercase;
  background: linear-gradient(#30bccd, #01596b);
  width: 100vw;
  min-height: 100vh;
  color: #fff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 15vh;
  width: 70vw;
  margin-top: 5vh;
  margin-bottom: 10vh;

  .avatar {
    height: 100%;
    width: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;

    :hover {
      -webkit-filter: grayscale(100%);
    }
  }

  .person {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 55vw;
    text-align: left;
    font-size: 1.2em;
    color: #fff;
    padding-left: 5vw;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90vw;
  height: 100%;
  font-size: 1.2em;
  color: #fff;

  label {
    height: 4vh;
    width: 80%;
    font-size: 1em;
    text-align: left;
  }

  input {
    height: 4vh;
    width: 80%;
    font-size: 1.2em;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    padding-left: 10px;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 3vh;
  }

  select {
    height: 5vh;
    width: 80%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    font-size: 1.2em;
    color: #fff;
    padding-left: 10px;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 3vh;

    :hover {
      background-color: #01596b;
    }
  }

  button {
    font-size: 1.1em;
    height: 60px;
    width: 80%;
    border: none;
    color: #fff;
    background: linear-gradient(#86d87b, #42ce30);
    margin-top: 3vh;
    margin-bottom: 1.5vh;
    border-radius: 3px;
  }

  a {
    font-size: 1em;
    text-transform: none;
    color: #fff;
  }
`;
