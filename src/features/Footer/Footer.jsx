import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #c71467;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;

  h1 {
    margin: 0;
    padding: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export default function Footer() {
  return <Wrapper />
}