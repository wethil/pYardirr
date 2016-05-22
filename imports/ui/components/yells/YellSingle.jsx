import React, {Component} from 'react';
import { Link } from 'react-router';


const renderIfData = ( yells ) => {

  const alerto = (e)=> {
    yell=  Session.get('yell');
    $('.active_card').removeClass('active_card');
      $('#'+yell).addClass('active_card');
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
             { yell.content }  
          </div>      
        </div>
       <div className="extra content">
               <span className="right floated">
                  <i className="heart outline like icon"></i>
                  17 likes
               </span>
           3 <i className="comment icon"></i> Reply <button className="ui button" onClick={ () => { Session.set('yell', yell._id); alerto()} } >b</button>
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






