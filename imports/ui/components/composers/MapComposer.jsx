import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {MainPageComments} from '../comments/MainPageComments/MainPageComments.jsx'
import Comments from '../../../api/comments/comments.js'


const composer = (props,onData) => {
	 yell_id = Session.get('yell');
	 
	const subscription = Meteor.subscribe('thisYellComments',yell_id)
	if (subscription.ready()) {
		
		const CommentsLoc = Comments.find({yell_id : yell_id},{fields:{loc:1}}).fetch()
		

		onData(null,{CommentsLoc})
	}
}

export const MapComposer = composeWithTracker (composer) (MainPageComments);


