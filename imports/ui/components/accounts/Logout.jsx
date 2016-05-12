import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
export default class Logout extends Component {
	handleLogout(e) {
		e.preventDefault()
		Meteor.logout();
	}
	render() {
		return (
		 <button className="ui button"
		  onClick={this.handleLogout}>Logout</button>
		);
	}
}
