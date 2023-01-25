import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "./styles";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div className="login-form">
    <Wrapper>
      <Logo>Chef Recipes</Logo>
      <h2 className="tagline">A community for chefs. Share your recipes with the most renowned chefs around the world.</h2>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p className="accountquestion">
            Don't have an account?</p> &nbsp;
            <Button onClick={() => setShowLogin(false)}>
              Sign Up
            </Button> 
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p className="accountquestion">
            Already have an account?</p> &nbsp;
            <Button onClick={() => setShowLogin(true)}>
              Log In
            </Button>
        </>
      )}
    </Wrapper>
    </div>
  );
}

const Logo = styled.h1`
  font-family: "Sansita", cursive;
  color: white;
  text-shadow: 1px 1px 10px #310600;
  font-size: 80px;
  margin: 8px 0 16px;
  text-align: center;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;