import React from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { styled } from "@material-ui/core";
import Permission from "../auth-context-provider/Permission";
import { IStyledArguments } from "../../types/styled-arguments";
import { routes } from "../../utils/routes";
import { IUser } from "../../types/user";

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
const FlexContainer = styled("div")(({ theme }: IStyledArguments) => ({
  display: "flex",
  minHeight: `calc(100vh - ${theme.layout.headerHeight})`
}));

const ComponentWrapper = styled("div")(({ theme }: IStyledArguments) => ({
  width: "100%",
  marginLeft: theme.layout.navDrawerWidthClosed,
  [theme.breakpoints.up("xl")]: {
    marginLeft: 0
  }
}));

type Win = Window & typeof globalThis;
type ExtendedWindow = Win & {
  prevLocation: string;
};
const doNavLog = (path: string, win: ExtendedWindow) => {
  if (!win.prevLocation) {
    win.prevLocation = path;
  } else {
    //Please uncomment below line after Appolo client import
    //socket.emit('navigate-log', [win.prevLocation, path]);

    win.prevLocation = path;
  }
};

export function ProtectedRoute<T = void>({
  component,
  unauthorizedRedirectTo = routes.login,
  withPermission,
  leader,
  leaderComponent,
  ...rest
}: IProtectedRouteProps & Partial<T>): JSX.Element {
  let Component: React.ElementType = component;
  return (
    <>
      <Component {...rest} />
    </>
  );
}
