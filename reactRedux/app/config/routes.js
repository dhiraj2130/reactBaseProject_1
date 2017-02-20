var React = require('react');
var Main = require('../components/Main');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var Profile = require('../components/Profile');

module.exports = (
<Route path="/" component={Main}>

    // <Route path="profile/:username" component ={Profile} />

    <IndexRoute  component ={Profile}/>
</Route>
);
