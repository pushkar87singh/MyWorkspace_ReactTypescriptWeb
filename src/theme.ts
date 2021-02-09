import { createMuiTheme } from "@material-ui/core/styles";

/*------------------------------*/
/*        Color Variables       */
/*------------------------------*/
const primaryMain = "#003045";
const primaryLight = "#1d5873";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryMain,
      light: primaryLight
    }
  }
});

export default theme;
