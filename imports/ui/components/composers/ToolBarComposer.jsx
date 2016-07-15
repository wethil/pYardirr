import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {UserCard} from '../accounts/UserCard.jsx'
import { Meteor } from 'meteor/meteor';
import navigation from '../navigation.jsx'

const composer = (props,onData) => {
	 user_id=Meteor.userId();
	
	 
	const subscription = Meteor.subscribe('ThisUser',user_id)
	if (subscription.ready()) {
		
		const user = Meteor.users.findOne({_id:user_id})

		console.log(user)

		onData(null,{user})
	}
}

export const ToolBarComposer = composeWithTracker (composer) (navigation);


