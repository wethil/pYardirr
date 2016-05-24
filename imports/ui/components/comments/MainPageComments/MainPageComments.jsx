import React, {Component} from 'react';
import {CommentsOnMain} from '../../composers/CommentsOnMain.jsx'
import {YellMap} from './YellMap.jsx'

const renderIfData = ( CommentsLoc ) => {
	console.log(CommentsLoc)
	   yell_id = Session.get('yell');
		lat=Session.get('lat');
		lng = Session.get('lng');
		 

 return ( 
 			<div className="ui stuck" >
				<YellMap comments={CommentsLoc} lat={lng} lng={lat} />
				<CommentsOnMain yell_id={yell_id} />

			</div>
  ) ;

};

export const MainPageComments = ( { CommentsLoc } ) => (
  <div>{ renderIfData( CommentsLoc ) }</div>
);


/*
  if ( CommentsLoc && CommentsLoc.length > 0 ) {
    return CommentsLoc.map( ( comment ) => {
      return  ( <li key={ comment._id } > { comment.content } 
        rating : {comment.rating} <CommentButtons oID={comment._id} /> </li> ) ;
    });
  } else {
    return ( <p>No list items yet!</p> ) ;
  }
*/




/**
export class MainPageComments extends Component {
  
	render() {
		yell_id = Session.get('yell');
		lat=Session.get('lat');
		lng = Session.get('lng');
		 COMMENTS = [
			{lat:35.116167 , lng:33.933192},
			{lat:35.119013 , lng:33.930188},
			{lat:35.117632 , lng:33.928123},
		]
		commento =Comments.find({yell_id:'gBqLK2s3x2qncBrkR'},{loc:1}).fetch()
		console.log(commento)
		return (
			<div className="ui stuck" >
				<YellMap comments={COMMENTS} lat={lng} lng={lat} />
				<CommentsOnMain yell_id={yell_id} />

			</div>
		);
	}
}

/


/*

*/