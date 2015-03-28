/**
 * @jsx React.DOM
 */

var React = require('react');
var _ = require('lodash');

var UserListComponent = React.createClass({

  // React Methods

  render: function() {
    return (
      <div>
        <h1>Active users over the last 7 days</h1>
      </div>
    );
  }

});

module.exports = UserListComponent;