import React, { Component } from 'react';
import {YellButtons} from '../buttons/YellButtons.jsx'
import {CommentSingle} from '../comments/CommentSingle.jsx'
import CommentsForm from '../comments/CommentsForm.jsx'
const renderIfData = (thisYell,thisComments) => {
	 id = thisYell._id
	console.log(id)
	console.log(thisComments)
	if (thisYell) {
		return ( 
			<div className="className">
				 <h1> yell : {thisYell.content}</h1>
				 rating : {thisYell.rating}
				 <YellButtons yell={id} />
				 <CommentsForm  yell_id={id} />
				 <CommentSingle comments={thisComments} />
		 </div>
		  )
	} else {
		return <p className="className">no yell</p>
	}
}

export const MainYell = ({thisYell,thisComments}) => (
	<div> {renderIfData(thisYell,thisComments)} </div>
	);

