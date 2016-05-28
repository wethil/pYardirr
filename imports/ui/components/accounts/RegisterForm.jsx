import React, { Component } from 'react';
export default class RegisterForm extends Component {

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
                    profile_pic : 'http://semantic-ui.com/images/avatar/large/stevie.jpg',
                    paws : []
                    

                },
                email: email
            
            }
        );

	}
	render() {
		return (
			<div className="className">
					<form className="form" onSubmit={this.handleRegister.bind(this)} >
						<input className="username"
							type="text"
							ref="username"
							placeholder="username"
						/>
						<input className="input"
							type="text"
							ref="email"
							placeholder="email"
						/>
				
						<input className="input"
							type="text"
							ref="password"
							placeholder="pass"
						/>

					<input className="className" 
						type="submit" value="register"

					/>
				
					</form>	
			</div>		
			
		);
	}
}
			