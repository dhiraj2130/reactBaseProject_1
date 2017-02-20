var React = require('react')
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('../config/routes');
import { Provider } from 'react-redux';
import store from '../store';

ReactDOM.render(
   <Provider store={store}> <Router>{routes}</Router></Provider>,
    document.getElementById('app')
)



