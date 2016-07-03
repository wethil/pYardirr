import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {MainYell} from '../yells/MainYell.jsx'
import Yells from '../../../api/yells/yells.js'
import Comments from '../../../api/comments/comments.js'


const composer = (props,onData) => {
	 yell_id = props.params.yellID
	 console.log(`y id is = ${yell_id}`)
	const subscription = Meteor.subscribe('comments.inYell', yell_id)
	if (subscription.ready()) {
		const thisYell = Yells.findOne({_id :yell_id})
		const thisComments = Comments.find({yell_id : yell_id}).fetch()
		console.log(thisYell)
	
		onData(null,{thisYell,thisComments})
	}
}

export const MainYellComposer = composeWithTracker (composer) (MainYell);


