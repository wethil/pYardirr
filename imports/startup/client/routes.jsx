import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from '../../ui/layouts/app.jsx';
import Index from '../../ui/components/index.jsx';

import  {Admin}  from '../../ui/components/admin/Admin.jsx';
import { NotFound } from '../../ui/components/NotFound.jsx';

//import YellContainer  from '../../ui/containers/YellContainer.jsx'
Meteor.startup(()=> {
    render (
        <Router history={browserHistory} >
            <Route path="/" component={App} >
                <IndexRoute component={ Index } />

                <Route path="admin" component = {Admin} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>,
        document.getElementById( 'react-root' )
    )
});


/*
{fields: {
      'username':1,
     'profile.profile_pic':1
   }}*/
