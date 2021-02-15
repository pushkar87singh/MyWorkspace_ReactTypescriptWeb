import React from "react";
import HeaderBar from "./header-bar/HeaderBar";
//import useLocaleContext from "../../hooks/useLocaleContext";
//import LanguageSwitcher from "../language-switcher";
//import UserMenu from "./user-menu";
//import HeaderLogo from "./HeaderLogo";
import { Box } from "@material-ui/core";
import Link from "../link/Link";
//import { ActiveSubscriptionSnackbar } from "./ActiveSubscriptionSnackbar";

const Header = () => {
  //const [currentLocale, saveLocale] = useLocaleContext();

  return (
    <HeaderBar data-testid="header">
      <Link to="/">{/* <HeaderLogo /> */}</Link>
      <Box
        flex={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        {/* <LanguageSwitcher light locale={currentLocale} onChange={saveLocale} /> */}
        {/* <UserMenu /> */}
        Here will be your App bar menues
      </Box>

      {/* <ActiveSubscriptionSnackbar /> */}
    </HeaderBar>
  );
};

export default Header;
