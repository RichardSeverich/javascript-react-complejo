import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

// Import Bootstrap
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById("root")
);
