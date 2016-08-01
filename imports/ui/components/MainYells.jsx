import React from 'react';
import emitter from './yells/YellEmitter.jsx'
import {YellGuestWrapper} from './yells/YellGuestWrapper.jsx'
import {YellWrapper} from './yells/YellWrapper.jsx'
import RegisterForm from './accounts/RegisterForm.jsx'
export const MainYells = React.createClass({
	  getInitialState (){
	  	if (Meteor.userId()) {
	  		user = true
	  	} else{
	  		user =false
	  	}
    return {
        user : user
    }
  },
	render() {

		  emitter.addListener('userLogin', () => {
             this.setState({
               user:true
        
             })
           });

			if (this.state.user) {
				content =  <YellWrapper
                    queryType={this.props.queryType}
                    locationParameter={this.props.locationParameter} />
				
			} else {
				content = <div className="className">
                     <RegisterForm />
                    <YellGuestWrapper
                    queryType={this.props.queryType}
                    locationParameter={this.props.locationParameter} />
                    </div>
					}

		return (
			<div>
				{content}
			</div>
		);
	}
});


