import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


const renderIfData = ( yell,pawed ) => {
	const paw = (e) => {
		e.preventDefault()
		user_id = Meteor.userId();	
		 type = 'paw' 
		console.log(` paw yell = ${yell} user= ${user_id} `)
		Meteor.call('pawYell', yell,user_id, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		 Meteor.call('PawRateYell',yell)
		});

	}


  
  if ( yell ) {
   return ( 
   	 <button onClick={paw} ><span className="fa fa-paw"></span> 3 </button>
			  ) ;
  } else {
    return ( <p>No yell</p> ) ;
  }
};

export const YellPawButton = ( { yell } ) => (
  <div>{ renderIfData( yell ) }</div>
);

















/*
export default class YellButtons extends Component {
	componentWillMount () {
		yell_id = this.props.yell

		user_id =Meteor.userId();
	
	}

	Like(e){
		e.preventDefault()
	   	
	
		 type = 'Like' 
		console.log(this.props.yell)

		console.log(` like yell = ${yell_id} user= ${user_id} `)
		
		Meteor.call('actYell', yell_id,user_id,type, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		 Meteor.call('LikeRateYell',yell_id)
		});
	}

	Paw(e){
		e.preventDefault()
		type = 'Paw'


		 	Meteor.call('actYell',yell_id,user_id,type, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		 Meteor.call('PawRateYell',yell_id)
		});
 
		console.log( 'paw ' + yell_id)
	}
	render() {
		return (
			<div>
			 	<i className="heart outline like icon" onClick={this.Like} > </i> 
			 	
			 </div>	
		);
	}
}

*/



