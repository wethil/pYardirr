import React from 'react';
import { composeWithTracker } from 'react-komposer'
import { Meteor } from 'meteor/meteor';
import {JoinRequestsGuest} from '../../yells/yellCard/JoinRequestsGuest.jsx'


const composer = (props,onData) => {
	yell=props.yellId
	
	 requests = props.requests
	 reqUsers = []

	requests.forEach((userId) => {
		const subscription = Meteor.subscribe('ThisUser',userId)
	  	if (subscription.ready()) {
			
			const thisUser = Meteor.users.findOne({_id : userId})
			
			reqUsers.push(thisUser);
		
			
		}
	});


onData(null,{reqUsers,yell})
}
export const RequerersGuesr = composeWithTracker (composer) (JoinRequestsGuest);