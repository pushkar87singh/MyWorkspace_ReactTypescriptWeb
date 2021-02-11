import { render } from "react-dom";

import App from "./App";
import theme from "./theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

/*import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://30tqr.sse.codesandbox.io/graphql",
  //uri: "https://30tqr.sse.codesandbox.io/graphql?query={hello}",
  cache: new InMemoryCache()
});
*/
const rootElement = document.getElementById("root");
render(
  // <ApolloProvider client={client}>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  // </ApolloProvider>,
  rootElement
);
