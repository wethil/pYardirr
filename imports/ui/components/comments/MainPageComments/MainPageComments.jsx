import React, {Component} from 'react';
import {CommentsOnMain} from '../../composers/CommentsOnMain.jsx'
import {YellMap} from './YellMap.jsx'


export class MainPageComments extends Component {
  
	render() {
		yell_id = Session.get('yell');
		return (
			<div className="ui stuck" >
				<YellMap />
				<CommentsOnMain yell_id={yell_id} />

			</div>
		);
	}
}
