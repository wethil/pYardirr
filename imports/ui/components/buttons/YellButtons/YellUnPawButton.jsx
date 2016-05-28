import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


const renderIfData = ( yell,pawed ) => {
	const unPaw = (e) => {
		e.preventDefault()
		user_id = Meteor.userId();	
		 type = 'paw' 
		console.log(` paw yell = ${yell} user= ${user_id} `)
		Meteor.call('unPawYell', yell,user_id, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		 Meteor.call('PawUnRateYell',yell)
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










