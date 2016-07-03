import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
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
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

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
                  rightIconButton={rightIconMenu}
                  />
        }
}

const renderIfData = ( reqUsers,ownership ) => {




  if ( reqUsers && reqUsers.length > 0 ) {
    return reqUsers.map( ( reqUser ) => {
      return  (
      	 <List>
      		<div key={ reqUser._id }>
          {getListItem(reqUser,ownership)}	  
			        <Divider inset={true} />
			</div> 
		 </List>	  


        ) ;
    });
  } else {
    return ( <p>No request yet!</p> ) ;
  }
};

export const JoinRequests = ( { reqUsers,ownership } ) => (
  <div>{ renderIfData( reqUsers,ownership ) }</div>
);

