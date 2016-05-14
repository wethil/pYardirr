import React, { Component } from 'react';
import YellButtons from '../buttons/YellButtons.jsx'

const renderIfData = (thisYell) => {
	let id = thisYell._id
	console.log(id)
	if (thisYell) {
		return ( 
			<div className="className">
				 <h1> yell : {thisYell.content}</h1>
				 rating : {thisYell.rating}
				 <YellButtons id={id} />
		 </div>
		  )
	} else {
		return <p className="className">no yell</p>
	}
}

export const MainYell = ({thisYell}) => (
	<div> {renderIfData(thisYell)} </div>
	);

