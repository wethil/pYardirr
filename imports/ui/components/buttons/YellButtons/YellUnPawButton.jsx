import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


const renderIfData = ( yell,pawed ) => {
	const unPaw = (e) => {
		e.preventDefault()
		user_id = Meteor.userId();	
		 type = 'paw' 
		console.log(` paw yell = ${yell} user= ${user_id} `)
		Meteor.call('delActYell', yell,user_id,type, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		 Meteor.call('PawRateYell',yell)
		});

	}


  
  if ( yell ) {
   return ( 
   	 <button onClick={unPaw} > un </button>
			  ) ;
  } else {
    return ( <p>No yell</p> ) ;
  }
};

export const YellUnPawButton = ( { yell } ) => (
  <div>{ renderIfData( yell ) }</div>
);










