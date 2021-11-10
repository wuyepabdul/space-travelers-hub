import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './Pages/Missions';
import MyProfile from './Pages/MyProfile';
import Rockets from './Pages/Rockets';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Rockets />
      </Route>
      <Route path="/missions">
        <Missions />
      </Route>
      <Route path="/my-profile">
        <MyProfile />
      </Route>
    </Switch>
  </Router>
);

export default App;
