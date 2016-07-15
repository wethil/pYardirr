import React from 'react';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer'
import {PlanList} from '../../admin/Plans/PlanList.jsx'
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

export const PlanComposer = composeWithTracker (composer) (PlanList);


