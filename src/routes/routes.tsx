import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "@/modules/about";
import { Home } from "@/modules/home";

export const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </>
);
