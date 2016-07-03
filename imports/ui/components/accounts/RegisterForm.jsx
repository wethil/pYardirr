import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LoginForm from './LoginForm.jsx'
export default class RegisterForm extends TrackerReact(Component) {

	handleRegister(e) {
		e.preventDefault()
		var username = this.refs.username.value.trim()
		var email = this.refs.email.value.trim();
		var password = this.refs.password.value.trim()
		console.log(email + ' ' + password)
		
		Accounts.createUser(
            {
                username: username,
                password: password,
                profile: {
                    firstName: 'Fatih',
                    lastName: 'Dogru',
                    avatar : 'http://semantic-ui.com/images/avatar/large/stevie.jpg',
                    paws : []
                    

                },
                email: email
            
            },function(res,error){
            	if (error) {
            		console.log(error)
            	}
            }
        );

	}
	render() {
		return ( <div className="className">
			<LoginForm />
		
					<form className="ui form" onSubmit={this.handleRegister.bind(this)} >
					
						<div className="field">	
							<input className="username"
								type="text"
								ref="username"
								placeholder="username"
							/>
						</div>
						
						<div className="field">	
							<input className="input"
								type="text"
								ref="email"
								placeholder="email"
							/>
						</div>
						
						<div className="field">		
							<input className="input"
								type="text"
								ref="password"
								placeholder="pass"
							/>
						</div>
						<div className="field">			
								<input className="className" 
									type="submit" value="register"
							/>
						</div>
						
					</form>	
				
			</div>
		);
	}
}
			