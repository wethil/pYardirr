import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from '../../ui/layouts/app.jsx';
import Index from '../../ui/components/index.jsx';
import  YellForm  from '../../ui/components/YellForm.jsx';
import { NotFound } from '../../ui/components/NotFound.jsx';
import { Hello } from '../../ui/components/hello.jsx';

Meteor.startup(()=> {
    render (
        <Router history={browserHistory} >
            <Route path="/" component={App} >
            <IndexRoute component={ Index } />
             <Route path="one" component={YellForm} />
           
               <Route path="/hello/:name" component = {Hello} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>,
        document.getElementById( 'react-root' ) 
    )
});