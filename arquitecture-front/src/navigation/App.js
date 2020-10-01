import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { RoutesPages, HomePage, NotFoundPage } from './RoutesPages'
import './reset.css'
import UserContext from '../components/UserContext/UserContext'

function App() {

    return (
        <UserContext>
            <Router>
                <Switch>
                    <Route exact path={HomePage.path} component={HomePage.component} />
                    {RoutesPages.map((p, i) => <Route key={i} path={p.path} component={p.component} />)}
                    <Route component={NotFoundPage.component} />
                </Switch>
            </Router>
        </UserContext>
    );
}

export default App;
