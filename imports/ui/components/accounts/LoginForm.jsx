import React, { Component } from 'react';

export default class LoginForm extends Component {
	
	handleLogin (e) {
		e.preventDefault();
		var email = this.refs.email.value.trim();
		var password = this.refs.password.value.trim();
		Meteor.loginWithPassword(email, password, function(error){
			if (error) {
				console.log(error.reason);
			}
		    
		});
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleLogin.bind(this)}>
						<input className="input"
							type="text"
							ref="email"
							placeholder="email"
						/>
				
						<input className="input"
							type="text"
							ref="password"
							placeholder="password"
						/>

						<input className="className" 
							type="submit" value="login"
						/>
				</form>	
				
		);
	}
}
