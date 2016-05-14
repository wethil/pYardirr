import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {MainYell} from '../components/yells/MainYell.jsx'
import Yells from '../../api/yells/yells.js'


const composer = (props,onData) => {
	 yell_id = props.params.yellID
	const subscription = Meteor.subscribe('comments.inYell',props.params.yellID)
	if (subscription.ready()) {
		const thisYell = Yells.findOne({_id :yell_id})

		onData(null,{thisYell})
	}
}

export const YellPage = composeWithTracker (composer) (MainYell);


