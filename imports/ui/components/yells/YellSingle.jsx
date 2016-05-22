import React, {Component} from 'react';
import { Link } from 'react-router';
import PubSub from 'pubsub-js'


const renderIfData = ( yells ) => {

  const alerto = (e)=> {
    yell=  Session.get('yell');
    $('.active_card').removeClass('active_card');
      $('#'+yell).addClass('active_card');
      lat = Session.get('lat');
      lng = Session.get('lng');
      console.log(`lat from alerto = ${lat} lng= ${lng}`)
  }

  if ( yells && yells.length > 0 ) {
    return yells.map( ( yell ) => {

      return (
  <div key={ yell._id } id={yell._id} className="ui fluid card"   >
        <div className="content">
         <img className="left rounded floated mini ui image" src="http://semantic-ui.com/images/avatar/large/stevie.jpg" /> 
         <div className="header">
          {yell.owner_username}
         </div>
            
          <div className="description">
             { yell.content }   lat = {yell.loc.coordinates[0]} long = {yell.loc.coordinates[1]}
          </div>      
        </div>
       <div className="extra content">
               <span className="right floated">
                  <i className="heart outline like icon"></i>
                  17 likes
               </span>
           3 <i className="comment icon"></i> Reply 
           <button className="ui button" 
              onClick={ 
                      () => { 
                      Session.set('yell', yell._id) 
                       PubSub.publish( 'location', [yell.loc.coordinates[0],yell.loc.coordinates[1]] );
                      Session.set('lat',yell.loc.coordinates[0])
                      Session.set('lng',yell.loc.coordinates[1])
                      alerto();

                    }}>
                b
            </button> <Link to={`/yells/${yell._id}`}>{yell._id}</Link>
             <div className="ui custom popup top left transition hidden">
  I'm not on the same level as the button, but i can still be found.
</div>
    </div> 
   </div>       );
    });
  } else {
    return <p>No list items yet!</p>;
  }
};


export const YellSingle = ( { yells } ) => (


<div className="ui segment">
  <h3 className="ui block header">
      Yells at your location 
    </h3>
  <div className="ui cards">
     { renderIfData( yells ) }  
  </div>
</div>  
);






