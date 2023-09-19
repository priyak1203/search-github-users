import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import { useGithubContext } from '../context/context';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { setDemoUser } = useGithubContext();
  const navigate = useNavigate();

  // login demo user and navigate to dashboard
  const demoUserLogin = () => {
    setDemoUser(true);
    navigate('/');
  };

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>github user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          log in / sign up
        </button>
        <button className="demo-btn" onClick={demoUserLogin}>
          demo app
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
    display: grid;
    place-items: center;
  }
  img {
    margin-bottom: 2rem;
    width: 600px;
    height: 400px;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  .demo-btn {
    background: transparent;
    border: transparent;
    margin-top: 1rem;
    text-transform: capitalize;
    font-size: 0.9rem;
    color: var(--clr-primary-5);
    cursor: pointer;
  }
  .demo-btn:hover {
    transform: scale(1.1);
    color: var(--clr-primary-1);
  }
`;

export default Login;
