import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Remark from "./templates/remark/Remark";
import Products from "./pages/Products/Products";
import Profesionales from "./pages/Profesionales/Profesionales";
import Routers from "./routers/Routers";

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById("root")
);
