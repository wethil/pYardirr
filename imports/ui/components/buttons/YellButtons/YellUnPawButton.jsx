import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


const renderIfData = ( yellId,pawed ) => {
	const unPaw = (e) => {
		e.preventDefault()
		user_id = Meteor.userId();	
		 type = 'paw' 
		console.log(` paw yell = ${yellId} user= ${user_id} `)
		Meteor.call('unPawYell', yellId,user_id, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		 Meteor.call('PawUnRateYell',yellId)
		});

	}


  
  if ( yellId ) {
   return ( 
   	 <button onClick={unPaw} > un </button>
			  ) ;
  } else {
    return ( <p>No yell</p> ) ;
  }
};

export const YellUnPawButton = ( { yellId } ) => (
  <div>{ renderIfData( yellId ) }</div>
);










