import React from "react";
import { Dashboard } from "./features/userData/Dashboard";
import { Login } from "./features/userData/Login";
import { ArtistAlbums } from "./features/userData/ArtistAlbums";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/artist/albums/">
            <ArtistAlbums />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
