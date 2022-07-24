import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container'
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import '../index.css'
import home_container from "./links/home_container";

const App = () => (
  <div id='app' className="bg-gray-900 h-screen w-screen fixed
    top-0 left-0 text-slate-20 box-border">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/home" component={home_container} />
    </Switch>
  </div>
)

export default App;