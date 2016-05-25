import React, {Component} from 'react';
import { Link } from 'react-router';
import PubSub from 'pubsub-js'
import { Meteor } from 'meteor/meteor';
import {YellButtons} from '../buttons/YellButtons.jsx'

const renderIfData = ( yells ) => {

  const alerto = (e)=> {
    yell=  Session.get('yell');
    $('.active_card').removeClass('active_card');
      $('#'+yell).addClass('active_card');
      lat = Session.get('lat');
      lng = Session.get('lng');
   
  }

     if ( yells && yells.length > 0 ) {
    return yells.map( ( yell ) => {
      user = Meteor.users.findOne({_id:yell.owner})

      return (
 //Column Starting
  <div className="yellcolumn" key={ yell._id } id={yell._id} >    
    <div className="box text"  >
        <div className="box-header">
          <h3><a href=""><img src={user.profile.profile_pic} alt="" />{user.username}</a>
            <span>March 21,18:45pm</span>
          </h3>
          <span><i className="fa fa-map-marker"></i><i className="fa fa-angle-down"></i></span>
          <div className="window"></div>
        </div>
        <div className="box-content">
          <div className="content">
            <p className="yellcont" > { yell.content } </p>
          </div>
        </div>
      
        <div className="box-buttons">
        <div className="row">
            <button><span className="fa fa-thumbs-up"></span>11 </button>
            <button> <span className="fa fa-comment"></span> 7 </button>
            <button><span className="fa fa-paw"></span> 3 </button>
          </div>
        </div>
   </div>
  </div> 
  

  //Column ending


      );
   



    });
  } else {
    return <p>No list items yet!</p>;
  }
};


export const YellSingle = ( { yells } ) => (


<div>
     { renderIfData( yells ) }  
</div>  
);






/*

const renderIfData = ( yells ) => {

  const alerto = (e)=> {
    yell=  Session.get('yell');
    $('.active_card').removeClass('active_card');
      $('#'+yell).addClass('active_card');
      lat = Session.get('lat');
      lng = Session.get('lng');
   
  }

     if ( yells && yells.length > 0 ) {
    return yells.map( ( yell ) => {
      user = Meteor.users.findOne({_id:yell.owner})

      return (
  <div key={ yell._id } id={yell._id} className="ui fluid card"   >
        <div className="content">
         <img className="left rounded floated mini ui image" src={user.profile.profile_pic} /> 
         <div className="header">
          {user.username}
         </div>
            
          <div className="description">
             { yell.content }   lat = {yell.loc.coordinates[0]} long = {yell.loc.coordinates[1]}
          </div>      
        </div>
       <div className="extra content">
               <span className="right floated">
                  <YellButtons yell={yell._id}  />
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





*/