import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import AccountConfig from "./components/AccountConfig/AccountConfig.jsx";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <AccountConfig />} />
        <Route path="/register" render={() => <AccountConfig />} />
        <Route path="/complete" render={() => <AccountConfig />} />
        <Route path="/verify" render={() => <AccountConfig />} />
      </Switch>
    </>
  );
};

export default App;
