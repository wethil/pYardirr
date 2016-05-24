import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import YellForm from '../yells/YellForm.jsx'



const renderIfData = ( user ) => {
  if ( user  ) {
  				

    return (
     <div className="ui fluid card">
		  <div className="ui  image">
		    <img src={user.profile.profile_pic}/>
		  </div>
		  <div className="content">
		    <a className="header">{user.username}</a>
		    <div className="meta">
		      <span className="date">Joined in 2013</span>
		    </div>
		    <div className="description">
		      Melek is a developer 
		    </div>
		  </div>
		  <div className="extra content">
		    <a>
		      <i className="user icon"></i>
		      22 Friends
		    </a>
		  </div>
		</div>
     ) ;
  

  } else {
    return ( <p>No users</p> ) ;
  }
};

export const UserCard = ( { user } ) => (
  <div className="melek" >{ renderIfData( user ) }<YellForm /></div>
);
