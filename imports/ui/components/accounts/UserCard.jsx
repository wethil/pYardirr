import React, { Component } from 'react';

export default class UserCard extends Component {
	render() {
		return (
			
		<div className="ui fluid card">
		  <div className="ui  image">
		    <img src="http://semantic-ui.com/images/avatar/large/stevie.jpg"/>
		  </div>
		  <div className="content">
		    <a className="header">Kristy</a>
		    <div className="meta">
		      <span className="date">Joined in 2013</span>
		    </div>
		    <div className="description">
		      Kristy is an art 
		    </div>
		  </div>
		  <div className="extra content">
		    <a>
		      <i className="user icon"></i>
		      22 Friends
		    </a>
		  </div>
		</div>
		);
	}
}
		
	