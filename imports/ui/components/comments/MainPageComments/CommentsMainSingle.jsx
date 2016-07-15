import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {CommentButtons} from '../../buttons/CommentButtons.jsx'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';


const renderIfData = ( thisComments ) => {
  if ( thisComments && thisComments.length > 0 ) {
    return thisComments.map( ( comment ) => {
    	  
      return  (
      	<div key={comment._id}>
				  <ListItem
			          leftAvatar={<Avatar src={comment.owner.profile.avatar} />}
			          primaryText={comment.owner.username}
			          secondaryText={
			            <p>
			              { comment.content } 
			            </p>
			          }
			        />
			    <Divider  inset={true} />
        </div>
 
         ) ;
    });
  } else {
    return ( <p>No list items yet!</p> ) ;
  }
};

export const CommentsMainSingle = ( { thisComments } ) => (
 
  	 
  	<List> { renderIfData( thisComments ) } </List>
  	
  	
  
);



