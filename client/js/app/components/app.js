var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Loader = require('./common/loader.js');

var App = React.createClass({

	getInitialState: function() {
		return {
			showLoader: false
		};
	},

  render: function () {
    return (
    	<div id="keen-folks">
	      <div className="container">
	      	<div className="row">
	      		<div className="twelve columns">
	      			<RouteHandler {...this.props}/>
	      		</div>
	      	</div>
	      </div>
      </div>
    );
  }

});

module.exports = App;