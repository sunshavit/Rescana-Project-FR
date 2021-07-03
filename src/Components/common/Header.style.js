import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  width: calc(100% - 2rem);
  padding: 1rem;
`;

const Header = styled.h1`
  font-size: 3em;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 10%;
  transition: all 0.5s;
  animation: run 2s ease-in-out;
  box-shadow: 2px #fbff00;

  @keyframes run {
    0% {
      transform: translate(400px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate(0px);
    }
  }
`;
const MainP = styled.p``;

const SecondP = styled.p``;

const List = styled.ul``;

const ListItem = styled.li``;

const Image = styled.img`
  width: 40%;
  height: auto;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
`;
export {
  Header,
  MainP,
  SecondP,
  ListItem,
  List,
  Image,
  HeadingContainer,
  Container,
  Logo,
  LogoContainer,
  InnerContainer,
};
