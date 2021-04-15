import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Survey from "./pages/Survey";
import Zoom from "./pages/Zoom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/survey" component={Survey} />
        <Route path="/" component={Zoom} />
      </Switch>
    </BrowserRouter>
  );
}
