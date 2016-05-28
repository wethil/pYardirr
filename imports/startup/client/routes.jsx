import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from '../../ui/layouts/app.jsx';
import Index from '../../ui/components/index.jsx';
import  YellForm  from '../../ui/components/yells/YellForm.jsx';
import { NotFound } from '../../ui/components/NotFound.jsx';
import { YellPage } from '../../ui/pages/YellPage.jsx';
import {Documentation} from '../../ui/pages/Documentation.jsx'
import {UserPawsPage} from '../../ui/pages/UserPawsPage.jsx'
//import YellContainer  from '../../ui/containers/YellContainer.jsx'
Meteor.startup(()=> {
    render (
        <Router history={browserHistory} >
            <Route path="/" component={App} >
                <IndexRoute component={ Index } />
                 <Route path="one" component={YellForm} />
                <Route path="yells/:yellID" component = {YellPage} />
                <Route path="doc" component = {Documentation} />
                <Route path="paws" component = {UserPawsPage} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>, 
        document.getElementById( 'react-root' ) 
    )
});