/*
import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {UserPaws} from '../accounts/UserPaws.jsx'
import Yells from '../../../api/yells/yells.js'
import {YellSingle} from '../yells/YellSingle.jsx'


const composer = (props,onData) => {
	 user_id=Meteor.userId();
	//console.log('y_id = ' + yellId)
	const subscription = Meteor.subscribe('thisUserPaws',user_id)
	if (subscription.ready()) {

		const yells = Yells.find({'acts.type':'paw','acts.id':user_id}).fetch()

		onData(null,{yells})
	}
}

export const UserPawsComposer = composeWithTracker (composer) (YellSingle);


*/
