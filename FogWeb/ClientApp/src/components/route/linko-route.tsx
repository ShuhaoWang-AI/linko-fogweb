import React from 'react';
//import { Route } from 'react-router'
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import Layout from '../layout/layout';
import Home from '../home';
//import Dashboard from '../content/dashboard/dashboard';
import About from '../about';
import Counter from '../counter';
import FetchData from '../fetch-data';

import {
    Dashboard,
    Facilities,
    Haulers,
    DisposalSite,
    GuessTrips,
    Notices,
    Reports
} from '../content';

class LinkoRoute extends React.Component<any, any> {
    public render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/facilities' component={Facilities} />
                <Route exact path='/haulers' component={Haulers} />
                <Route exact path='/disposalSite' component={DisposalSite} />
                <Route exact path='/guessTrips' component={GuessTrips} />
                <Route exact path='/notices' component={Notices} />
                <Route exact path='/reports' component={Reports} />
                 
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
                <Route path='/about' component={About} /> 
            </Switch>
        );
    }
}

export default LinkoRoute;