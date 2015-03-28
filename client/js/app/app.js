var Keen = require('keen-js');
var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var AppComponent = require('./components/app.js');
var UserList = require('./components/user_list/user_list.js');

function App(config) {
  this.targetNode = document.getElementById(config.targetId);
  this.client = new Keen({
    projectId: config.keenConfig.projectId,
    readKey:   config.keenConfig.readKey
  });

  this.routes = (
    <Route name="app" path={config.appRoot || "/"} handler={AppComponent}>
      <Route name="users" handler={UserList}/>
    </Route>
  );
}

App.prototype.render = function() {
  var targetNode = this.targetNode;
  var client = this.client;

  Router.run(this.routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler client={client}/>, targetNode);
  });
};

window.KeenFolks = module.exports = App;