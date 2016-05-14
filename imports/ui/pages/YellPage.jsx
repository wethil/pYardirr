import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {MainYell} from '../components/yells/MainYell.jsx'
import Yells from '../../api/yells/yells.js'
import ReactDOM from 'react-dom';

const composer = (props,onData) => {
	const subscription = Meteor.subscribe('yells')
	if (subscription.ready()) {
		const thisYell = Yells.findOne({_id : "e6Q8bCto6LetGc2xY"})
		console.log(thisYell)
		onData(null,{thisYell})
	}
}

export const YellPage = composeWithTracker (composer) (MainYell);


