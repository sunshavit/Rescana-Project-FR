import styled, { keyframes } from "styled-components";

const leftToRight = keyframes`
0% {
  transform: translateX(-900px);
  opacity:0;
}
100% {
  transform: translateX(0);
  opacity:1;
}
`;

const rightToLeft = keyframes`
0% {
  transform: translateX(900px);
  opacity:0;
}
100% {
  transform: translateX(0);
  opacity:1;
}
`;

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
  height: 70vh;
  transition: all 0.5s ease-in-out;
`;

export const Card = styled.div`
  width: 40%;
  height: 70%;
  padding: 20px;
  background: #ffffff;
  overflow: payload;
  border-radius: 20px;
  box-shadow: 0 0 10px 5px #1db954;
  animation: ${({ direction }) =>
      direction === "left" ? leftToRight : rightToLeft}
    3s ease-in-out;
`;

export const Loader = styled.div`
  visibility: ${({ isLoading }) => (isLoading ? "visible" : "hidden")};
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
  :before,
  :after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }
  color: #1db954;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  :before,
  :after {
    content: "";
    position: absolute;
    top: 0;
  }
  :before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  :after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;

export const LoadingConatiner = styled.div`
  display: flex;
  height: 60%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .MuiButton-label {
    color: white;
  }
`;

export const HorizontalRule = styled.hr`
  margin: 3rem;
  border: 0;
  height: 3px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    #1db954,
    rgba(0, 0, 0, 0)
  );
`;
