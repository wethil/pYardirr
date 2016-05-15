import React, {Component} from 'react';
import {CommentButtons} from '../buttons/CommentButtons.jsx'


const renderIfData = ( comments ) => {
  if ( comments && comments.length > 0 ) {
    return comments.map( ( comment ) => {
      return  ( <li key={ comment._id } > { comment.content } 
        rating : {comment.rating} <CommentButtons oID={comment._id} /> </li> ) ;
    });
  } else {
    return ( <p>No list items yet!</p> ) ;
  }
};

export const CommentSingle = ( { comments } ) => (
  <ul>{ renderIfData( comments ) }</ul>
);

