import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #c71467;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  box-shadow: 0px 10px 13px -10px #000000;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.5em;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  Link {
  }
`;

const StyledLink = styled(Link) `
color: black;
text-decoration: none;
font-size: 1.5em;
font-weight: bold; `

export default function Navbar() {
  return (
    <Wrapper>
      <h1>Movie App</h1>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </div>
    </Wrapper>
  );
}
