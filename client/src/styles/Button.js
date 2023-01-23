import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "deepskyblue",
    "--accent": "white",
  },
  secondary: {
    "--main": "white",
    "--accent": "lightblue",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 8px 16px;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 10%;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: #FFF2F0;
  color: #4B0900;

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: #4B0900;
  border: 2px solid var(--main);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default Button;
