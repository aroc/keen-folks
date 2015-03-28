/**
 * @jsx React.DOM
 */

var React = require('react');
var UserActivityStore = require('../../stores/UserActivityStore');
var _ = require('lodash');

function getUserListState() {
  return {
    allUserActivities: UserActivityStore.getAll()
  };
}

var UserListComponent = React.createClass({

  getInitialState: function() {
    return getUserListState();
  },

  // React Methods

  render: function() {
  	var userActivities = _.map(this.state.allUserActivities, function(activity){
      return (<li>{activity.type}</li>);
    });

    return (
      <div className="row">
      	<div className="one-third column">
      		<h2>Filters</h2>
      		<p># TODO</p>
      	</div>
      	<div className="two-thirds column">
      		<h1>Active users over the last 7 days</h1>
      		<ul>
      			{userActivities}
      		</ul>
      	</div>
      </div>
    );
  }

});

module.exports = UserListComponent;