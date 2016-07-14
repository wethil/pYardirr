/*import React, {Component} from 'react';
import {CommentButtons} from '../buttons/CommentButtons.jsx'


const renderIfData = ( thisUserPaws ) => {

	const alerto = (e)=> {
    yell=  Session.get('yell');
    $("." + yell).removeClass("hidden");
     $('.card-5').removeClass('card-5');
     $('#'+yell).addClass('card-5');
      lat = Session.get('lat');
      lng = Session.get('lng');

  }

  if ( thisUserPaws && thisUserPaws.length > 0 ) {
    return thisUserPaws.map( ( pawed_yell ) => {
    	  user = Meteor.users.findOne({_id:yell.owner})
      var hiddenComments = ` animated fadeIn hidden  commentPad ${yell._id}`
      return  (

      	<div className="box text"  key={ pawed_yell._id } id={pawed_yell._id} >
        <div className="box-header">
          <h3><a href=""><img src={user.profile.profile_pic} alt="" />{user.username}</a>
            <span>March 21,18:45pm</span>
          </h3>
          <span>
              <i className="fa fa-map-marker" onClick={()=>{
                 PubSub.publish( 'location', [yell.loc.coordinates[0],yell.loc.coordinates[1]] );
              }} >
              </i>
             <Link to={`/yells/${yell._id}`}><i className="fa fa-angle-down"></i></Link>
         </span>
          <div className="window"></div>
        </div>
        <div className="box-content">
          <div className="content">
            <p className="yellcont" > { pawed_yell.content } </p>
          </div>
        </div>

        <div className="box-buttons">
        <div className="row">
            <button><span className="fa fa-thumbs-up"></span>11 </button>
            <button  className="comments" onClick={
                      () => {
                      Session.set('yell', yell._id)
                       PubSub.publish( 'location', [yell.loc.coordinates[0],yell.loc.coordinates[1]] );
                      Session.set('lat',yell.loc.coordinates[0])
                      Session.set('lng',yell.loc.coordinates[1])

                      alerto();

                    }} > <span className="fa fa-comment"></span> 7 </button>
           <YellButtons yell={pawed_yell._id} />
          </div>
        </div>
         <div className={hiddenComments}>
            <CommentsOnMain yellId={pawed_yell._id} />
            <CommentsForm yell_id={pawed_yell._id} />
         </div>

   </div>

         ) ;
    });
  } else {
    return ( <p>No list items yet!</p> ) ;
  }
};

export const CommentSingle = ( { thisUserPaws } ) => (
  <ul>{ renderIfData( thisUserPaws ) }</ul>
);

*/
