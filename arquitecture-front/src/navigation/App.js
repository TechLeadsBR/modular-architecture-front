import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { RoutesPages, HomePage,NotFoundPage} from './RoutesPages'
import './reset.css'

// const adminPermission = ({ component: Component }) => {
//   <Route
//     render={(props) => {
//         <Component {...props}/>

//     }}
  
//   />
// }

function App() {
  return (
     <Router>
        <Switch>
          <Route exact path={HomePage.path} component={HomePage.component} />
          {RoutesPages.map((p, i) => <Route key={i} path={p.path} component={p.component} />)}
          <Route component={NotFoundPage.component} />
        </Switch>
     </Router>
  );
}

export default App;
