import React from 'react';
import { composeWithTracker } from 'react-komposer'
import { Meteor } from 'meteor/meteor';
import {JoinRequests} from '../../yells/yellCard/JoinRequests.jsx'


const composer = (props,onData) => {
	ownership = props.ownership
	 requests = props.requests
	 console.log(requests)
	 reqUsers = []

	requests.forEach((userId) => {
		const subscription = Meteor.subscribe('ThisUser',userId)
	  	if (subscription.ready()) {
			
			const thisUser = Meteor.users.findOne({_id : userId})
			console.log(thisUser)
			reqUsers.push(thisUser);
		
			
		}
	});


onData(null,{reqUsers,ownership})
}
export const Requerers = composeWithTracker (composer) (JoinRequests);