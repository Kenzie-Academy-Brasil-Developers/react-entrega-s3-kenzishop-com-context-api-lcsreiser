import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const HomePage = styled.div`
  color: black;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: #993399;
  color: white;
  border-radius: 5px;
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  margin-top: 2vh;
  margin-right: 2vh;
`;

export const Main = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 700px) {
    width: 80%;
    margin: auto;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  padding: 15px;
  width: 100%;
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 2vh;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 1rem;
    width: 100%;
  }
`;

export const Title = styled.h2`
  background-color: green;
  color: white;
  padding: 15px;
  border-radius: 10px;
  word-break: break-word;
`;
