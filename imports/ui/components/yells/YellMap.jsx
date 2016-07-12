import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Match } from 'meteor/check'




export const YellMap = React.createClass({
	getInitialState() {
		check= Match.test(this.props.loc, String);
		if (check==true){
			exactLoc=this.props.loc.split(",")

		} else {
			exactLoc=this.props.loc
		}
		return {
			zoom:7,
			position : exactLoc
		}
	},
	  componentDidMount() {
    this.mapApi = this.refs.map.leafletElement; // <= this is the Leaflet Map object

  },
	handleMove(){
		console.log(`center:${this.mapApi.getCenter()}`)
		console.log(this.mapApi.getBounds())
	},
	render() {

		 position = this.state.position
		console.log(position);
		return (
			<Map center={position}
		  		onMoveend={this.handleMove}
		  		ref="map"
		  		 zoom={this.state.zoom} >
		 		  <TileLayer
		      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
		      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		    />
					   {this.props.yells.map(function(yell){
			  		var myIcon = L.icon({
										iconUrl: yell.owner.profile.avatar,
										iconSize: [35, 35],
										iconAnchor: [35, 35],
										popupAnchor: [-3, -26],
										className : "ui circular image"
									});

			            return  <Marker key={yell._id} icon = {myIcon} position={yell.loc.coordinates}>
											<Popup>
												<span>{yell.owner.username}<br/>{yell.content}</span>
											</Popup>
										</Marker>;
			          })}

      	</Map>
		);
	}
});

















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
