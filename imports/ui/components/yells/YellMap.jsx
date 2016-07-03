import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [39.480974, -88.175493];

const renderIfData = ( yells ) => {
  if ( yells && yells.length > 0 ) {
    return yells.map( ( yell ) => {
    	var myIcon = L.icon({
				    iconUrl: yell.owner.profile.avatar,
				    iconSize: [35, 35],
				    iconAnchor: [35, 35],
				    popupAnchor: [-3, -26],
				    className : "ui circular image"			    
				});

      return  ( 
      			  <Marker key={yell._id} icon = {myIcon} position={yell.loc.coordinates}>
				      <Popup>
				        <span>{yell.owner.username}<br/>{yell.content}</span>
				      </Popup>
				   </Marker>
        
            )
    });
  } else {
    return ( <p>No list items yet!</p> ) ;
  }
};

export const YellMap = ( { yells } ) => (
  
  	<Map center={position} zoom={13}>
 		  <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
      { renderIfData( yells ) }
      </Map>
  
);












/*

import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import PubSub from 'pubsub-js'
export  const YellMap  = React.createClass({
	getInitialState () {
		return	{
				center : [39.479989,-88.175418],
				lat : 39.479989,
				lng : -88.175418
						
		};
	},
	

	componentWillMount() {
    
 PubSub.subscribe( 'location',  ( msg, data) =>{
        console.log(msg)
        console.log(data)
        
         this.setState({center:data})
          this.setState({lat:data[0]})
          this.setState({lng:data [1]})
        

    });
},
	
	render() {
		  var rows = [];
		center = this.state.center
		lat = this.state.lat
		lng = this.state.lng
	// this.props.comments.forEach(function(comment) {
      //rows.push(<div className="place" key={comment._id} lat={comment.loc.coordinates[0]} lng={comment.loc.coordinates[1]}>Comment</div>);
      
    //});
		return (
			 <div style={{width: '100%', height: '100vh'}} >
			 			 <GoogleMap  bootstrapURLKeys={{
												    key: 'AIzaSyBMIojtxSm1FTXsbv_DzEqjWSCtqPpnnjo',
												    language: 'en'  }} 
									center={center} zoom={13}  >
								<div className="place" lat={lat} lng={lng}>Yeelllll</div>	
							  
			      </GoogleMap>
			     
			 </div>
		);
	}
})
*/

//35.116167, 33.933192

//35.119013, 33.930188

//35.117632, 33.928123

