import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { styled } from "@material-ui/styles";
import { IstyledArguments } from "../../../types/styled-arguments";

const HeaderBar = styled((props) => (
  <AppBar position="fixed" {...props} />
))((theme: IstyledArguments) => ({}));

export default HeaderBar;
