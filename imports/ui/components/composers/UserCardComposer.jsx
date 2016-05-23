import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {UserCard} from '../accounts/UserCard.jsx'
import { Meteor } from 'meteor/meteor';


const composer = (props,onData) => {
	 userId=Meteor.userId();
	 
	const subscription = Meteor.subscribe('users')
	if (subscription.ready()) {
		
		const user = Meteor.users.findOne({_id:userId})
		

		onData(null,{user})
	}
}

export const UserCardComposer = composeWithTracker (composer) (UserCard);


