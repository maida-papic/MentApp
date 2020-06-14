
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import './assets/index.css';

// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import AboutUs from "views/examples/AboutUs.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Examples from "./views/examples/Examples";
import ChatPage from "./views/examples/ChatPage.js";
import SupportPage from "./views/examples/SupportPage.js";
import 'components/ConversationSearch/CoversationSearch.css';
import Messenger from "./components/Messenger";
// others
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />

      <Route
        path="/about-page"
        render={props => <AboutUs{...props} />}
      />
      <Route
          path="/about-page"
          render={props => <AboutUs{...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />

      <Route
          path="/register-page"
          render={props => <RegisterPage {...props} />}
      />
     <Route
          path="/chat-page"
          render={props => <Messenger {...props} />}
      /><Route
        path="/support-page"
        render={props => <SupportPage {...props} />}
    />
      <Route
          path="/examples"
          render={props => <Examples {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
