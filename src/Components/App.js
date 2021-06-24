import { useScroll } from "../hooks/useScroll";
import * as Styled from "./App.style";
import Configuration from "./Domains/Configuration";

function App() {
  const array = ["sun", "sun1", "sun2", "sun3", "sun4", "sun5"];
  const scrollValue = useScroll(array);
  console.log(scrollValue);
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
