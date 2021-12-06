import styled from "styled-components";

export const Card = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px auto;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

export const ProductImg = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 184px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const ContainerDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 2vh 0;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  border: 1px solid black;
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
