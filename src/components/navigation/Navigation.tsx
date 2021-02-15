import React, { useState } from "react";
import { List as MuiList } from "@material-ui/core";
import InsightsIcon from "@material-ui/icons/InsertChartOutlined";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import ProfilesIcon from "@material-ui/icons/AssignmentOutlined";
import SupportIcon from "@material-ui/icons/QuestionAnswerOutlined";
import ResourcesIcon from "@material-ui/icons/HelpOutline";
import { styled } from "@material-ui/styles";
import { IStyledArguments } from "../../types/styled-arguments";
import ResizableDrawer from "./resizable-drawer";
import NavigationAnchor from "./navigation-anchor/NavigationAnchor";
import messages from "./Navigation.intl";
//import { injectIntl, InjectedIntlProps } from "react-intl";
//import { useHasPermission } from "../../hooks/useHasPermission";
//import { Permission } from "../auth-context-provider";
//import { ConfigurationName } from "../../types/configurations";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
//import useStoreContext from "../../hooks/useStoreContext";

const List = styled(MuiList)(({ theme }: IStyledArguments) => ({
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2)
}));

export interface IConfiguration {
  id: number;
  name: string;
  value: string;
}

const GET_CONFIGURATIONS = gql`
  query GetConfigurations($configurationNames: [String]) {
    configurations(configurationNames: $configurationNames) {
      id
      name
      value
    }
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const shouldShowLeaderDashboard = useHasPermission(Permission.LEADERS_ADD);

  /*const { data, loading } = useQuery<{ configurations: IConfiguration[] }>(
    GET_CONFIGURATIONS,
    {
      variables: { configurationNames: [ConfigurationName.showResources] }
    }
  ); */

  const supportUrl =
    "https://support.shl.com/KB_ContactUs?cg=client&l=en_US&p=&pt=&lg=&cg=";

  //const [{ subscription }] = useStoreContext();
  /*const isHipo = subscription?.packages.some((pkg) =>
    pkg.type.includes("HIPO")
  );*/

  return (
    <ResizableDrawer
      variant="permanent"
      open={isOpen}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <List>
        <NavigationAnchor
          open={isOpen}
          to="/insights"
          icon={<InsightsIcon />}
          data-testid="nav-insights"
        >
          insights
        </NavigationAnchor>
        <NavigationAnchor
          open={isOpen}
          to={true ? "/people/dashboard" : "/people/leaders"}
          matches="/people/*"
          icon={<PeopleIcon />}
          data-testid="nav-people"
        >
          People
        </NavigationAnchor>
        {true && (
          <NavigationAnchor
            open={isOpen}
            to="/profiles"
            icon={<ProfilesIcon />}
            data-testid="nav-profiles"
          >
            Profiles
          </NavigationAnchor>
        )}
        {
          //!loading &&
          // data &&
          // data.configurations &&
          // data.configurations[0].value === "true" && (
          <NavigationAnchor
            open={isOpen}
            to="/resources"
            icon={<ResourcesIcon />}
            data-testid="nav-resources"
          >
            Resources
          </NavigationAnchor>
        }
        <NavigationAnchor
          open={isOpen}
          to={supportUrl}
          icon={<SupportIcon />}
          data-testid="nav-support"
          external
        >
          Support
        </NavigationAnchor>
      </List>
    </ResizableDrawer>
  );
};

export default Navigation;
