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

export const ContainerDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 2vh 0;
`;

export const Description = styled.p`
  font-size: 1.5rem;
`;

export const ProductImg = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 184px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #00cc39;
  width: 60%;
  color: black;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  border: 1px solid black;
`;
