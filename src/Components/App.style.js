import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
`;

export const Headr = styled.div`
  width: 100%;
  text-align: center;
`;

export const Card = styled.div`
  width: 40%;
  height: 30%;
  padding: 20px;
  background: #f2f2f2;
  overflow: payload;
  border-radius: 20px;
  box-shadow: 0 0 7px 2px #d0d0d0;
  &.output {
    width: 100%;
  }
`;
