// React
import React from "react";
import { useHistory } from "react-router";
// Others
import ButtonGroup from "./ButtonGroup";
import arrayBuilder from "./ButtonArrayBuilder"
import i18n from "./../../i18n/i18n"
import logo from "./logo.svg";
import "./NavigationBar.css";

const NavigationBar = () => {

  const history = useHistory();
  const navigateUsersForm = () => { history.push("/users-form");}
  const navigateUsersTable = () => { history.push("/users-table");}
  const navigateResourcesForm = () => { history.push("/resources-form");}
  const navigateResourcesTable = () => { history.push("/resources-table");}
  const navigateBookingsForm = () => { history.push("/");}
  const navigateBookingsTable = () => { history.push("/");}
  const navigateReportUsers = () => { history.push("/");}
  const navigateReportResources = () => { history.push("/");}
  const navigateReportBookings= () => { history.push("/");}
  const navigateSystem= () => { history.push("/");}
  const navigateLogin = () => { history.push("/login");}
  const btnUsers = arrayBuilder.getArrayAdmin(navigateUsersForm, navigateUsersTable);
  const btnResources = arrayBuilder.getArrayAdmin(navigateResourcesForm, navigateResourcesTable);
  const btnBookings = arrayBuilder.getArrayAdmin(navigateBookingsForm, navigateBookingsTable);
  const btnReports = arrayBuilder.getArrayReports(
    navigateReportUsers, 
    navigateReportResources,
    navigateReportBookings
  );
  const btnOptions = arrayBuilder.getArrayOptions(navigateSystem, navigateLogin)

  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="/nav-bar">
        <img src={logo} className="App-logo-bar" alt="logo" />
      </a>
      <ul className="navbar-nav">
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsUsers}
          buttonsArray={btnUsers}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsResources}
          buttonsArray={btnResources}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsBookings}
          buttonsArray={btnBookings}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsReports}
          buttonsArray={btnReports}
        >
        </ButtonGroup>
      </ul>
      <ul className="navbar-nav ml-auto nav-flex-icons">
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsOptions}
          buttonsArray={btnOptions}
        >
        </ButtonGroup>
      </ul>
    </nav>
  </div>
  );
};

export default NavigationBar;
