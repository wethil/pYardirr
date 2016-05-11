import React from 'react';
import { Meteor } from 'meteor/meteor';

export const YellButtons = React.createClass({

	Like(e){
		e.preventDefault()
		 id = this.props.oID  
		console.log('like ' + id)
		
		Meteor.call('likeYell', id, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		});
	},

	Paw(e){
		e.preventDefault()
		 id = this.props.oID
		 	Meteor.call('pawYell', id, error => {
		 if (error) {
		 	console.log('error',error)
		 }
		});
 
		console.log( 'paw ' + id)
	},
	render() {
		return (

			 <div className="ui icon buttons">
			 	<button className="ui button" onClick={this.Like} > <i className="heart icon"></i> </button>
			 	<button className="ui button" onClick={this.Paw} ><i className="star icon"></i></button>
			 </div>	
					
			
		);
	}
});
