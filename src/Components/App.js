import { useReducer, useState } from "react";
import * as Styled from "./App.style";
import Header from "./common/Header";
import Configuration from "./Domains/Configuration";
import reducer from "../reducers/config";
import Inputs from "./Domains/Inputs";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Output from "./Domains/Output";
import Footer from "./common/Footer";

function App() {
  const [configs, dispatch] = useReducer(reducer, [
    { domain: "", priority: 1 },
  ]);
  const [inputs, dispatchInputs] = useReducer(reducer, [{ domain: "" }]);
  const [error, setError] = useState({ isError: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const [output, setOutput] = useState([]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError({ isError: false, message: "" });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api`, {
        input: inputs.map((input) => input.domain),
        config: configs,
      });
      setOutput(res.data);
    } catch (err) {
      setError({ isError: true, message: err.response.data });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Styled.AppContainer>
      <Header />
      <Styled.HorizontalRule />
      <Styled.Container>
        <Styled.Card direction={"left"}>
          <Configuration configs={configs} dispatch={dispatch} />
        </Styled.Card>
        <Styled.LoadingConatiner>
          <Styled.Loader isLoading={isLoading} />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Styled.LoadingConatiner>
        <Styled.Card direction={"right"}>
          <Inputs inputs={inputs} dispatch={dispatchInputs} />
        </Styled.Card>
      </Styled.Container>
      {!!output.length && (
        <>
          <h2>Results</h2>
          <Styled.Card>
            <Output data={output} />
          </Styled.Card>
        </>
      )}
      <Styled.HorizontalRule />
      <Footer />
      <Snackbar
        open={error.isError}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert severity="error">{error.message}</MuiAlert>
      </Snackbar>
    </Styled.AppContainer>
  );
}

export default App;
