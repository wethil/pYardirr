import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import emitter from '../yells/YellEmitter.jsx'
export default class LoginForm extends TrackerReact(Component) {
	
	handleLogin (e) {
		e.preventDefault();
		var email = this.refs.email.value.trim();
		var password = this.refs.password.value.trim();
		Meteor.loginWithPassword(email, password, function(error){
			if (error) {
				console.log(error.reason);
			} else {
				emitter.emit('userLogin')
			}
		    
		});
	}

	render() {
		return (
			<div className="className">
					<h3 className="ui header">Login </h3>
					<form className="form" onSubmit={this.handleLogin.bind(this)}>
					<div className="ui form">
					  <div className="fields">
					    <div className="field">
					      <input type="text" ref="email" placeholder="Username or Email" />
					    </div>
					    <div className="field">
					      <input type="text" ref="password" type="password" placeholder="Password"/>
					    </div>
					    	<input className="ui submit button" 
									type="submit" value="login"
											/>
					  </div>
					</div>
				</form>	
			</div>
				
		);
	}
}


