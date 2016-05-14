import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class YellButtons extends TrackerReact(Component) {
	componentWillMount () {
		id = this.props.id
		user =  user = Meteor.user()
		user_id = user._id
		username = user.username
		name = user.profile.firstName + ' ' + user.profile.lastName
	}

	Like(e){
		e.preventDefault()
	   	
	
		 genre = 'Like' 
		

		console.log('like ' + id + user_id + username + name )
		
		Meteor.call('actYell', id,user_id,genre,username,name, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		 Meteor.call('LikeRateYell',id)
		});
	}

	Paw(e){
		e.preventDefault()
		genre = 'Paw'


		 	Meteor.call('actYell',id,user_id,genre,username,name, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		 Meteor.call('PawRateYell',id)
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
