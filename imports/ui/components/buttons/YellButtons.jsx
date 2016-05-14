import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export class YellButtons extends TrackerReact(Component) {
	Like(e){
		e.preventDefault()
	   	
		 id = this.props.oID 
		 type = 'Like' 
		 user = Meteor.user()
		 user_id = user._id
		 username = user.username
		 name = user.profile.firstName + ' ' + user.profile.lastName

		console.log('like ' + id + user_id + username + name )
		
		Meteor.call('actYell', id, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		});
	}

	Paw(e){
		e.preventDefault()
		 id = this.props.oID
		 	Meteor.call('actYell', id, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		});
 
		console.log( 'paw ' + id)
	}
	render() {
		return (
			<div className="ui icon buttons">
			 	<button className="ui button" onClick={this.Like} > <i className="heart icon"></i> </button>
			 	<button className="ui button" onClick={this.Paw} ><i className="star icon"></i></button>
			 </div>	
		);
	}
}
