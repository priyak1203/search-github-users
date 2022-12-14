import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>github user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          log in / sign up
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    width: 600px;
    height: 400px;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
