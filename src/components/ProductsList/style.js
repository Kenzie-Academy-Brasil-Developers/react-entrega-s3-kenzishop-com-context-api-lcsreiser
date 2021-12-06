import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: #993399;
  color: black;
`;

export const Main = styled.div`
  width: 80%;
  margin: auto;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #ad47ac59;
  padding: 15px;
`;

export const Button = styled.button`
  border: 2px solid white;
  border-radius: 3rem;
  font-family: roboto;
  font-size: 20px;
  font-weight: 100;
  overflow: hidden;
  padding: 0.5rem 2rem;
  position: relative;
  text-decoration: none;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 0;
  cursor: pointer;
  color: black;

  &::after {
    background-color: #00cc39;
    border-radius: 3rem;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate (-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: 0.2s transform ease-out;
    will-change: transform;
    z-index: -1;
  }

  &:hover::after {
    transform: translate (0, 0);
  }

  &:hover {
    border: 2px solid transparent;
    color: indigo;
    transform: scale(1.05);
    will-change: transform;
  }
`;
