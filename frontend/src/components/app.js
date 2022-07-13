import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container'
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LinksContainer from "./links/links_container";
import NewLinkContainer from "./links/new_link_container";

const App = () => (
  <div id='app'>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/links" component={NewLinkContainer} />
      <ProtectedRoute exact path="/links" component={LinksContainer} />
    </Switch>
  </div>
)

export default App;