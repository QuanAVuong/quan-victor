import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import Index from './components/Index';
import NewPost from './components/New-Post';
import CommentsAll from './components/Comments-All';

const Routes = ((
    <Router history={hashHistory}>
      <Route path='/' component={Index}>
        <IndexRoute component={NewPost} />
        <Route path='newpost' component={NewPost} />
      </Route>
    </Router>
));

export default Routes;