import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import Subheader from 'material-ui/Subheader';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import _ from 'lodash'
//composed by Requerers.jsx in composers



 const getListItem = (reqUser)  =>{

 
  if (ownership==0) {
        return <ListItem
                  
                  primaryText={ reqUser.username }
                  leftAvatar={<Avatar src={reqUser.profile.avatar} />}
                  
                  />
       
        } else {

        return <ListItem
                  primaryText={ reqUser.username }
                  leftAvatar={<Avatar src={reqUser.profile.avatar} />}
                  />
        }
}

const renderIfData = ( reqUsers,yell ) => {






  if ( reqUsers && reqUsers.length > 0 ) {
    return reqUsers.map( ( reqUser ) => {
      return  (
      	 

      		<div key={ reqUser._id }>
          {getListItem(reqUser,ownership)}	  
			        <Divider inset={true} />
			</div> 
		 	  


        ) ;
    });
  } else {
    return ( <p>No request yet!</p> ) ;
  }
};

export const JoinRequestsGuest = ( { reqUsers,yell } ) => 


  (
  <List>
  

  { renderIfData( reqUsers,yell ) }

  </List>
);

