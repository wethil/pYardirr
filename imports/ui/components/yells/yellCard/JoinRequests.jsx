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

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

	const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Approve</MenuItem>
    <MenuItem>Deny</MenuItem>
    <MenuItem>Block User</MenuItem>
  </IconMenu>
);

 const handleToogle =(user) => {
       if (_.includes(approved, user)==false) {
          Meteor.call('approveJoin',user,yell, error => { 
              if (error) { 
                  console.log('error', error); 
              } 
                
                        
          });
       } else {
             Meteor.call('cancelApprove',user,yell, error => { 
              if (error) { 
                  console.log('error', error); 
              } 
                
                        
          });

       }



 } 


 const getListItem = (reqUser,ownership)  =>{

 
  if (ownership==0) {
        return <ListItem
                  
                  primaryText={ reqUser.username }
                  leftAvatar={<Avatar src={reqUser.profile.avatar} />}
                  
                  />
       
        } else {

        return <ListItem
                  primaryText={ reqUser.username }
                  leftAvatar={<Avatar src={reqUser.profile.avatar} />}
                  rightToggle={
                    <Toggle 
                        toggled={_.includes(approved, reqUser._id)}
                        onToggle={()=>handleToogle(reqUser._id)}
                     />}
                  />
        }
}

const renderIfData = ( reqUsers,ownership,approved,yell ) => {






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

export const JoinRequests = ( { reqUsers,ownership,approved,yell } ) => 


  (
  <List>
    {
        ownership==1 ?
             <Subheader>Approve people who you want</Subheader>
          :
           ""
    }

  { renderIfData( reqUsers,ownership,approved,yell ) }

  </List>
);

