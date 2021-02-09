import { render } from "react-dom";

import App from "./App";
import theme from "./theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const rootElement = document.getElementById("root");
render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
