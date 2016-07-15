import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {SpreadIcon} from './ButtonSvg.jsx'



export const SpreadButton = ( { yell } ) => {

	const spread = (e) => {
		e.preventDefault()
		user_id = Meteor.userId();	
		
		console.log(` spread yell = ${yell._id} user= ${user_id} content= ${yell.content}  `)
		console.log(yell.loc)
		lat = 39.480974; // Session.get('lat')
        long =  -88.175493 // Session.get('long')
        loc = {
        	"type" : "Point",
        	coordinates : [lat,long]
        }
        if (yell.original_yell_id) {
        		origin_yell_id = yell.original_yell_id
        }	else {
        	origin_yell_id = yell._id
        }
      

		yell_content = yell.content
		

		Meteor.call('SpreadYell',user_id,yell_content,loc,origin_yell_id, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		 Meteor.call('PawRateYell',yell._id)
		});
		
		   
	}
 return (
 	  <button  onClick={spread} > <SpreadIcon count={12} /> </button>
 	);
};


