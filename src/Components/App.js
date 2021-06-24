import * as Styled from "./App.style";
import Configuration from "./Domains/Configuration";

function App() {
  return (
    <Styled.Container>
      <Styled.Headr>
        welcome to our website we are going to use to connect
      </Styled.Headr>
      <Styled.Card>
        <Configuration />
      </Styled.Card>
      <Styled.Card>sun</Styled.Card>
      <Styled.Card className="output">sun</Styled.Card>
    </Styled.Container>
  );
}

export default App;
