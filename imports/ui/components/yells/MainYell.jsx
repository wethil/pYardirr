import React, { Component } from 'react';

import {CommentSingle} from '../comments/CommentSingle.jsx'
import CommentsForm from '../comments/CommentsForm.jsx'
const renderIfData = (thisYell,thisComments) => {
	 id = thisYell._id
	console.log(id)
	console.log(thisComments.length)
	if (thisComments.length>0 ) {
		comments= <CommentSingle comments={thisComments} />
	} else {
		comments = "no comments"
	}

	if (thisYell) {
		return ( 
			<div className="className">
				 <h1> yell : {thisYell.content}</h1>
				 rating : {thisYell.rating}
			
				
				 {comments}
				
		 </div>
		  )
	} else {
		return <p className="className">no yell</p>
	}
}

export const MainYell = ({thisYell,thisComments}) => (
	<div> {renderIfData(thisYell,thisComments)} </div>
	);

