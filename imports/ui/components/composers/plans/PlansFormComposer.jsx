import React from 'react';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer'
import {YellDialogForm} from '../../yells/YellForm/YellDialogForm.jsx'
import Plans from '../../../../api/plans/plans.js'


const composer = (props,onData) => {
	 console.log('ok')
	const subscription = Meteor.subscribe('plans')
	if (subscription.ready()) {
		 console.log('plans are ready')
		const plans = Plans.find().fetch()
	
		onData(null,{plans})
	}
}

export const PlansFormComposer = composeWithTracker (composer) (YellDialogForm);


