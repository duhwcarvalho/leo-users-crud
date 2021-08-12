import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ListUsers from '../pages/ListUsers';
import CreateUsers from '../pages/CreateUsers';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ListUsers} />
    <Route path="/usuario" exact component={CreateUsers} />
    <Route path="/usuario/:id" exact component={CreateUsers} />
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default Routes;