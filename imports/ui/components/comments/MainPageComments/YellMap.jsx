import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import PubSub from 'pubsub-js'
export  const YellMap  = React.createClass({
	componentWillMount() {
    
 token = PubSub.subscribe( 'location',  ( msg, data) =>{
        console.log(msg)
        console.log(data)
        
         this.setState({center:data})
          this.setState({lat:data[0]})
          this.setState({lng:data [1]})
        this.setState({yell:data [1]})

    });
},
	getInitialState () {
		return	{
				center : [39.479989,-88.175418],
				lat : 39.479989,
				lng : -88.175418,
				yell : 'data'		
		};
	},
	
	render() {
		center = this.state.center
		lat = this.state.lat
		lng = this.state.lng
		return (
			 <div style={{width: '100%', height: 250}} >
			 			 <GoogleMap  bootstrapURLKeys={{
												    key: 'AIzaSyBMIojtxSm1FTXsbv_DzEqjWSCtqPpnnjo',
												    language: 'en'  }} 
									center={center} zoom={11}  >
							 <div className="place" lat={lat} lng={lng}>MyPlace</div>      
			      </GoogleMap>
			      <input className="className" type='text' readOnly value={this.state.yell} ></input>
			 </div>
		);
	}
})
