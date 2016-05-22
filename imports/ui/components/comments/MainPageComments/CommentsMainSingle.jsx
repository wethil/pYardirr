import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {CommentButtons} from '../../buttons/CommentButtons.jsx'


const renderIfData = ( thisComments ) => {
  if ( thisComments && thisComments.length > 0 ) {
    return thisComments.map( ( comment ) => {
      return  ( <li key={ comment._id } > { comment.content } 
        rating : {comment.rating} <CommentButtons oID={comment._id} /> </li> ) ;
    });
  } else {
    return ( <p>No list items yet!</p> ) ;
  }
};

export const CommentsMainSingle = ( { thisComments } ) => (
  <ul>{ renderIfData( thisComments ) }</ul>
);

