import React from "react";
import "./styles.css";
import { Typography } from "@material-ui/core";
import HeaderBar from "./components/header/header-bar/HeaderBar";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
import { routes } from "./utils/routes";
import LoaderWorkingDemo from "./components/page-view-insight/rise-insight/LoaderWorkingDemo";

// const HelloTesting = () => {
//   return <h1>This is Test Message</h1>;
// };
export default function App() {
  return (
    <div className="App">
      {/* <HeaderBar>Welcome to My AppBar Header</HeaderBar> */}
      <Typography variant="h4">Welcome to Typescript</Typography>
      <ProtectedRoute
        component={LoaderWorkingDemo}
        path={routes.admin.viewInsight}
      />
      {/* <Todos /> */}
    </div>
  );
}
