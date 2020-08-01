import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { RoutesPages, NotFoundPage} from './RoutesPages'

function App() {
  return (
     <Router>
        <Switch>
          {RoutesPages.map((p, i) => <Route key={i} path={p.path} component={p.component} />)}
          <Route component={NotFoundPage.component} />
        </Switch>
     </Router>
  );
}

export default App;
