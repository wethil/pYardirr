import React from 'react';
import { composeWithTracker } from 'react-komposer'
import {CommentButtons} from '../../buttons/CommentButtons.jsx'


const renderIfData = ( thisComments ) => {
  if ( thisComments && thisComments.length > 0 ) {
    return thisComments.map( ( comment ) => {
    	  
      return  (

 
	  <div className="comment" key={ comment._id }>
	    <a className="avatar">
	      <img src="http://res.cloudinary.com/dxqgycps0/image/upload/v1463959927/12928129_10204497450075221_1101189815433514913_n_lpejaq.jpg"/>
	    </a>
	    <div className="content" >
	      <a className="author">Matt</a>
	      <div className="metadata">
	        <span className="date">Today at 5:42PM</span>
	      </div>
	      <div className="text">
	       { comment.content } 
	      </div>
	      <div className="actions">
	        <a className="reply">Reply</a>
	      </div>
	    </div>
	  </div>
	

         ) ;
    });
  } else {
    return ( <p>No list items yet!</p> ) ;
  }
};

export const CommentsMainSingle = ( { thisComments } ) => (
 
  	 <div className="ui  comments" >
  	 { renderIfData( thisComments ) }
  	 </div>
  	
  
);

