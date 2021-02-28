// React
import React from "react";
import { Route, Switch } from "react-router-dom";
// Components
import App from "./App";
import Login from "./components/login/Login";
import NavigationBar from "./components/nav-bar/NavigationBar";
import UsersTable from "./components/users/Table";
import ResourcesTable from "./components/resources/Table";
import UsersForm from "./components/users/Form";
import ResourcesForm from "./components/resources/Form";
import BookingsResources from "./components/bookings/resources/Table";
import BookingsSelectDate from "./components/bookings/date/DateRegister";
import BookingsRegisterHours from "./components/bookings/avaliable-hours/Table";
import BookingsShowHours from "./components/bookings/reserved-hours/Table";
import BillsDate from "./components/bills/date/DateSelect";
import BillsUsers from "./components/bills/table/users/Table"
import BillsResources from "./components/bills/table/reserved-resources/Table";
import BillsFilter from "./components/bills/table/bills/Table"
import BillsResourcesByBill from "./components/bills/table/reserved-resources/Table"

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/users-form" component={UsersForm} />
      <Route exact path="/users-table" component={UsersTable} />
      <Route exact path="/resources-form" component={ResourcesForm} />
      <Route exact path="/resources-table" component={ResourcesTable} />
      <Route exact path="/nav-bar" component={NavigationBar} />
      <Route exact path="/bookings-resources" component={BookingsResources}/>
      <Route exact path="/bookings-resources-date" component={BookingsSelectDate}/>
      <Route exact path="/bookings-resources-date-avaliable-hours" component={BookingsRegisterHours}/>
      <Route exact path="/bookings-resources-date-reserved-hours" component={BookingsShowHours}/>
      <Route exact path="/bills-date" component={BillsDate}/>
      <Route exact path="/bills-date-users" component={BillsUsers}/>
      <Route exact path="/bills-date-users-resources" component={BillsResources}/>
      <Route exact path="/bills-date-bills" component={BillsFilter}/>
      <Route exact path="/bills-date-bills-resources" component={BillsResourcesByBill}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Login} />
      <Route component={Login} />
    </Switch>
  </App>
);

export default AppRoutes;
