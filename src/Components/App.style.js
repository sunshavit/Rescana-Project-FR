import styled from "styled-components";

export const AppContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
`;

export const Card = styled.div`
  width: 40%;
  height: 70%;
  padding: 20px;
  background: #ffffff;
  overflow: payload;
  border-radius: 20px;
  box-shadow: 0 0 7px 2px #d0d0d0;
`;
