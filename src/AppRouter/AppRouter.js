import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import ContactComponent from "../app-components/ContactComponent";
import ForgetComponent from "../app-components/ForgetComponent";
import HomepageComponent from "../app-components/HomepageComponent";
import LoginComponent from "../app-components/LoginComponent";
import ManaBioComponent from "../app-components/ManaBioComponent";
import MangaImageComponents from "../app-components/MangaImageComponents";
import MangaReadComponent from "../app-components/MangaReadComponent";
import MangaTextComponent from "../app-components/MangaTextComponent";
import NotFoundComponent from "../app-components/NotFoundComponent";
import SignupComponent from "../app-components/SignupComponent";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomepageComponent} exact />
        <Route path="/recover" component={ForgetComponent} exact />
        <Route path="/contact" component={ContactComponent} exact />
        <Route path="/login" component={LoginComponent} exact />
        <Route path="/mangabio" component={ManaBioComponent} exact />
        <Route path="/image list" component={MangaImageComponents} exact />
        <Route path="/mangareads" component={MangaReadComponent} exact />
        <Route path="/text list" component={MangaTextComponent} exact />
        <Route path="/create account" component={SignupComponent} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
