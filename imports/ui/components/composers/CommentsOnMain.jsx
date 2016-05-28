import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {CommentsMainSingle} from '../comments/MainPageComments/CommentsMainSingle.jsx'
import Comments from '../../../api/comments/comments.js'


const composer = (props,onData) => {
	 yellId=props.yellId
	//console.log('y_id = ' + yellId)
	const subscription = Meteor.subscribe('thisYellComments',yellId)
	if (subscription.ready()) {
		
		const thisComments = Comments.find({yell_id : yellId}).fetch()
	
		onData(null,{thisComments})
	}
}

export const CommentsOnMain = composeWithTracker (composer) (CommentsMainSingle);


