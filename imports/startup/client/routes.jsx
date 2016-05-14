import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from '../../ui/layouts/app.jsx';
import Index from '../../ui/components/index.jsx';
import  YellForm  from '../../ui/components/yells/YellForm.jsx';
import { NotFound } from '../../ui/components/NotFound.jsx';
import { YellPage } from '../../ui/pages/YellPage.jsx';
import {GroupPage} from '../../ui/pages/GroupPage.jsx'
//import YellContainer  from '../../ui/containers/YellContainer.jsx'
Meteor.startup(()=> {
    render (
        <Router history={browserHistory} >
            <Route path="/" component={App} >
                <IndexRoute component={ Index } />
                 <Route path="one" component={YellForm} />
                <Route path="yells/:yellID" component = {YellPage} />
                <Route path="groups/:gr_id" component = {GroupPage} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>, 
        document.getElementById( 'react-root' ) 
    )
});