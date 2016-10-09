let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let Redirect = Router.Redirect;
let DefaultRoute = Router.DefaultRoute;

let Resume = require('./components/Resume.js');
let AppRoutes = (
  <Route name="root" path="/" handler={Resume}>
	
  </Route>
);

module.exports = AppRoutes;