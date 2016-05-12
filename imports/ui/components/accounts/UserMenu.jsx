import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Logout from './Logout.jsx'
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx'
export class UserMenu extends TrackerReact(Component) {

	render() {
		currentUser = Meteor.user();
		if (currentUser) {
			return (
			<div> hello {currentUser.username} <Logout />  </div>
		);
		}  else {
			return (
			<div> no user
			 register :  <RegisterForm />  <br/>
			 login :      <LoginForm />

			  </div>
		);
		}
		
	}
}
