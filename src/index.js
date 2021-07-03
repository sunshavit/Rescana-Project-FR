import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1DB954",
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
