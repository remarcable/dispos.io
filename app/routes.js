import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import StartScreen from './components/StartScreen';
import EditScreen from './components/EditScreen';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={StartScreen} />
    <Route path="/edit" component={EditScreen} />
  </Route>
);
