import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {CommentsMainSingle} from '../comments/MainPageComments/CommentsMainSingle.jsx'
import Comments from '../../../api/comments/comments.js'


const composer = (props,onData) => {
	 yell_id = Session.get('yell');
	 console.log('y_id' + yell_id)
	const subscription = Meteor.subscribe('thisYellComments',yell_id)
	if (subscription.ready()) {
		
		const thisComments = Comments.find({yell_id : yell_id}).fetch()
		

		onData(null,{thisComments})
	}
}

export const CommentsOnMain = composeWithTracker (composer) (CommentsMainSingle);


