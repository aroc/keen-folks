var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Loader = require('./common/Loader.react.js');

var AppComponent = React.createClass({

	getInitialState: function() {
		return {
			showLoader: false
		};
	},

  render: function () {
    return (
    	<div id="keen-folks">
	      <div className="container">
	      	<RouteHandler {...this.props}/>
	      </div>
      </div>
    );
  }

});

module.exports = AppComponent;