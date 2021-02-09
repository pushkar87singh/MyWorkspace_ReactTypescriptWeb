import React from "react";
import "./styles.css";
import { Typography } from "@material-ui/core";
import HeaderBar from "./components/header/header-bar/HeaderBar";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
export default function App() {
  return (
    <div className="App">
      <HeaderBar>Welcome to My AppBar Header</HeaderBar>
      <Typography variant="h4">Welcome to Typescript</Typography>
      <ProtectedRoute />
    </div>
  );
}
