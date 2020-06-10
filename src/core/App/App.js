import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from '../../screens/Main/Main';
import { Detail } from '../../screens/Detail/Detail';
import { AboutPage } from '../../screens/AboutPage/AboutPage';
import { Header } from '../../components/Header/Header';

export const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/recipe/:id" component={Detail} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </>
);
