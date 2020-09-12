import React from "react";
import logo from "./logo.svg";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import ResponsiveNavigation from "./components/ResponsiveNavigation";
import Dashboard from "./pages/Dashboard";
import DashboardSelector from "./pages/DashboardSelector";
import Article from "./components/Article";
import "./assets/scss/base.scss";
import "./App.css";
import axios from "axios";

if (process.env.NODE_ENV === "production") {
  require("./assets/mock-endpoints/mocks");
}

function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: "ion-ios-home",
    },
    {
      text: "Blogs",
      path: "/analytics",
      icon: "ion-ios-analytics",
    },
  ];
  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      ></ResponsiveNavigation>

      <Router>
        <Home path="/" />
        <DashboardSelector axios={axios} path="/analytics" />
        <Dashboard axios={axios} path="/analytics/:dashboardName" />
      </Router>
    </div>
  );
}

export default App;
