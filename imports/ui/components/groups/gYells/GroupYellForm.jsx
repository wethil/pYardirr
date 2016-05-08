import React, { Component } from 'react';

export class GroupYellForm extends Component {
	
	
	addGrYell(event) {
		event.preventDefault()
		var yell = this.refs.mYell.value.trim()
		var belongedGroup = this.props.group_id
		 Meteor.call('addGrYell', yell,belongedGroup, error => { 
            if (error) { 
                console.log('error', error); 
            } 
             console.log('yell added ' );  
            this.refs.mYell.value="";
                      
        });

	}
	render() {
		Meteor.subscribe('groups')
		return (
			<form className="group_yell" onSubmit={this.addGrYell.bind(this)} >
				<input 
					type ="text"
					ref="mYell"
					placeholder = "yell for this group"
				/>
			</form>
		);
	}
}
