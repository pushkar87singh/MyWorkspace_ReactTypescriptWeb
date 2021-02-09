import React from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { styled } from "@material-ui/core";
import Permission from "../auth-context-provider/Permission";
import { IStyledArguments } from "../../types/styled-arguments";
//import IStyledArguments from "../../types/styled-arguments";

const HeaderSpacer = styled("div")(({ theme }: IStyledArguments) => ({
  height: theme.layout.headerHeight,
  width: "100%"
}));

export interface IProtectedRouteProps extends RouteComponentProps {
  component: any;
  /**
   * Where the user should be redirected to if not authenticated or permitted
   *
   * @default "/login"
   */
  unauthorizedRedirectTo?: string;
  withPermission?: Permission;
  leader?: boolean;
  leaderComponent?: React.ElementType;
  path: string;
}

export function ProtectedRoute<T = void>() {}
